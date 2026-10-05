import { education } from "@/lib/profile";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[160px_1fr] md:gap-12 md:py-24">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          Education
        </h2>
        <ul className="space-y-8">
          {education.map((item) => (
            <li
              key={item.credential}
              className="grid gap-1 md:grid-cols-[1fr_140px] md:gap-8"
            >
              <div>
                <h3 className="font-serif text-2xl tracking-tight">
                  {item.credential}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
              </div>
              <p className="text-sm text-muted md:text-right">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
