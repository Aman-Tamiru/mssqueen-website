import { contact } from "@/lib/content";

function IconEnvelope() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
      <path d="M7 9h10v6H7V9Z" stroke="currentColor" strokeWidth="1" />
      <path d="m7 9 5 3.5L17 9" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
      <path
        d="M9.4 8.2c.2 1.4.8 2.7 1.7 3.8 1 1.1 2.3 1.9 3.8 2.3l1.1-1.1c.2-.2.6-.3.9-.2.8.3 1.7.4 2.6.4.4 0 .7.3.7.7v2.2c0 .4-.3.7-.7.7C13.3 17 7 10.7 7 4.7c0-.4.3-.7.7-.7H10c.4 0 .7.3.7.7 0 .9.1 1.8.4 2.6.1.3 0 .7-.2.9L9.4 8.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 7.2a3.4 3.4 0 0 1 3.4 3.4c0 2.4-3.4 6.2-3.4 6.2s-3.4-3.8-3.4-6.2A3.4 3.4 0 0 1 12 7.2Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="12" cy="10.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-black px-5 py-24 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-brand text-xs tracking-[0.4em] text-gold uppercase">Contact Us</p>
        <h2 className="mt-4 font-display text-4xl text-gold md:text-5xl">Contact Us</h2>
        <div className="mx-auto mt-5 h-px w-28 bg-gold" />
        <p className="mt-6 font-body text-xl text-gold-muted">
          For questions about authenticity or inquiries, please contact us directly
          using the information below.
        </p>
      </div>

      <ul className="mx-auto mt-14 grid max-w-4xl gap-8">
        <li className="flex items-start gap-5">
          <span className="text-gold">
            <IconEnvelope />
          </span>
          <div>
            <p className="font-brand text-xs tracking-[0.28em] text-gold uppercase">Email</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 block font-body text-xl text-gold-soft hover:text-gold"
            >
              {contact.email}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-5">
          <span className="text-gold">
            <IconPhone />
          </span>
          <div>
            <p className="font-brand text-xs tracking-[0.28em] text-gold uppercase">Phone</p>
            <a
              href={contact.phoneHref}
              className="mt-1 block font-body text-xl text-gold-soft hover:text-gold"
            >
              {contact.phone}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-5">
          <span className="text-gold">
            <IconPin />
          </span>
          <div>
            <p className="font-brand text-xs tracking-[0.28em] text-gold uppercase">Address</p>
            <p className="mt-1 font-body text-xl text-gold-soft">{contact.location}</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
