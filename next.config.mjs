/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted on Cloudflare Pages (no server needed).
  output: "export",
  // Static export cannot use the Next.js image optimization server.
  images: { unoptimized: true },
  // Emit each route as a folder with index.html — friendlier for static hosts.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
