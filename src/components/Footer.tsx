import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { navLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line bg-ink text-white">
      <div className="container-page section-pad grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4">
            <SiteLogo height={52} inverted href="/" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-accent">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy/" className="transition hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions/" className="transition hover:text-accent">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-accent">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
