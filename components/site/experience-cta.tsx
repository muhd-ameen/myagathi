import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/site/section";
import { experienceCta } from "@/lib/content";

export function ExperienceCta() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/thinnakara.jpg"
        alt="Agatti Island lagoon"
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Top: cream wash keeps the dark CTA text legible over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/70 to-transparent" />
      {/* Bottom: long fade into the exact footer colour so the seam disappears */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-forest via-forest/85 to-transparent" />

      <div className="container relative z-10 flex flex-col items-center pt-24 pb-44 text-center md:pt-32 md:pb-56">
        <Reveal>
          <SectionLabel>{experienceCta.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
            {experienceCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-md text-base text-ink/70">
            {experienceCta.description}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-9">
          <a
            href={experienceCta.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 text-base font-medium text-ink shadow-md transition-all duration-300 hover:shadow-lg"
          >
            {experienceCta.cta.label}
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-olive text-cream transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
