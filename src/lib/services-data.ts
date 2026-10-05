import type { ServiceData } from "@/components/site/ServicePage";

// Unsplash photos — real photography, GCC/healthcare/technical themes
const P = {
  hospitalCorridor:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop",
  nurse:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80&auto=format&fit=crop",
  labTech:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80&auto=format&fit=crop",
  doctor:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&q=80&auto=format&fit=crop",
  engineer:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
  passport:
    "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=1200&q=80&auto=format&fit=crop",
  documents:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop",
  nurseAbroad:
    "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=80&auto=format&fit=crop",
  study:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
  training:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
  interview:
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1200&q=80&auto=format&fit=crop",
  classroom:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop",
  hospitalTeam:
    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80&auto=format&fit=crop",
  construction:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
  radiology:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80&auto=format&fit=crop",
  candidateHappy:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop",
  hrOffice:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop",
  paramedic:
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=80&auto=format&fit=crop",
};

const healthcareProcess: ServiceData["steps"] = [
  {
    title: "Submit Requirement",
    desc: "Tell us the role, location, and headcount. Takes under 5 minutes.",
    tag: "Same Day",
  },
  {
    title: "Receive Shortlist",
    desc: "First pre-screened candidate profiles within 48 hours.",
    tag: "48 Hours · Pre-verified",
  },
  {
    title: "Interview & Select",
    desc: "Review profiles, conduct interviews, confirm your hires.",
    tag: "Weeks 1–3 · Your Call",
  },
  {
    title: "Docs, Visa & Boarding",
    desc: "We handle licensing, attestation, and visa through to first day.",
    tag: "Weeks 3–8 · Managed",
  },
];

export const services: Record<string, ServiceData> = {
  "healthcare-recruitment": {
    slug: "healthcare-recruitment",
    serviceName: "Healthcare Recruitment",
    breadcrumbLabel: "Healthcare Recruitment",
    category: "Employer Service",
    headline1: "Verified Healthcare Talent,",
    headline2: "Ready in 48 Hours.",
    subtext:
      "Pre-screened nurses, allied health professionals, and paramedical specialists placed into hospital networks across the globe — MEA licensed, SCFHS/DHA/HAAD compliant.",
    primaryCta: "Post a Requirement",
    secondaryCta: "Browse Talent Pool",
    heroStats: [
      { value: "5,000+", label: "Placements Made" },
      { value: "200+", label: "Employer Partners" },
      { value: "48hr", label: "First Shortlist" },
    ],
    bandStats: [
      { value: "5,000+", label: "Placements Made" },
      { value: "200+", label: "Employer Partners" },
      { value: "48hr", label: "First Shortlist" },
    ],
    badge: "MEA Licensed · 100% Compliant",
    photo: P.hospitalCorridor,
    photoAlt: "Hospital corridor with medical staff",
    includedHeading: "Everything Included. Nothing Outsourced.",
    includedSubline:
      "One MEA-licensed partner. One accountable coordinator. Every step handled in-house.",
    features: [
      {
        title: "Pre-Screened Candidates",
        desc: "Every candidate verified for qualification authenticity, license eligibility, and relocation readiness before you see their profile.",
      },
      {
        title: "License Eligibility Check",
        desc: "SCFHS, DHA, HAAD, QCHP, MOH — we verify against the right licensing body for your country before submission.",
      },
      {
        title: "Documentation Handled",
        desc: "Dataflow, attestation, embassy paperwork — fully managed, zero burden on your HR team.",
      },
      {
        title: "One Dedicated Contact",
        desc: "A single recruitment partner for ongoing hiring, not a different agent every time.",
      },
    ],
    audiences: [
      {
        eyebrow: "For Hospitals & Clinics",
        heading: "Hire Verified Clinical Staff",
        desc: "From ICU nurses to OT technicians — pre-screened, licensed, and ready to start.",
        cta: "Post a Requirement",
        href: "/Employer/register",
        photo: P.hospitalTeam,
      },
      {
        eyebrow: "For Technical Employers",
        heading: "Hire Verified Technical Talent",
        desc: "Mechanical, civil, and electrical specialists verified for international compliance.",
        cta: "Browse Talent Pool",
        href: "/Employer/register",
        photo: P.engineer,
      },
    ],
    processHeading: "Requirement to Onboarding in 6–8 Weeks.",
    processSubline:
      "A predictable, milestone-tracked pipeline from your first brief to their first shift.",
    steps: healthcareProcess,
    ctaHeading: "Ready to Hire Verified Healthcare Talent?",
    ctaSubline: "Post a requirement — first shortlist in 48 hours.",
    ctaPrimary: "Post a Requirement",
    ctaSecondary: "Talk to Our Team",
  },

  "for-nurses": {
    slug: "for-nurses",
    serviceName: "Nursing Recruitment",
    breadcrumbLabel: "Nursing Recruitment",
    category: "Healthcare · Employer Service",
    headline1: "Every Nursing Specialty.",
    headline2: "Licensed & Verified.",
    subtext:
      "ICU, OT, ER, Paediatric, Staff Nurses — pre-screened for SCFHS, DHA, HAAD, and QCHP eligibility. India's largest source of internationally licensed nurses, placed in 48 hours.",
    primaryCta: "Contact Us",
    secondaryCta: "View Nurse Profiles",
    heroStats: [
      { value: "5,000+", label: "Nurses Placed" },
      { value: "15+", label: "Years Placing Nurses" },
      { value: "94%", label: "License Success Rate" },
    ],
    bandStats: [
      { value: "5,000+", label: "Nurses Placed" },
      { value: "15+", label: "Years Placing Nurses" },
      { value: "94%", label: "License Success Rate" },
    ],
    badge: "SCFHS / DHA / HAAD Licensed",
    photo: P.nurse,
    photoAlt: "Nurse in clinical setting",
    includedHeading: "Every Specialty. Every License Pathway.",
    includedSubline: "Fifteen years of nurse placements built into one clean, verifiable pipeline.",
    features: [
      {
        title: "All Nursing Specialties",
        desc: "ICU, CCU, OT, ER, Paediatric, Neonatal, General, Psychiatric — matched to your exact requirement.",
      },
      {
        title: "License Pathway Verified",
        desc: "SCFHS, DHA, HAAD, QCHP, MOH checked before submission — no compliance surprises.",
      },
      {
        title: "Prometric Coaching",
        desc: "Candidates coached for DHA/HAAD/SCFHS Prometric exams — higher pass rates, faster placement.",
      },
      {
        title: "48-Hour First Shortlist",
        desc: "Manually verified profiles in your inbox within 48 hours of posting.",
      },
    ],
    audiences: [
      {
        eyebrow: "For Hospitals",
        heading: "Staff Your Wards Fast",
        desc: "From general nursing to specialist ICU — shortlisted in 48 hours, licensed for your country.",
        cta: "Post a Requirement",
        href: "/Employer/register",
        photo: P.hospitalTeam,
      },
      {
        eyebrow: "For Nurses",
        heading: "Find Your Next Role Abroad",
        desc: "Browse verified nursing roles in Saudi Arabia, UAE, Qatar, UK, Canada and more.",
        cta: "Browse Nursing Roles",
        href: "/jobs",
        photo: P.nurseAbroad,
      },
    ],
    processHeading: "Requirement to Onboarding in 6–8 Weeks.",
    processSubline:
      "A predictable, milestone-tracked pipeline from your first brief to their first shift.",
    steps: healthcareProcess,
    ctaHeading: "Looking for Verified Nurses?",
    ctaSubline: "Post a requirement or browse our nurse talent pool.",
    ctaPrimary: "Post a Requirement",
    ctaSecondary: "Browse Nurse Roles",
  },

  "for-paramedical-technicians": {
    slug: "for-paramedical-technicians",
    serviceName: "Paramedical Technicians",
    breadcrumbLabel: "Paramedical Technicians",
    category: "Healthcare · Employer Service",
    headline1: "Biomedical, Radiology, Lab —",
    headline2: "Placed in 8 Weeks.",
    subtext:
      "Pre-screened paramedical and allied health technicians from India — verified for license eligibility and technical qualification authenticity before submission.",
    primaryCta: "Post a Requirement",
    secondaryCta: "Browse Technician Profiles",
    heroStats: [
      { value: "800+", label: "Technicians Placed" },
      { value: "12+", label: "Specialties Covered" },
      { value: "48hr", label: "First Shortlist" },
    ],
    bandStats: [
      { value: "800+", label: "Technicians Placed" },
      { value: "12+", label: "Specialties Covered" },
      { value: "48hr", label: "First Shortlist" },
    ],
    badge: "License Verified",
    photo: P.labTech,
    photoAlt: "Laboratory technician at work",
    includedHeading: "Allied Health, Verified End to End.",
    includedSubline:
      "Twelve technical specialties, one licensed partner, zero rework on documentation.",
    features: [
      {
        title: "Biomedical Engineering",
        desc: "Equipment maintenance, clinical engineering, hospital technical support roles.",
      },
      {
        title: "Radiology & Imaging",
        desc: "X-ray, MRI, CT, ultrasound technicians verified for license eligibility.",
      },
      {
        title: "Laboratory Technicians",
        desc: "Clinical lab, pathology, blood bank — qualification verified against employer requirement.",
      },
      {
        title: "Pharmacy & OT Support",
        desc: "Pharmacy technicians, OT assistants, sterile services — all specialties covered.",
      },
    ],
    audiences: [
      {
        eyebrow: "For Hospitals & Diagnostic Centres",
        heading: "Verified Technical Staff, Fast",
        desc: "Biomedical, lab, radiology — shortlisted and license-checked in 48 hours.",
        cta: "Post a Requirement",
        href: "/Employer/register",
        photo: P.radiology,
      },
      {
        eyebrow: "For Paramedical Candidates",
        heading: "Your Global Career Starts Here",
        desc: "Browse open roles for biomedical, lab, and radiology technicians across the globe.",
        cta: "Browse Roles",
        href: "/jobs",
        photo: P.paramedic,
      },
    ],
    processHeading: "Requirement to Onboarding in 6–8 Weeks.",
    processSubline:
      "A predictable, milestone-tracked pipeline from your first brief to their first shift.",
    steps: healthcareProcess,
    ctaHeading: "Need Paramedical Technicians?",
    ctaSubline: "Post a requirement — first verified profiles in 48 hours.",
    ctaPrimary: "Post a Requirement",
    ctaSecondary: "Talk to Our Team",
  },

  "for-doctors": {
    slug: "for-doctors",
    serviceName: "Doctor Recruitment",
    breadcrumbLabel: "Doctor Recruitment",
    category: "Healthcare · Employer Service",
    headline1: "Medical Professionals.",
    headline2: "Every Specialty, Licensed.",
    subtext:
      "Consultants, specialists, and general practitioners from India placed into hospital networks worldwide — MOH, DHA, HAAD, and SCFHS license pathway supported end to end.",
    primaryCta: "Post a Medical Requirement",
    secondaryCta: "Browse Doctor Profiles",
    heroStats: [
      { value: "500+", label: "Doctors Placed" },
      { value: "20+", label: "Specialties" },
      { value: "6–10 wk", label: "Avg. Process" },
    ],
    bandStats: [
      { value: "500+", label: "Doctors Placed" },
      { value: "20+", label: "Specialties" },
      { value: "6–10 wk", label: "Avg. Process" },
    ],
    badge: "MOH / DHA / HAAD Licensed",
    photo: P.doctor,
    photoAlt: "Doctor in hospital consultation setting",
    includedHeading: "Consultants to GPs. Compliant, Every Time.",
    includedSubline: "The full medical licensing pathway managed under one MEA-licensed roof.",
    features: [
      {
        title: "All Specialties",
        desc: "General medicine, surgery, internal medicine, paediatrics, emergency, gynaecology and more.",
      },
      {
        title: "License Pathway Managed",
        desc: "MOH, DHA, HAAD, SCFHS, QCHP — correct pathway per country identified and managed.",
      },
      {
        title: "Dataflow & Attestation",
        desc: "Primary source verification, certificate attestation, embassy paperwork — all handled.",
      },
      {
        title: "Prometric Support",
        desc: "Exam preparation and scheduling support for candidates requiring Prometric clearance.",
      },
    ],
    audiences: [
      {
        eyebrow: "For Hospitals & Clinics",
        heading: "Hire Verified Medical Professionals",
        desc: "Consultants to GPs — pre-screened, licensed, and ready for your facility.",
        cta: "Post a Requirement",
        href: "/Employer/register",
        photo: P.hospitalTeam,
      },
      {
        eyebrow: "For Doctors",
        heading: "Your Global Practice Awaits",
        desc: "Browse verified medical roles across Saudi Arabia, UAE, Qatar, and beyond.",
        cta: "Browse Medical Roles",
        href: "/jobs",
        photo: P.doctor,
      },
    ],
    processHeading: "Requirement to Onboarding in 6–10 Weeks.",
    processSubline:
      "A predictable, milestone-tracked pipeline from your first brief to their first shift.",
    steps: healthcareProcess,
    ctaHeading: "Looking to Hire Doctors?",
    ctaSubline: "Post a requirement — our medical recruitment desk responds same day.",
    ctaPrimary: "Post a Requirement",
    ctaSecondary: "Talk to Our Team",
  },

  "technical-recruitment": {
    slug: "technical-recruitment",
    serviceName: "Technical Recruitment",
    breadcrumbLabel: "Technical Recruitment",
    category: "Employer Service",
    headline1: "Engineering & Technical Talent,",
    headline2: "Verified for Global Markets.",
    subtext:
      "Mechanical, civil, electrical, and facilities specialists from India — vetted for qualification authenticity and work permit eligibility before submission.",
    primaryCta: "Post a Technical Requirement",
    secondaryCta: "Browse Technical Profiles",
    heroStats: [
      { value: "4,000+", label: "Candidates Deployed" },
      { value: "40+", label: "Employer Partners" },
      { value: "48hr", label: "First Shortlist" },
    ],
    bandStats: [
      { value: "4,000+", label: "Candidates Deployed" },
      { value: "40+", label: "Employer Partners" },
      { value: "48hr", label: "First Shortlist" },
    ],
    badge: "Work Permit Verified",
    photo: P.engineer,
    photoAlt: "Engineer on construction site",
    includedHeading: "Every Trade. Every Certificate. Verified.",
    includedSubline:
      "From civil site engineers to oil & gas HSE — a single verified pipeline built for international compliance.",
    features: [
      {
        title: "Construction & Infrastructure",
        desc: "Civil engineers, site supervisors, quantity surveyors, project managers.",
      },
      {
        title: "Oil & Gas",
        desc: "Mechanical, piping, instrumentation, HSE specialists for the Gulf and other global markets.",
      },
      {
        title: "Facilities & MEP",
        desc: "Electrical, HVAC, plumbing, building maintenance technicians.",
      },
      {
        title: "Manufacturing, Industrial & Skilled Trades",
        desc: "Production supervisors, quality control, mechanical technicians, welders, fitters and other skilled trades.",
      },
    ],
    audiences: [
      {
        eyebrow: "For Construction & Engineering Firms",
        heading: "Verified Technical Staff, Fast",
        desc: "Civil to electrical — shortlisted and qualification-checked within 48 hours.",
        cta: "Post a Requirement",
        href: "/Employer/register",
        photo: P.construction,
      },
      {
        eyebrow: "For Technical Candidates",
        heading: "Your Global Engineering Career",
        desc: "Browse open roles in construction, oil & gas, and facilities across the globe.",
        cta: "Browse Technical Roles",
        href: "/jobs",
        photo: P.engineer,
      },
    ],
    processHeading: "Requirement to Onboarding in 6–8 Weeks.",
    processSubline:
      "A predictable, milestone-tracked pipeline from your first brief to their first shift.",
    steps: healthcareProcess,
    ctaHeading: "Need Technical Talent?",
    ctaSubline: "Post a requirement — first verified profiles in 48 hours.",
    ctaPrimary: "Post a Requirement",
    ctaSecondary: "Talk to Our Team",
  },

  "visa-services": {
    slug: "visa-services",
    serviceName: "Visa Services",
    breadcrumbLabel: "Visa Services",
    category: "Candidate & Employer Service",
    headline1: "Visa Processing,",
    headline2: "End to End.",
    subtext:
      "Employment visa filing, embassy stamping, and attestation managed for every placement — candidates and employers never chase paperwork alone.",
    primaryCta: "Get Started",
    secondaryCta: "Talk to Our Team",
    heroStats: [
      { value: "94%", label: "First-Attempt Approval" },
      { value: "5,000+", label: "Visas Processed" },
      { value: "6–8 wk", label: "Avg. Timeline" },
    ],
    bandStats: [
      { value: "94%", label: "First-Attempt Approval" },
      { value: "5,000+", label: "Visas Processed" },
      { value: "6–8 wk", label: "Avg. Timeline" },
    ],
    badge: "94% First-Attempt Approval",
    photo: P.passport,
    photoAlt: "Passport and visa documents",
    includedHeading: "The Whole Visa File. Handled.",
    includedSubline:
      "From certificate attestation to embassy stamping — one workflow, one accountable coordinator.",
    features: [
      {
        title: "Employment Visa Filing",
        desc: "Full visa application prepared and submitted — correct documentation, correct format, first time.",
      },
      {
        title: "Embassy Stamping",
        desc: "Embassy appointment coordination and stamping process managed in India.",
      },
      {
        title: "Certificate Attestation",
        desc: "Educational and professional certificate attestation from MEA and relevant embassies.",
      },
      {
        title: "Dataflow Verification",
        desc: "Primary source verification for healthcare licensing in your destination country, submitted and tracked.",
      },
    ],
    audiences: [
      {
        eyebrow: "For Candidates",
        heading: "Never Chase a Form Again",
        desc: "Your coordinator handles every document — you focus on preparing for your new role.",
        cta: "Apply Now",
        href: "/candidate",
        photo: P.candidateHappy,
      },
      {
        eyebrow: "For Employers",
        heading: "Zero Compliance Risk",
        desc: "We carry the documentation burden — every candidate arrives visa-ready and compliant.",
        cta: "Post a Requirement",
        href: "/Employer/register",
        photo: P.hrOffice,
      },
    ],
    processHeading: "From First Form to Boarding Pass.",
    processSubline: "A visa timeline you can plan around — every stage tracked and communicated.",
    steps: [
      {
        title: "Document Collection",
        desc: "All required certificates and IDs collected via your coordinator.",
        tag: "Week 1",
      },
      {
        title: "Attestation & Dataflow",
        desc: "MEA attestation, embassy stamping, Dataflow submission handled.",
        tag: "Weeks 2–4",
      },
      {
        title: "Visa Application",
        desc: "Employment visa file prepared and submitted to the relevant embassy.",
        tag: "Weeks 3–6",
      },
      {
        title: "Stamping & Travel",
        desc: "Visa stamped, travel documents confirmed, pre-departure briefing done.",
        tag: "Weeks 6–8",
      },
    ],
    ctaHeading: "Visa Handled. You Just Show Up.",
    ctaSubline: "Get started — your coordinator takes it from here.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Talk to Our Team",
  },

  documentation: {
    slug: "documentation",
    serviceName: "Documentation",
    breadcrumbLabel: "Documentation",
    category: "Candidate Service",
    headline1: "Every Document,",
    headline2: "Handled.",
    subtext:
      "Dataflow, MOH portal submissions, certificate attestation, and embassy paperwork — fully managed by your coordinator from application to approval.",
    primaryCta: "Get Started",
    secondaryCta: "Talk to Our Team",
    heroStats: [
      { value: "100%", label: "Managed In-House" },
      { value: "5,000+", label: "Files Processed" },
      { value: "48hr", label: "Document Review" },
    ],
    bandStats: [
      { value: "100%", label: "Managed In-House" },
      { value: "5,000+", label: "Files Processed" },
      { value: "48hr", label: "Document Review" },
    ],
    badge: "MEA Licensed · In-House Processing",
    photo: P.documents,
    photoAlt: "Professional documentation desk",
    includedHeading: "Portals, Stamps, Attestations — All Handled.",
    includedSubline:
      "A single documentation desk covering every licensing body and embassy requirement across our destinations.",
    features: [
      {
        title: "Dataflow Submission",
        desc: "Primary source verification submitted and tracked — no delays from incorrect filings.",
      },
      {
        title: "MOH / DHA / HAAD Portal",
        desc: "Direct portal access for major licensing bodies worldwide — submissions done right first time.",
      },
      {
        title: "Certificate Attestation",
        desc: "MEA attestation, HRD attestation, and embassy stamping coordinated and tracked.",
      },
      {
        title: "Document Tracker",
        desc: "Candidates get a live status update on every document at every stage.",
      },
    ],
    audiences: [
      {
        eyebrow: "For Candidates",
        heading: "Zero Paperwork Stress",
        desc: "Your coordinator handles every form, every portal, every stamp — you just send us the originals.",
        cta: "Apply Now",
        href: "/candidate",
        photo: P.candidateHappy,
      },
      {
        eyebrow: "For Employers",
        heading: "Candidates Arrive Document-Ready",
        desc: "Every placed candidate's documentation is verified and complete before their first day.",
        cta: "Post a Requirement",
        href: "/Employer/register",
        photo: P.hrOffice,
      },
    ],
    processHeading: "Docs Done Right. First Time.",
    processSubline: "A milestone-tracked documentation pipeline candidates can watch in real time.",
    steps: [
      {
        title: "Document Collection",
        desc: "All required certificates and IDs collected via your coordinator.",
        tag: "Week 1",
      },
      {
        title: "Attestation & Dataflow",
        desc: "MEA attestation, embassy stamping, Dataflow submission handled.",
        tag: "Weeks 2–4",
      },
      {
        title: "Portal Submission",
        desc: "MOH, DHA, HAAD, SCFHS portal filings submitted and tracked.",
        tag: "Weeks 3–5",
      },
      {
        title: "Approval & Handover",
        desc: "Approvals received, documents handed over ready for visa.",
        tag: "Weeks 5–6",
      },
    ],
    ctaHeading: "Documents Sorted. Focus on Your Move.",
    ctaSubline: "Get started — your coordinator takes it from day one.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Talk to Our Team",
  },

  "nursing-recruitment": {
    slug: "nursing-recruitment",
    serviceName: "Nursing Careers Abroad",
    breadcrumbLabel: "Nursing Careers Abroad",
    category: "Candidate Service",
    headline1: "Your Nursing Career Abroad",
    headline2: "Starts Here.",
    subtext:
      "Browse verified nursing roles across Saudi Arabia, UAE, Qatar, UK, Canada, and more. License coaching, visa, and documentation support available.",
    primaryCta: "Browse Nursing Roles",
    secondaryCta: "Contact Us",
    heroStats: [
      { value: "5,000+", label: "Nurses Placed" },
      { value: "Verified", label: "Companies" },
      { value: "94%", label: "Visa Success Rate" },
    ],
    bandStats: [
      { value: "5,000+", label: "Nurses Placed" },
      { value: "Verified", label: "Companies" },
      { value: "94%", label: "Visa Success Rate" },
    ],
    badge: "Candidate Support · Ever",
    photo: P.nurseAbroad,
    photoAlt: "Nurse in professional setting abroad",
    includedHeading: "One Coordinator. Transparent Support. Every Step.",
    includedSubline:
      "Everything you need to nurse abroad — coaching, docs, visa — packaged into one managed journey.",
    features: [
      {
        title: "All Specialties Welcome",
        desc: "ICU, CCU, OT, ER, Paediatric, Neonatal, General, Staff Nurse — all placed.",
      },
      {
        title: "License Coaching",
        desc: "Prometric coaching for DHA, HAAD, SCFHS, QCHP, MOH-Oman.",
      },
      {
        title: "Visa & Documentation Handled",
        desc: "Your coordinator manages the full visa file — you focus on the interview.",
      },
      {
        title: "One Coordinator, Start to Landing",
        desc: "Same person from your first call to your first week on the ward.",
      },
    ],
    audiences: [
      {
        eyebrow: "BSc Nurses",
        heading: "Internationally Qualified Nurses",
        desc: "Direct entry to roles across the globe — SCFHS, DHA, NMC pathways supported.",
        cta: "Browse Roles",
        href: "/jobs",
        photo: P.nurseAbroad,
      },
      {
        eyebrow: "GNM Nurses",
        heading: "GNM-Qualified Nurses",
        desc: "GNM candidates assessed for direct and adaptation pathways.",
        cta: "Check Eligibility",
        href: "/contact",
        photo: P.nurse,
      },
    ],
    processHeading: "From Application to Boarding Pass.",
    processSubline:
      "A candidate journey we've run 5,000 times — with the same coordinator each step.",
    steps: [
      {
        title: "Apply",
        desc: "Send your CV — coordinator assigned within 24 hours.",
        tag: "Day 1",
      },
      {
        title: "Coaching & Prometric",
        desc: "Online coaching, mock exams, and Prometric clearance.",
        tag: "Weeks 1–4",
      },
      {
        title: "Interview & Offer",
        desc: "Employer interviews and offer confirmed.",
        tag: "Weeks 4–6",
      },
      {
        title: "Documentation & Visa",
        desc: "Documentation, visa stamping, pre-departure briefing.",
        tag: "Weeks 6–12",
      },
    ],
    ctaHeading: "Ready to Nurse Abroad?",
    ctaSubline: "Browse open roles — coordinator assigned within 24 hours.",
    ctaPrimary: "Browse Nursing Roles",
    ctaSecondary: "Chat on WhatsApp",
  },

  "prometric-coaching": {
    slug: "prometric-coaching",
    serviceName: "Prometric Coaching",
    breadcrumbLabel: "Prometric Coaching",
    category: "Candidate Service",
    headline1: "Prometric Coaching.",
    headline2: "Pass First Time.",
    subtext:
      "Online classes, recorded classes, AI-based mock tests and previous year questions — covering DHA, HAAD, SCFHS, QCHP, and MOH-Oman. Retake coaching is free only for candidates who fail their first attempt through Ozone and take the second attempt through Ozone, via online classes.",
    primaryCta: "Join the Next Cohort",
    secondaryCta: "Chat on WhatsApp",
    heroStats: [
      { value: "94%", label: "First-Attempt Pass" },
      { value: "48hr", label: "Mock Exam Scoring" },
      { value: "Online", label: "Classes & Mock Tests" },
    ],
    bandStats: [
      { value: "94%", label: "First-Attempt Pass" },
      { value: "48hr", label: "Mock Exam Scoring" },
      { value: "Online", label: "Classes & Mock Tests" },
    ],
    badge: "Online Classes · AI-Based Mock Tests",
    photo: P.study,
    photoAlt: "Candidate preparing for Prometric exam",
    includedHeading: "Live. Recorded. Retakeable.",
    includedSubline:
      "A working coaching product — not a one-off webinar — that gets candidates through first time.",
    highlights: {
      eyebrow: "Key Features",
      heading: "Everything You Need to Clear Prometric.",
      subline: "Five tools that work together — from your first class to exam day.",
      items: [
        {
          title: "Online Classes",
          desc: "Live online classes with experienced Prometric instructors — prepare from anywhere.",
        },
        {
          title: "AI-Based Mock Tests",
          desc: "Mock tests that follow the real exam pattern and show you exactly where to improve.",
        },
        {
          title: "Recorded Classes",
          desc: "Every class is recorded, so you can revisit topics and catch up at your own pace.",
        },
        {
          title: "Previous Year Questions (PYQs)",
          desc: "Practise with previous year questions to learn the exam pattern and question style.",
        },
        {
          title: "Regular Monitoring",
          desc: "Regular check-ins on your progress keep your preparation on track until exam day.",
        },
      ],
    },
    features: [
      {
        title: "Live Cohort Sessions",
        desc: "Weekly live classes with experienced Prometric instructors, recorded for replay.",
      },
      {
        title: "All Major Licensing Exams Covered",
        desc: "DHA (Dubai), HAAD (Abu Dhabi), SCFHS (Saudi), QCHP (Qatar), MOH-Oman.",
      },
      {
        title: "Mock Exams in 48 Hours",
        desc: "Full-length mock papers scored and returned with instructor feedback within 48 hours.",
      },
      {
        title: "WhatsApp Study Room",
        desc: "Live Q&A, daily practice questions, peer study group — active, not passive.",
      },
    ],
    audiences: [
      {
        eyebrow: "First-Time Applicants",
        heading: "Clear Your Exam First Try",
        desc: "Structured preparation from day one — most candidates clear on first attempt.",
        cta: "Join Cohort",
        href: "/candidate",
        photo: P.study,
      },
      {
        eyebrow: "Retake Candidates",
        heading: "Failed Before? We've Got You.",
        desc: "Free only if you failed your first attempt through Ozone and take the second attempt through Ozone, via online classes. Anand P. cleared on attempt two.",
        cta: "Get Retake Support",
        href: "/contact",
        photo: P.candidateHappy,
      },
    ],
    processHeading: "Coaching → Mocks → Clearance.",
    processSubline: "A repeatable path most Ozone candidates finish in under 6 weeks.",
    steps: [
      {
        title: "Enrol",
        desc: "Register as an Ozone candidate and start your Prometric coaching.",
        tag: "Day 1",
      },
      {
        title: "Attend Live Sessions",
        desc: "Weekly live classes + recordings for your target exam body.",
        tag: "Weeks 1–4",
      },
      {
        title: "Take Mock Exams",
        desc: "Full mock papers — scored and returned with feedback in 48 hours.",
        tag: "Weeks 3–5",
      },
      {
        title: "Clear & Proceed",
        desc: "Pass your Prometric — your visa process starts immediately after.",
        tag: "Weeks 5–6",
      },
    ],
    ctaHeading: "Ready to Pass Prometric First Time?",
    ctaSubline: "Register as a candidate — Prometric coaching starts immediately.",
    ctaPrimary: "Join the Next Cohort",
    ctaSecondary: "Chat on WhatsApp",
  },

  "grooming-sessions": {
    slug: "grooming-sessions",
    serviceName: "Pre-Departure Grooming",
    breadcrumbLabel: "Pre-Departure Grooming",
    category: "Candidate Service",
    headline1: "Leave Prepared.",
    headline2: "Land Confident.",
    subtext:
      "Pre-departure grooming sessions covering cultural orientation, workplace etiquette, interview preparation, and first-week readiness — included for every Ozone candidate.",
    primaryCta: "Apply Now",
    secondaryCta: "Learn More",
    heroStats: [
      { value: "5,000+", label: "Candidates Groomed" },
      { value: "100%", label: "Candidate Support" },
      { value: "1 wk", label: "Before Departure" },
    ],
    bandStats: [
      { value: "5,000+", label: "Candidates Groomed" },
      { value: "100%", label: "Candidate Support" },
      { value: "1 wk", label: "Before Departure" },
    ],
    badge: "Included for All Candidates",
    photo: P.training,
    photoAlt: "Group orientation and training session",
    includedHeading: "Practical Preparation. Not Slideware.",
    includedSubline:
      "Workplace culture, interview reps, and first-week logistics — real prep for a real move.",
    features: [
      {
        title: "Cultural Orientation",
        desc: "Workplace culture, social norms, and daily life in your destination country — what to expect from day one.",
      },
      {
        title: "Interview Preparation",
        desc: "Mock interviews with coordinator feedback, common employer questions, how to present interview-ready.",
      },
      {
        title: "Documentation Walkthrough",
        desc: "What to carry, what to expect at the airport, how to handle arrival formalities.",
      },
      {
        title: "First-Week Readiness",
        desc: "Accommodation setup, local SIM, bank account, transport — practical first-week guidance.",
      },
    ],
    audiences: [
      {
        eyebrow: "First-Time Overseas Candidates",
        heading: "Arrive Ready, Not Anxious",
        desc: "Cultural prep, interview coaching, and practical first-week guidance — all in one session.",
        cta: "Apply Now",
        href: "/candidate",
        photo: P.candidateHappy,
      },
      {
        eyebrow: "Returning Candidates",
        heading: "New Country, Same Support",
        desc: "Moving to a new country? Updated orientation for your specific destination.",
        cta: "Apply Now",
        href: "/candidate",
        photo: P.training,
      },
    ],
    processHeading: "Four Focused Sessions Before You Fly.",
    processSubline: "Structured prep the week before departure — nothing filler.",
    steps: [
      {
        title: "Culture & Etiquette",
        desc: "Destination workplace norms, daily life, social expectations.",
        tag: "Session 1",
      },
      {
        title: "Interview Reps",
        desc: "Mock interviews with real-time coordinator feedback.",
        tag: "Session 2",
      },
      {
        title: "Docs & Airport",
        desc: "What to carry, arrival formalities, immigration walkthrough.",
        tag: "Session 3",
      },
      {
        title: "First-Week Playbook",
        desc: "SIM, bank, accommodation, transport — the practical stuff.",
        tag: "Session 4",
      },
    ],
    ctaHeading: "Prepared Candidates Settle Faster.",
    ctaSubline: "Grooming sessions included — apply to get started.",
    ctaPrimary: "Apply Now",
    ctaSecondary: "Chat on WhatsApp",
  },

  "mock-interviews": {
    slug: "mock-interviews",
    serviceName: "Mock Interviews",
    breadcrumbLabel: "Mock Interviews",
    category: "Candidate Service",
    headline1: "Interview Like You've",
    headline2: "Done It Before.",
    subtext:
      "Coordinator-led mock interviews tailored to your target role and employer — for healthcare, engineering and technical roles. Hospital and site-based interview formats, role-specific clinical and technical questions, and real-time feedback.",
    primaryCta: "Book a Mock Interview",
    secondaryCta: "Chat on WhatsApp",
    heroStats: [
      { value: "5,000+", label: "Candidates Prepped" },
      { value: "Verified", label: "Companies" },
      { value: "48hr", label: "Feedback Turnaround" },
    ],
    bandStats: [
      { value: "5,000+", label: "Candidates Prepped" },
      { value: "Verified", label: "Companies" },
      { value: "48hr", label: "Feedback Turnaround" },
    ],
    badge: "Coordinator-Led",
    photo: P.interview,
    photoAlt: "Coaching interview session",
    includedHeading: "Role-Specific. Employer-Specific. Repeatable.",
    includedSubline: "The interview reps most candidates skip — and the ones we insist you do.",
    features: [
      {
        title: "Role-Specific Questions",
        desc: "Mock interviews built around your exact role — ICU nurse, civil engineer, HVAC technician and electrician interviews each test different things.",
      },
      {
        title: "Employer Interview Formats",
        desc: "Hospital formats from Al Hammadi, NMC, Aster and other partner hospitals, plus engineering and technical interview formats used by construction, oil & gas and facilities employers, replicated.",
      },
      {
        title: "Real-Time Feedback",
        desc: "Coordinator feedback during and after — specific, actionable, not generic.",
      },
      {
        title: "Repeat Until Confident",
        desc: "Unlimited mock sessions — most candidates do 2–3 before their employer interview.",
      },
    ],
    audiences: [
      {
        eyebrow: "First-Time Applicants",
        heading: "Know What to Expect",
        desc: "Hospital and engineering interviews are structured differently — we prepare you for exactly that.",
        cta: "Book Mock Interview",
        href: "/candidate",
        photo: P.interview,
      },
      {
        eyebrow: "Previously Unsuccessful Candidates",
        heading: "Turn a Rejection Into a Placement",
        desc: "Understand what went wrong and fix it before your next employer interview.",
        cta: "Book Now",
        href: "/contact",
        photo: P.candidateHappy,
      },
    ],
    processHeading: "Book, Rehearse, Refine, Interview.",
    processSubline: "Feedback loops tight enough that improvement compounds session to session.",
    steps: [
      {
        title: "Book Session",
        desc: "Pick a slot — coordinator confirms within 24 hours.",
        tag: "Day 1",
      },
      {
        title: "Role Briefing",
        desc: "Target role, employer, and format confirmed before the mock.",
        tag: "Pre-session",
      },
      {
        title: "Mock Interview",
        desc: "Coordinator-led session in hospital or technical interview format.",
        tag: "Session",
      },
      {
        title: "Feedback & Retake",
        desc: "Written feedback in 48 hours — repeat until confident.",
        tag: "Ongoing",
      },
    ],
    ctaHeading: "Prepared Candidates Get Placed.",
    ctaSubline: "Book your mock interview — coordinator confirms within 24 hours.",
    ctaPrimary: "Book a Mock Interview",
    ctaSecondary: "Chat on WhatsApp",
  },

  training: {
    slug: "training",
    serviceName: "Training & Coaching",
    breadcrumbLabel: "Training & Coaching",
    category: "Candidate Service",
    headline1: "Structured Training.",
    headline2: "Included From Day One.",
    subtext:
      "Prometric coaching, mock interviews, pre-departure grooming, and documentation guidance.",
    primaryCta: "Apply Now",
    secondaryCta: "See What's Included",
    heroStats: [
      { value: "5,000+", label: "Trained" },
      { value: "Verified", label: "Companies" },
      { value: "94%", label: "First-Attempt Pass" },
    ],
    bandStats: [
      { value: "5,000+", label: "Trained" },
      { value: "Verified", label: "Companies" },
      { value: "94%", label: "First-Attempt Pass" },
    ],

    photo: P.classroom,
    badge: "Complete Candidate Training",
    photoAlt: "Training and coaching classroom",
    includedHeading: "The Full Package.",
    includedSubline: "Every service a candidate needs, bundled into one preparation programme.",
    features: [
      {
        title: "Prometric Coaching",
        desc: "Live cohort + recorded sessions for DHA, HAAD, SCFHS, QCHP, MOH-Oman. Mock exams scored in 48 hours.",
      },
      {
        title: "Mock Interviews",
        desc: "Coordinator-led, role-specific, hospital format. Repeat until confident.",
      },
      {
        title: "Pre-Departure Grooming",
        desc: "Cultural orientation, workplace etiquette, first-week practical guidance.",
      },
      {
        title: "Documentation Guidance",
        desc: "Step-by-step walkthrough of every form, every portal, every stamp.",
      },
    ],
    audiences: [
      {
        eyebrow: "Healthcare Candidates",
        heading: "From Application to Placement",
        desc: "Prometric coaching, mock interviews, grooming — the full package.",
        cta: "Apply Now",
        href: "/candidate",
        photo: P.nurse,
      },
      {
        eyebrow: "Technical Candidates",
        heading: "Ready from Day One",
        desc: "Interview prep and pre-departure orientation tailored for technical and engineering roles.",
        cta: "Apply Now",
        href: "/candidate",
        photo: P.engineer,
      },
    ],
    processHeading: "One Journey. Four Layers of Support.",
    processSubline:
      "Coaching, interviews, grooming, and docs — sequenced across your candidate journey.",
    steps: [
      {
        title: "Enrol",
        desc: "Register as an Ozone candidate — training auto-included.",
        tag: "Day 1",
      },
      {
        title: "Coaching Phase",
        desc: "Prometric prep, mock exams, WhatsApp study room.",
        tag: "Weeks 1–4",
      },
      {
        title: "Interview Phase",
        desc: "Role-specific mock interviews with coordinator feedback.",
        tag: "Weeks 4–6",
      },
      {
        title: "Grooming & Fly",
        desc: "Cultural prep, docs walkthrough, first-week playbook.",
        tag: "Pre-departure",
      },
    ],
    ctaHeading: "Everything You Need to Get There.",
    ctaSubline: "Apply now — full training package starts immediately.",
    ctaPrimary: "Apply Now",
    ctaSecondary: "Chat on WhatsApp",
  },
};
