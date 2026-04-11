"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface UserMenuProps {
  user: {
    displayName: string | null;
    handle: string | null;
    avatarUrl: string | null;
    isAdmin: boolean;
  };
}

export function UserMenu({ user }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const label = user.displayName || user.handle || "User";
  const initials = label
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-2 rounded-md border border-border/60 px-2 py-1.5 text-xs font-medium hover:bg-muted"
      >
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt=""
            className="h-5 w-5 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[10px] font-semibold">
            {initials}
          </span>
        )}
        <span className="hidden uppercase tracking-wide sm:inline">{label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-md border border-border bg-background py-1 shadow-lg">
          <Link
            href="/chat"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm hover:bg-muted"
          >
            Chat
          </Link>
          {user.isAdmin && (
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm hover:bg-muted"
            >
              Admin
            </Link>
          )}
          <div className="my-1 border-t border-border" />
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="block w-full px-4 py-2 text-left text-sm hover:bg-muted"
            >
              Sign out
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
