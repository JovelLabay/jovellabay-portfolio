import { ContactLinks } from "@/components/contact-links";
import { facts, profile } from "@/lib/profile";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="md:flex md:items-start md:justify-between md:gap-16">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            {profile.location}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-lg text-ink md:text-xl">{profile.role}</p>
              <p className="mt-1 text-sm text-muted">{profile.focus}</p>
            </div>
            <img
              src="/jovel-labay.jpg"
              alt="Portrait of Jovel Labay"
              width={1024}
              height={1024}
              className="h-24 w-20 shrink-0 object-cover object-[center_12%] grayscale contrast-110 mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_78%,transparent)] md:hidden"
            />
          </div>
        </div>
        <img
          src="/jovel-labay.jpg"
          alt="Portrait of Jovel Labay"
          width={1024}
          height={1024}
          className="mt-6 hidden h-64 w-48 shrink-0 object-cover object-[center_12%] grayscale contrast-110 mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_78%,transparent)] md:block"
        />
      </div>
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
