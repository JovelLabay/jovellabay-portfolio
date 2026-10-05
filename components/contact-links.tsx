import type { ReactNode } from "react";
import { profile, site } from "@/lib/profile";

function Icon({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const linkClass =
  "inline-flex items-center gap-1.5 underline decoration-line underline-offset-4 hover:decoration-ink";

export function ContactLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <li>
        <a href={`mailto:${profile.email}`} className={linkClass}>
          <Icon className="h-3.5 w-3.5 shrink-0">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </Icon>
          Email
        </a>
      </li>
      <li>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          <Icon className="h-3.5 w-3.5 shrink-0">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </Icon>
          GitHub
        </a>
      </li>
      <li>
        <a href={site.resume} download className={linkClass}>
          <Icon className="h-3.5 w-3.5 shrink-0">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
            <path d="M12 15V3" />
          </Icon>
          Download resume
        </a>
      </li>
    </ul>
  );
}
