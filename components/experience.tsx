import { BulletList } from "@/components/bullet-list";
import { SeeMore } from "@/components/see-more";
import { experience } from "@/lib/profile";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[160px_1fr] md:gap-12 md:py-24">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          Experience
        </h2>
        <ol className="space-y-12">
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`}>
              <div className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
                <p className="text-sm text-muted">{job.period}</p>
                <div>
                  <h3 className="font-serif text-2xl tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm">{job.org}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {job.summary}
                  </p>
                  <div className="mt-4">
                    <BulletList items={job.highlights} />
                  </div>
                  <SeeMore>
                    <BulletList items={job.details} />
                  </SeeMore>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
