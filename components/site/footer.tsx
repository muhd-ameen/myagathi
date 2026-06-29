import Link from "next/link";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { nav, site, wa } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{site.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Your complete guide to Agatti Island, Lakshadweep. A government-licensed
              operator handling permits, transfers and unforgettable island experiences.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={wa("Hi! I'd love to know more about Agatti tours.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm font-medium text-cream/90 transition-colors hover:border-cream/50 hover:text-cream"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${site.phonePrimary}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm font-medium text-cream/90 transition-colors hover:border-cream/50 hover:text-cream"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/50">
              Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/50">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-cream/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cream/50" />
                <span>{site.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cream/50" />
                <div className="space-y-1">
                  <a
                    href={`tel:${site.phonePrimary}`}
                    className="block text-cream/80 transition-colors hover:text-cream"
                  >
                    +91 {site.phonePrimary}
                  </a>
                  <a
                    href={`tel:${site.phoneSecondary}`}
                    className="block text-cream/80 transition-colors hover:text-cream"
                  >
                    +91 {site.phoneSecondary}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>CIN: {site.cin}</p>
        </div>
      </div>
    </footer>
  );
}
