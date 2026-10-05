import { nav, profile } from "@/lib/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Page">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
