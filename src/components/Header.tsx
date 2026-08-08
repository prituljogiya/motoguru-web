"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-white/75 backdrop-blur-md">
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="relative z-10 shrink-0" aria-label={site.name}>
          <Image
            src="/images/mg-2026-web-logo.png"
            alt={site.name}
            width={160}
            height={76}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-accent-dark"
                  : "text-foreground/80 hover:text-accent-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact-us/"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-dark"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1.5">
            <span className={`h-0.5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isActive(link.href) ? "bg-accent/15 text-accent-dark" : "hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us/"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-ink"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
