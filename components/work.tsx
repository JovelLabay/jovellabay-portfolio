import { work } from "@/lib/profile";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[160px_1fr] md:gap-12 md:py-24">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          Work
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {work.map((project) => (
            <article key={project.name} className="py-10 first:pt-0 last:pb-0">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-4xl tracking-tight">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {project.name}
                  </a>
                </h3>
                <p className="text-sm text-muted">{project.period}</p>
              </div>
              <p className="mt-2 text-sm text-ink">{project.role}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                {project.summary}
              </p>
              <ul className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-ink">
                {project.points.map((point) => (
                  <li key={point} className="pl-4 -indent-4">
                    <span aria-hidden="true" className="text-muted">
                      —{" "}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                {project.href.replace("https://", "")}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
