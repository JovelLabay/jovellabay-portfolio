import { ContactLinks } from "@/components/contact-links";
import { profile } from "@/lib/profile";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[160px_1fr] md:gap-12 md:py-24">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          Contact
        </h2>
        <div>
          <p className="max-w-xl text-lg leading-relaxed">
            Open to lead engineering and technical product roles in web and
            mobile.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block font-serif text-3xl tracking-tight underline decoration-line underline-offset-4 hover:decoration-ink md:text-4xl"
          >
            {profile.email}
          </a>
          <p className="mt-4 text-sm text-muted">
            <a href={profile.phoneHref} className="hover:text-ink">
              {profile.phone}
            </a>
            <span aria-hidden="true"> · </span>
            {profile.location}
          </p>
          <ContactLinks className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" />
        </div>
      </div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>{profile.name}</p>
          <p>Lead engineering and technical product ownership</p>
        </div>
      </footer>
    </section>
  );
}
