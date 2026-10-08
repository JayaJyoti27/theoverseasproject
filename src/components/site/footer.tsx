import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const columns: { title: string; wide?: boolean; links: { label: string; to?: string }[] }[] = [
  {
    title: "Candidates",
    links: [
      { label: "Browse Jobs", to: "/jobs" },
      { label: "How It Works", to: "/For-Candidates" },
      { label: "Documentation", to: "/Services/Documentation" },
      { label: "Success Stories", to: "/For-Candidates" },
    ],
  },
  {
    title: "Employers",
    links: [
      { label: "Post a Requirement", to: "/employers" },
      { label: "Talent Pool", to: "/employers" },
      { label: "Process", to: "/employers" },
      { label: "Compliance", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/contact" },
      { label: "Press", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Sectors",
    links: [
      { label: "Healthcare & Nursing", to: "/Services/Healthcare-rec" },
      { label: "Engineering & Construction", to: "/Services/Technical-rec" },
      { label: "Hospitality", to: "/employers" },
      { label: "Retail", to: "/employers" },
      { label: "Logistics", to: "/employers" },
    ],
  },
  {
    title: "Destinations",
    wide: true,
    links: [
      { label: "Kuwait", to: "/Country/Kuwait" },
      { label: "Oman", to: "/Country/Oman" },
      { label: "Qatar", to: "/Country/Qatar" },
      { label: "Saudi Arabia", to: "/Country/Saudi-Arabia" },
      { label: "UAE", to: "/Country/UAE" },
      { label: "Australia", to: "/Country/Australia" },
      { label: "Africa", to: "/Country/Africa" },
      { label: "Canada", to: "/Country/Canada" },
      { label: "Croatia", to: "/Country/Croatia" },
      { label: "Germany", to: "/Country/Germany" },
      { label: "Hungary", to: "/Country/Hungary" },
      { label: "Iraq", to: "/Country/Iraq" },
      { label: "Israel", to: "/Country/Israel" },
      { label: "Italy", to: "/Country/Italy" },
      { label: "Latvia", to: "/Country/Latvia" },
      { label: "Malaysia", to: "/Country/Malaysia" },
      { label: "Maldives", to: "/Country/Maldives" },
      { label: "Romania", to: "/Country/Romania" },
      { label: "Russia", to: "/Country/Russia" },
      { label: "Singapore", to: "/Country/Singapore" },
      { label: "UK", to: "/Country/UK" },
    ],
  },
];

// TODO: replace with real company details
const CONTACT = {
  addressLines: [
    "Ozone Overseas Consultants",
    "40/1223-A, Praveen Chandran Building, Near Palarivattam Flyover, Pipeline Jn, Palarivattam, Edappally P.O, Ernakulam - 682 024, Kerala, India",
  ],
  emails: ["info@ozoneoverseas.in"],
  phones: ["+91 4843513302, 8086066611"],
  whatsapp: { display: "+91 8086066611", href: "https://wa.me/918086066611" },
  mapsEmbedUrl:
    "https://www.google.com/maps?q=40%2F1223-A%2C+Praveen+Chandran+Building%2C+Near+Palarivattam+Flyover%2C+Pipeline+Jn%2C+Palarivattam%2C+Edappally%2C+Ernakulam+682024%2C+Kerala%2C+India&output=embed",

  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=40%2F1223-A%2C+Praveen+Chandran+Building%2C+Near+Palarivattam+Flyover%2C+Pipeline+Jn%2C+Palarivattam%2C+Edappally%2C+Ernakulam+682024%2C+Kerala%2C+India",
  licenseNo: "B-1934/KER/PART/1000+/5/10386/2023",
};

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--navy)] text-white">
      {/* Wave divider at top edge */}
      <div
        aria-hidden
        className="absolute -top-px left-0 right-0 h-10 overflow-hidden leading-none"
      >
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,60 C300,10 900,80 1200,20 L1200,0 L0,0 Z" fill="#EAF2FC" />
        </svg>
      </div>
      <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 font-[family-name:var(--font-display)] text-sm font-bold">
                O
              </span>
              <div className="font-[family-name:var(--font-display)] text-lg font-bold">
                Ozone Overseas Consultants
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Verified overseas talent for healthcare, construction, and technical sectors across
              the globe.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
                <a
                  href={CONTACT.mapsLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {CONTACT.addressLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
                <div className="flex flex-col">
                  {CONTACT.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="hover:text-white">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
                <div className="flex flex-col">
                  {CONTACT.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {CONTACT.whatsapp.display}
                </a>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className={col.wide ? "col-span-2 md:col-span-6" : undefined}>
              <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
                {col.title}
              </div>
              <ul
                className={`mt-4 text-sm text-white/65 ${
                  col.wide
                    ? "grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-4 md:grid-cols-7"
                    : "space-y-2.5"
                }`}
              >
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="transition hover:text-white">
                        {l.label}
                      </Link>
                    ) : (
                      <a href="#" className="transition hover:text-white">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Google Maps embed */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Office location"
            src={CONTACT.mapsEmbedUrl}
            width="100%"
            height="220"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block grayscale invert-[0.9]"
          />
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/55">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              Recruitment Licence No. <span className="text-white/80">{CONTACT.licenseNo}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link to="/privacypolicy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span className="text-white/25">·</span>
              <Link to="/privacypolicy" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
              <span className="text-white/25">·</span>
              <span>© {new Date().getFullYear()} Ozone Overseas Consultants Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
