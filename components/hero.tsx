import { ContactLinks } from "@/components/contact-links";
import { facts, profile } from "@/lib/profile";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        {profile.location}
      </p>
      <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-lg text-ink md:text-xl">{profile.role}</p>
      <p className="mt-1 text-sm text-muted">{profile.focus}</p>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {profile.summary}
      </p>
      <ContactLinks className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" />
      <ul className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
        {facts.map((fact) => (
          <li key={fact.label}>
            <p className="font-serif text-3xl tracking-tight">{fact.value}</p>
            <p className="mt-1 text-sm text-muted">{fact.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
