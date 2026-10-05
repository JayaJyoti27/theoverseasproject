import type { Country, JobCategory } from "./countries";

/**
 * Destination pages beyond the five core GCC countries.
 * These intentionally have no stats, salary tables, testimonials, gallery or hero photo:
 * add them per country only once real, verified figures/images are available.
 * The layout skips any section whose data is missing.
 */

const COMMON_DOCS = [
  "Passport valid for at least 2 years, with blank pages",
  "Updated CV / resume",
  "Educational and professional certificates",
  "Experience letters from previous employers",
  "Recent passport-size photographs",
];

const COMMON_HANDLED = [
  "Review of the employer offer and contract before you commit",
  "Work visa / permit application support with the employer",
  "e-Migrate clearance and emigration formalities where applicable",
  "Pre-departure briefing on rights, contract terms and grievance channels",
];

const medical = "Medical examination as required by the destination";
const police = "Police clearance certificate";

type Input = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  intro: string;
  jobs: [string, JobCategory["icon"]][];
  life: string;
  visaNotes: string;
  docNotes: string;
  extraDocs?: string[];
  faqs: { q: string; a: string }[];
};

const make = (c: Input): Country => ({
  slug: c.slug,
  name: c.name,
  metaTitle: `${c.name} Recruitment Agency — Ozone Overseas Consultants`,
  metaDescription: `MEA-licensed recruitment for ${c.name}. ${c.region} Contract-first placements with visa and documentation support from Ozone Overseas Consultants.`,
  heroImageKeywords: c.name,
  tagline: c.tagline,
  intro: c.intro,
  jobCategories: c.jobs.map(([title, icon]) => ({ title, icon })),
  lifeInCountry: c.life,
  visaNotes: c.visaNotes,
  visaHandled: COMMON_HANDLED,
  documentationNotes: c.docNotes,
  documentationChecklist: [...COMMON_DOCS, police, medical, ...(c.extraDocs ?? [])],
  faqs: [
    ...c.faqs,
    {
      q: `How do I know which ${c.name} roles are open right now?`,
      a: `Openings change with employer demand. Browse current roles on our jobs page or contact our team and we will tell you what is open for your profile.`,
    },
    {
      q: "Do you charge fees in cash or outside the official process?",
      a: "No. Ozone Overseas Consultants works under its MEA recruitment licence and e-Migrate. Any service charge follows the permitted limits and is documented with a receipt.",
    },
  ],
});

export const moreCountries: Country[] = [
  make({
    slug: "malaysia",
    name: "Malaysia",
    region: "Manufacturing, hospitality and healthcare roles.",
    tagline: "Licensed, contract-first recruitment to Malaysia.",
    intro:
      "Malaysia offers openings in manufacturing, hospitality, plantation support and healthcare. Ozone Overseas Consultants coordinates the full journey, from employer matching and contract review to work-pass formalities and departure.",
    jobs: [
      ["Manufacturing Operators", "Factory"],
      ["Hospitality Staff", "Hotel"],
      ["Technicians", "Wrench"],
      ["Nurses & Caregivers", "HeartPulse"],
    ],
    life:
      "Malaysia is multicultural, widely English-speaking in cities, and has a large Indian community, which helps many candidates settle in quickly. We brief you on housing, local transport and workplace expectations before you fly.",
    visaNotes:
      "Foreign workers need an employer-sponsored work pass, and the category depends on the role and salary level. Requirements are set by Malaysian immigration authorities and can change, so we confirm current rules with the employer for each placement.",
    docNotes:
      "Document needs vary by pass category and employer. We give you a role-specific checklist once your profile is shortlisted.",
    faqs: [
      {
        q: "Which work pass will I need for Malaysia?",
        a: "It depends on your role, salary and employer. The employer applies for the pass and we guide you through the documents. We confirm the exact category before you accept an offer.",
      },
    ],
  }),
  make({
    slug: "singapore",
    name: "Singapore",
    region: "Healthcare, hospitality, marine and technical roles.",
    tagline: "Compliant, transparent recruitment to Singapore.",
    intro:
      "Singapore recruits skilled professionals and technicians across healthcare, hospitality, marine, engineering and construction. We match candidates to verified employers and support the process through to arrival.",
    jobs: [
      ["Nurses & Healthcare Staff", "Stethoscope"],
      ["Hospitality Staff", "Hotel"],
      ["Marine & Shipyard Technicians", "Cog"],
      ["Engineers", "Briefcase"],
    ],
    life:
      "Singapore is English-speaking, well connected and tightly regulated. Workplace rules, housing norms and local laws are strict, so our pre-departure briefing covers what to expect from day one.",
    visaNotes:
      "Singapore uses pass categories such as Employment Pass, S Pass and Work Permit, each with its own eligibility criteria set by the Ministry of Manpower. Your employer applies on your behalf, and eligibility depends on your qualifications, experience and the role.",
    docNotes:
      "Qualification verification is usually part of the process. Keep original certificates ready and we will advise what needs attestation.",
    faqs: [
      {
        q: "Can I apply for Singapore without a degree?",
        a: "Some skilled and technical roles are open to diploma or trade-certificate holders. Eligibility depends on the pass category and employer, and we review your profile before shortlisting.",
      },
    ],
  }),
  make({
    slug: "maldives",
    name: "Maldives",
    region: "Resort, hospitality and technical roles.",
    tagline: "Ethical recruitment for resort and island employers in the Maldives.",
    intro:
      "The Maldives hires hospitality, resort operations, engineering and healthcare staff. We connect candidates with verified employers and make sure contract terms, accommodation and benefits are clear before departure.",
    jobs: [
      ["Resort & Hotel Staff", "Hotel"],
      ["Chefs & F&B Team", "UtensilsCrossed"],
      ["Technicians & Maintenance", "Wrench"],
      ["Healthcare Staff", "Stethoscope"],
    ],
    life:
      "Many roles are on resort islands with staff accommodation and meals provided by the employer. Island life is quiet and remote, so we make sure you understand your location, rota and travel arrangements up front.",
    visaNotes:
      "Foreign employees need a work permit arranged by the employer under Maldivian immigration and employment rules. Requirements can change, so we confirm current steps with the employer.",
    docNotes:
      "Resorts often ask for experience letters and trade or hospitality certificates. We tell you exactly what is needed for each role.",
    faqs: [
      {
        q: "Is accommodation provided in the Maldives?",
        a: "Resort roles commonly include staff accommodation and meals, but terms differ by employer. We confirm what is included in writing before you accept.",
      },
    ],
  }),
  make({
    slug: "germany",
    name: "Germany",
    region: "Healthcare, engineering and skilled-trade roles.",
    tagline: "Structured, compliant recruitment to Germany.",
    intro:
      "Germany has strong demand for nurses, caregivers, engineers and skilled tradespeople. We help qualified candidates prepare for the process, including German language training, qualification recognition steps and employer matching.",
    jobs: [
      ["Nurses", "Stethoscope"],
      ["Elderly Care Staff", "HandHeart"],
      ["Engineers & Technicians", "Cog"],
      ["Skilled Trades", "Hammer"],
    ],
    life:
      "Daily life in Germany works best with German language skills, which is why language training is part of our preparation. We also brief you on housing, health insurance and workplace culture.",
    visaNotes:
      "Skilled workers generally apply for a national visa or an EU Blue Card route, and many regulated professions need recognition of foreign qualifications first. Language level requirements depend on the role. We guide you on the route that fits your profile.",
    docNotes:
      "Qualification recognition and certified translations are usually required. Allow extra time for this stage.",
    extraDocs: ["Certified German or English translations of certificates, where required"],
    faqs: [
      {
        q: "Do I need to speak German to work in Germany?",
        a: "Most roles, and nearly all healthcare roles, require German at a defined level. We offer language training to help you prepare.",
      },
      {
        q: "Will my qualifications be recognised?",
        a: "Regulated professions such as nursing need formal recognition. Others depend on the role. We explain the process for your qualification during your profile review.",
      },
    ],
  }),
  make({
    slug: "australia",
    name: "Australia",
    region: "Healthcare, trades and hospitality roles.",
    tagline: "Honest, well-documented recruitment to Australia.",
    intro:
      "Australia recruits in healthcare, aged care, trades and hospitality. Routes depend on your occupation, skills assessment and experience, so we begin with a careful profile review before suggesting a pathway.",
    jobs: [
      ["Nurses", "Stethoscope"],
      ["Aged Care Workers", "HandHeart"],
      ["Trades & Construction", "HardHat"],
      ["Chefs & Hospitality", "UtensilsCrossed"],
    ],
    life:
      "Australia offers a high standard of living with strong worker protections, but costs in major cities are high. We help you plan accommodation and early expenses before you travel.",
    visaNotes:
      "Skilled work visas usually require an eligible occupation, a skills assessment where applicable, and employer sponsorship or points-based eligibility. Rules change often, so we check current requirements for your case.",
    docNotes:
      "Skills assessments and English test results are commonly required. We tell you which ones apply to your occupation.",
    extraDocs: ["English language test result, where required"],
    faqs: [
      {
        q: "Do I need an English test for Australia?",
        a: "Most skilled routes require proof of English ability. The accepted tests and scores depend on the visa and occupation, and we confirm them for you.",
      },
    ],
  }),
  make({
    slug: "africa",
    name: "Africa",
    region: "Mining, construction, healthcare and education roles.",
    tagline: "Verified employers and clear contracts for roles across Africa.",
    intro:
      "Employers across Africa recruit in construction, mining, oil and gas, healthcare, hospitality and education. Conditions vary widely by country, so we confirm the employer, location and contract terms individually before any placement.",
    jobs: [
      ["Construction & Civil", "HardHat"],
      ["Mining & Industrial", "Factory"],
      ["Healthcare Staff", "Stethoscope"],
      ["Teachers & Trainers", "GraduationCap"],
    ],
    life:
      "Living conditions, safety and healthcare access differ greatly between countries and sites. We give you a country-specific briefing and share the employer's accommodation and travel arrangements in writing.",
    visaNotes:
      "Each country has its own work permit rules, and some sites need health clearances such as vaccinations. We confirm the requirements for the specific country and role before you proceed.",
    docNotes:
      "Requirements depend on the destination country and employer. We share a checklist once a role is confirmed.",
    extraDocs: ["Vaccination records as required by the destination"],
    faqs: [
      {
        q: "Which African countries do you recruit for?",
        a: "This depends on current employer demand. Contact our team with your profile and we will tell you which destinations and roles are available.",
      },
    ],
  }),
  make({
    slug: "croatia",
    name: "Croatia",
    region: "Hospitality, construction and healthcare roles.",
    tagline: "Licensed recruitment to Croatia.",
    intro:
      "Croatia has seasonal and year-round demand in tourism and hospitality, construction and healthcare. We match candidates with verified employers and support documentation and travel.",
    jobs: [
      ["Hotel & Restaurant Staff", "Hotel"],
      ["Chefs & Kitchen Team", "UtensilsCrossed"],
      ["Construction Workers", "HardHat"],
      ["Caregivers", "HandHeart"],
    ],
    life:
      "Croatia has a Mediterranean climate and a strong tourism season. Language basics help in daily life, and we prepare you with practical information on housing and local expectations.",
    visaNotes:
      "Non-EU workers generally need a residence and work permit linked to an employer. Quota and procedural rules can change, so we check the current position for each placement.",
    docNotes:
      "Foreign documents are often needed with translations or legalisation. We tell you what applies to your role.",
    extraDocs: ["Translations or legalisation of documents, where required"],
    faqs: [
      {
        q: "Are Croatian jobs seasonal?",
        a: "Some hospitality roles are seasonal and others are year-round. The contract states the duration, and we confirm it before you accept.",
      },
    ],
  }),
  make({
    slug: "latvia",
    name: "Latvia",
    region: "Logistics, construction and care roles.",
    tagline: "Transparent recruitment to Latvia.",
    intro:
      "Latvia hires in logistics and warehousing, construction, manufacturing and care. We connect candidates with verified employers and help with documentation and preparation for living in the EU.",
    jobs: [
      ["Warehouse & Logistics", "Briefcase"],
      ["Construction Workers", "HardHat"],
      ["Factory Operators", "Factory"],
      ["Care Staff", "HandHeart"],
    ],
    life:
      "Winters in Latvia are cold, and Latvian and Russian are widely spoken alongside English in cities. We cover housing, clothing and everyday practicalities in our briefing.",
    visaNotes:
      "Non-EU nationals generally need a work-based visa or residence permit supported by an employer. Rules and requirements change, so we verify them for your case.",
    docNotes:
      "Expect to provide attested or translated documents. We list what is needed once a role is confirmed.",
    extraDocs: ["Translations of key documents, where required"],
    faqs: [
      {
        q: "Will I need to learn Latvian?",
        a: "Many workplaces use English or Russian, but basic Latvian helps in daily life. Language needs depend on the role.",
      },
    ],
  }),
  make({
    slug: "romania",
    name: "Romania",
    region: "Construction, hospitality and manufacturing roles.",
    tagline: "Compliant recruitment to Romania.",
    intro:
      "Romania recruits foreign workers for construction, manufacturing, hospitality and logistics. We work with verified employers and support you through documentation and pre-departure.",
    jobs: [
      ["Construction Workers", "HardHat"],
      ["Factory & Production", "Factory"],
      ["Hospitality Staff", "Hotel"],
      ["Drivers & Logistics", "Car"],
    ],
    life:
      "Romania has a lower cost of living than much of Western Europe. We help you understand accommodation, transport and what your employer provides.",
    visaNotes:
      "Foreign workers typically need a work authorisation obtained by the employer, followed by a long-stay work visa. Procedures and quotas change, so we confirm the current process.",
    docNotes:
      "Documents often need translation and legalisation. We give you a role-specific list.",
    extraDocs: ["Translations or legalisation of documents, where required"],
    faqs: [
      {
        q: "Who applies for the work authorisation?",
        a: "The employer normally starts the work authorisation in Romania. We coordinate with them and tell you what you need to supply.",
      },
    ],
  }),
  make({
    slug: "italy",
    name: "Italy",
    region: "Healthcare, hospitality and skilled-trade roles.",
    tagline: "Structured, lawful recruitment to Italy.",
    intro:
      "Italy hires in healthcare, caregiving, hospitality, agriculture and skilled trades. Non-EU recruitment follows national quota rules, so we explain timelines honestly and work only through lawful channels.",
    jobs: [
      ["Nurses & Care Staff", "Stethoscope"],
      ["Hospitality Staff", "Hotel"],
      ["Chefs", "UtensilsCrossed"],
      ["Skilled Trades", "Hammer"],
    ],
    life:
      "Italian language skills make settling in much easier. We brief you on regional differences, housing and what to expect from your employer.",
    visaNotes:
      "Non-EU workers are generally admitted under annual quota rules, which involve employer applications and set procedural steps. Timelines can be long and depend on the quota year.",
    docNotes:
      "Qualification recognition and translated documents are commonly needed, especially for healthcare roles.",
    extraDocs: ["Translated and legalised certificates, where required"],
    faqs: [
      {
        q: "Why can Italy take longer than other destinations?",
        a: "Non-EU hiring follows quota and application windows, so timelines depend on when applications open and how they are processed.",
      },
    ],
  }),
  make({
    slug: "israel",
    name: "Israel",
    region: "Caregiving, construction and agriculture roles.",
    tagline: "Government-channel recruitment to Israel, subject to current advisories.",
    intro:
      "Israel recruits foreign workers in caregiving, construction and agriculture under government-regulated frameworks. Availability depends on current regulations and the security situation, so we confirm what is open before discussing any opportunity.",
    jobs: [
      ["Caregivers", "HandHeart"],
      ["Construction Workers", "HardHat"],
      ["Agriculture Workers", "Hammer"],
    ],
    life:
      "Working conditions, location and safety guidance can change quickly. We share current official advisories and the employer's arrangements with you before you decide.",
    visaNotes:
      "Foreign workers are admitted through government-regulated channels and employer permits. Requirements and availability change, and Indian government advisories also apply, so we verify them for every case.",
    docNotes:
      "Medical and police clearances are standard. We confirm exact requirements and eligibility for your role.",
    faqs: [
      {
        q: "Is recruitment to Israel currently open?",
        a: "It depends on current regulations and official advisories. Contact us and we will tell you honestly what is possible right now.",
      },
    ],
  }),
  make({
    slug: "iraq",
    name: "Iraq",
    region: "Oil and gas, construction and technical roles.",
    tagline: "Careful, advisory-aware recruitment to Iraq.",
    intro:
      "Iraq has demand in oil and gas, construction, engineering and technical services. Because conditions and travel advisories vary by region, we place candidates only with verified employers and share all site and safety arrangements in writing.",
    jobs: [
      ["Oil & Gas Technicians", "Factory"],
      ["Engineers", "Cog"],
      ["Construction Workers", "HardHat"],
      ["Electricians & Mechanics", "Zap"],
    ],
    life:
      "Site conditions, accommodation and security arrangements differ by project. You should understand your location, rotation and employer support before accepting any offer.",
    visaNotes:
      "Work visas are arranged through the employer, and Indian government rules or advisories on travel and emigration may apply. We check current requirements for each placement.",
    docNotes:
      "Safety and technical certificates are often required for industrial roles. We tell you which apply.",
    extraDocs: ["Trade or safety certificates relevant to the role"],
    faqs: [
      {
        q: "Is it safe to work in Iraq?",
        a: "Safety varies by region and project. We share official advisories and the employer's security and accommodation arrangements so you can decide with full information.",
      },
    ],
  }),
  make({
    slug: "uk",
    name: "United Kingdom",
    region: "Healthcare, care and skilled roles.",
    tagline: "Lawful, well-documented recruitment to the UK.",
    intro:
      "The UK recruits in healthcare, social care and other skilled occupations. Sponsorship rules are strict and change often, so we review eligibility carefully before submitting your profile to any employer.",
    jobs: [
      ["Nurses", "Stethoscope"],
      ["Care Workers", "HandHeart"],
      ["Allied Health Professionals", "HeartPulse"],
      ["Engineers & Technicians", "Cog"],
    ],
    life:
      "Costs, especially housing and transport in cities, vary widely. We help you understand pay, deductions and early expenses before you travel.",
    visaNotes:
      "Most routes need a licensed UK sponsor, an eligible role and meeting salary and English requirements. Healthcare professionals usually need professional registration first. Rules change often, so we confirm current requirements.",
    docNotes:
      "Professional registration, English test results and certificate of sponsorship details are commonly needed.",
    extraDocs: ["English language test result", "Professional registration documents, where required"],
    faqs: [
      {
        q: "Does the UK need professional registration?",
        a: "Nurses and many other health professionals must register with the relevant UK regulator. We explain the steps and timeline for your profession.",
      },
    ],
  }),
  make({
    slug: "russia",
    name: "Russia",
    region: "Construction, manufacturing and technical roles.",
    tagline: "Verified-employer recruitment to Russia, subject to current advisories.",
    intro:
      "Some Russian employers recruit foreign workers in construction, manufacturing and technical roles. Because regulations and advisories affecting travel and payments change, we confirm what is currently possible before taking forward any opportunity.",
    jobs: [
      ["Construction Workers", "HardHat"],
      ["Factory & Production", "Factory"],
      ["Technicians", "Wrench"],
    ],
    life:
      "Language, climate and living arrangements differ significantly from India. We brief you carefully on housing, working conditions and employer support.",
    visaNotes:
      "Work authorisation is arranged by the employer under Russian rules, and Indian government advisories can also apply. Requirements change, so we verify them for each case.",
    docNotes:
      "Translated and legalised documents are usually required. We give you a role-specific list.",
    extraDocs: ["Translations or legalisation of documents, where required"],
    faqs: [
      {
        q: "Is recruitment to Russia currently available?",
        a: "Availability depends on current regulations and advisories. Contact our team and we will tell you what is possible and what is not.",
      },
    ],
  }),
  make({
    slug: "canada",
    name: "Canada",
    region: "Healthcare, trades and hospitality roles.",
    tagline: "Honest, compliant recruitment to Canada.",
    intro:
      "Canada has demand in healthcare, skilled trades, hospitality and logistics. Pathways vary by province and occupation, so we assess your profile and explain realistic options before you commit to any process.",
    jobs: [
      ["Nurses", "Stethoscope"],
      ["Personal Support Workers", "HandHeart"],
      ["Skilled Trades", "Hammer"],
      ["Hospitality Staff", "Hotel"],
    ],
    life:
      "Canada is welcoming to newcomers, but climate and living costs vary a lot by city and province. We help you plan for winter, housing and early expenses.",
    visaNotes:
      "Work permits are usually tied to an employer and often need a Labour Market Impact Assessment or an exemption. Some routes lead to permanent residence. Rules change frequently, so we confirm current requirements.",
    docNotes:
      "Credential assessments and English or French test results are often required, and regulated professions need provincial licensing.",
    extraDocs: ["Language test result", "Credential assessment, where required"],
    faqs: [
      {
        q: "Can I move to Canada permanently through a job?",
        a: "Some work routes can lead to permanent residence, but this depends on your occupation, province and eligibility. We explain the options that match your profile.",
      },
    ],
  }),
  make({
    slug: "hungary",
    name: "Hungary",
    region: "Manufacturing, logistics and hospitality roles.",
    tagline: "Compliant recruitment to Hungary.",
    intro:
      "Hungary has demand in manufacturing, automotive supply chains, logistics and hospitality. We match candidates with verified employers and guide you through documentation and preparation for living in the EU.",
    jobs: [
      ["Factory & Production", "Factory"],
      ["Warehouse & Logistics", "Briefcase"],
      ["Hospitality Staff", "Hotel"],
      ["Technicians", "Wrench"],
    ],
    life:
      "Many manufacturing employers provide or arrange accommodation, but terms vary. We confirm housing, transport and working hours in writing before you accept.",
    visaNotes:
      "Foreign workers need an employer-supported work permit or visa under Hungarian rules, which have changed in recent years. We verify the current process for each placement.",
    docNotes:
      "Translated documents and clearances are commonly required. We confirm the list once a role is confirmed.",
    extraDocs: ["Translations of key documents, where required"],
    faqs: [
      {
        q: "Does the employer provide accommodation in Hungary?",
        a: "Some employers do and some do not. We confirm what is included in the offer before you decide.",
      },
    ],
  }),
];
