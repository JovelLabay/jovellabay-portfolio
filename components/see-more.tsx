"use client";

import { useState } from "react";

export function SeeMore({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 max-w-2xl">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="cursor-pointer text-sm text-muted transition-colors hover:text-ink"
      >
        {open ? "See less" : "See more"}
      </button>
      {open ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
