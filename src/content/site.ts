export const site = {
  name: "Motoguru",
  tagline: "Trusted Car Specialists",
  description:
    "MotoGuru connects car owners with trusted local garages through technology, delivering transparent pricing, quality service, and effortless automotive care.",
  email: "support@motoguru.in",
  phone: "+91 00000 00000",
  address: "MotoGuru Pvt. Ltd. 123, Tech Park Road, XYZ East, Mumbai — 000000, India",
  playStoreUrl: "https://play.google.com/store/apps/details?id=in.motoguru.app",
  appStoreUrl: "https://apps.apple.com/app/motoguru/id0000000000",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/for-merchant/", label: "For Merchant" },
  { href: "/blogs/", label: "Blogs" },
  { href: "/frequently-asked-questions/", label: "FAQ" },
  { href: "/contact-us/", label: "Contact Us" },
] as const;

export const services = [
  {
    title: "Basic Services",
    subtitle: "Periodic & Detailing Services",
    description:
      "Refined car care that maintains excellence, protects value, and delivers confidence on every journey.",
    image: "/images/basic-service-v1.png",
  },
  {
    title: "Mechanical Service",
    subtitle: "Repairs & Issue Resolution",
    description:
      "Precision-driven expertise resolving complex concerns, restoring performance, and ensuring dependable driving confidence every time.",
    image: "/images/machanical-service-v1.png",
  },
  {
    title: "Denting & Painting",
    subtitle: "Exterior Restoration & Painting",
    description:
      "Expert exterior refinement restoring form, finish, and factory-fresh appeal with lasting protection and visual precision.",
    image: "/images/denting-painting-v1.png",
  },
] as const;

export const whyChoose = [
  {
    title: "Verified workshops only",
    description:
      "Every garage on Motoguru is screened for capability, service quality, and customer feedback before listing.",
  },
  {
    title: "Clear, itemized estimates",
    description:
      "Review what’s included before you book. No hidden add-ons — additional work needs your approval first.",
  },
  {
    title: "Live job visibility",
    description:
      "Track progress with real-time updates so you always know where your car stands, from drop-off to delivery.",
  },
  {
    title: "You stay in control",
    description:
      "Compare options, pick the workshop that fits, approve costs, and stay informed until the job is done.",
  },
] as const;

export const partnerServices = [
  "Periodic Service",
  "Mechanical Repair",
  "Denting & Painting",
  "AC Service",
  "Car Spa Service",
  "Other",
] as const;

export const merchantBenefits = [
  "Increase in walk-ins & revenue",
  "Build Reputation And Trust",
  "Simplified Bookings & Payments",
  "Digital Presence & Marketing",
  "Transparent pricing & SOP-driven services",
  "Access to Service History & Insights",
] as const;

export const merchantStats = [
  { value: "3X", label: "higher visibility among nearby car owners" },
  { value: "70%", label: "higher intent customers with clear requirements" },
  { value: "4.5+", label: "ratings help convert first-time users into repeat customers" },
] as const;

export const faqs = [
  {
    q: "What is MotoGuru?",
    a: "MotoGuru is a platform that helps you book car service and repairs from verified local garages. You can compare options, choose the garage you prefer, and track the job with clear pricing and updates.",
  },
  {
    q: "How is MotoGuru different from other car service apps?",
    a: "MotoGuru is built around transparency and choice. You get to select the garage that fits your budget, distance, and ratings; see clear inclusions; and get updates during the job — no hidden surprises, no forced assignments.",
  },
  {
    q: "Can I choose my own garage?",
    a: "Yes. You can browse available garages, compare their profiles, ratings, and offerings, and then book the one you want.",
  },
  {
    q: "Are the garages verified?",
    a: "We list garages after basic verification checks (business details, service capability, and past customer feedback where available). We also continuously monitor ratings and issue resolution to maintain quality.",
  },
  {
    q: "How does pricing work? Are there hidden charges?",
    a: "We aim to keep pricing clear and itemized. You’ll see what’s included in the selected service/repair. If the garage finds additional issues during inspection, they’ll share a revised estimate for your approval before proceeding.",
  },
  {
    q: "What services can I book on MotoGuru?",
    a: "Common bookings include regular servicing (basic/standard/comprehensive), brake work, suspension, clutch, battery, AC service/repairs, denting/painting (where available), diagnostics and general repairs.",
  },
  {
    q: "Do you offer pick-up and drop?",
    a: "In many locations, yes — depending on the garage. You’ll see pick-up/drop availability while choosing the garage or during booking.",
  },
  {
    q: "How do I know my car is being worked on properly?",
    a: "You’ll receive service updates, and wherever possible, photo/video notes for key work stages. You can also contact support if you need clarifications during the job.",
  },
  {
    q: "What if I’m not satisfied with the service?",
    a: "If you face an issue, raise it through MotoGuru support within the shared resolution window. We’ll review the case with the garage and help with a fair resolution — this may include rework, partial refund, or other corrective action based on the situation.",
  },
  {
    q: "How do I book a service on MotoGuru?",
    a: "Enter your car details and location, select service/repair type, compare garages and choose one, confirm slot, pickup (if needed), and payment method, then track updates until delivery.",
  },
] as const;
