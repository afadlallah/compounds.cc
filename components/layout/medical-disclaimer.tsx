"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const KEY = "compounds-cc-disclaimer-dismissed";

export function MedicalDisclaimer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setVisible(!window.sessionStorage.getItem(KEY));
  }, []);

  if (!visible) return null;

  return (
    <div className="border-b border-amber-500/20 bg-amber-500/5 text-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-amber-900 dark:text-amber-200">
        <p>
          Educational content only — not medical advice. Always consult a qualified
          clinician before taking any compound.
        </p>
        <button
          type="button"
          aria-label="Dismiss disclaimer"
          onClick={() => {
            window.sessionStorage.setItem(KEY, "1");
            setVisible(false);
          }}
          className="inline-flex h-6 w-6 items-center justify-center rounded-md hover:bg-amber-500/10"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
