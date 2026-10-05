import { skillGroups } from "@/lib/profile";

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[160px_1fr] md:gap-12 md:py-24">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          Stack
        </h2>
        <dl className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt className="text-sm font-medium">{group.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
