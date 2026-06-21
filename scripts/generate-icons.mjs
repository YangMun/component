// Generates the PWA/favicon PNG assets from code so no binary design tool is
// needed. Run with: node scripts/generate-icons.mjs
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "icons");
mkdirSync(outDir, { recursive: true });

const BRAND = [124, 58, 237]; // violet-600
const WHITE = [255, 255, 255];

// CRC32 for PNG chunks.
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

// Draw a rounded-square "component" glyph on a brand background.
function drawIcon(size, { maskable }) {
  const px = Buffer.alloc(size * size * 4);
  const inset = maskable ? size * 0.18 : size * 0.0; // safe zone for maskable
  const cx = size / 2;
  const cy = size / 2;
  // Glyph: a white rounded rectangle outline (suggesting a UI card/button).
  const gW = size * (maskable ? 0.42 : 0.5);
  const gH = size * (maskable ? 0.3 : 0.36);
  const gx0 = cx - gW / 2;
  const gx1 = cx + gW / 2;
  const gy0 = cy - gH / 2;
  const gy1 = cy + gH / 2;
  const stroke = size * 0.055;
  const radius = size * 0.06;

  function inRoundedRect(x, y, x0, y0, x1, y1, r) {
    if (x < x0 || x > x1 || y < y0 || y > y1) return false;
    const rx = Math.min(r, (x1 - x0) / 2);
    const ry = Math.min(r, (y1 - y0) / 2);
    const cxs = [x0 + rx, x1 - rx];
    const cys = [y0 + ry, y1 - ry];
    if ((x < cxs[0] || x > cxs[1]) && (y < cys[0] || y > cys[1])) {
      const ccx = x < cxs[0] ? cxs[0] : cxs[1];
      const ccy = y < cys[0] ? cys[0] : cys[1];
      return (x - ccx) ** 2 / rx ** 2 + (y - ccy) ** 2 / ry ** 2 <= 1;
    }
    return true;
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      let color = BRAND;
      let alpha = 255;
      const outsideRounded =
        !maskable &&
        !inRoundedRect(x, y, inset, inset, size - inset, size - inset, size * 0.22);
      if (outsideRounded) {
        alpha = 0;
      } else {
        const outer = inRoundedRect(x, y, gx0, gy0, gx1, gy1, radius);
        const inner = inRoundedRect(
          x,
          y,
          gx0 + stroke,
          gy0 + stroke,
          gx1 - stroke,
          gy1 - stroke,
          radius
        );
        if (outer && !inner) color = WHITE;
        // small dot inside to suggest a button label
        const dotR = size * 0.035;
        if ((x - cx) ** 2 + (y - cy) ** 2 <= dotR ** 2) color = WHITE;
      }
      px[i] = color[0];
      px[i + 1] = color[1];
      px[i + 2] = color[2];
      px[i + 3] = alpha;
    }
  }
  return px;
}

function encodePNG(size, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  // rest zero (compression, filter, interlace)
  // Add filter byte (0) at the start of each scanline.
  const raw = Buffer.alloc(size * size * 4 + size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const targets = [
  { name: "icon-192.png", size: 192, maskable: false },
  { name: "icon-512.png", size: 512, maskable: false },
  { name: "icon-maskable-512.png", size: 512, maskable: true },
  { name: "apple-touch-icon.png", size: 180, maskable: true },
  { name: "favicon-32.png", size: 32, maskable: false },
];

for (const t of targets) {
  const png = encodePNG(t.size, drawIcon(t.size, { maskable: t.maskable }));
  writeFileSync(join(outDir, t.name), png);
  console.log("wrote", t.name, png.length, "bytes");
}
