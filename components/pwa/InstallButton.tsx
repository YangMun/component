"use client";

import { useEffect, useState } from "react";
import { useDisplayMode } from "./useDisplayMode";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

// Web-only affordance: when the browser reports the app is installable, show an
// "Install app" button. It never appears in the installed app (the
// beforeinstallprompt event does not fire there, and we also guard on mode).
export default function InstallButton({ label }: { label: string }) {
  const mode = useDisplayMode();
  const [promptEvent, setPromptEvent] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setPromptEvent(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => setPromptEvent(null);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (mode === "standalone" || !promptEvent) return null;

  return (
    <button
      type="button"
      onClick={async () => {
        await promptEvent.prompt();
        await promptEvent.userChoice;
        setPromptEvent(null);
      }}
      className="hidden border border-border px-3 py-1.5 text-xs font-medium text-fg transition-colors hover:border-fg sm:inline-flex"
    >
      ↓ {label}
    </button>
  );
}
