import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, MapPin, Clock } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ExperienceCta } from "@/components/site/experience-cta";
import {
  aboutIntro,
  aboutMetrics,
  aboutLocation,
  aboutGeography,
  companyStory,
  companyValues,
  trustBadges,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About Agatti Island",
  description: aboutIntro.description,
};

const trustIcons = [ShieldCheck, MapPin, Clock];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        description={aboutIntro.description}
      />

      {/* Metrics */}
      <section className="container pb-8">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutMetrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-border/60">
                <div className="font-display text-4xl font-semibold text-olive">
                  {m.value}
                </div>
                <div className="mt-3 font-medium text-ink">{m.label}</div>
                <div className="mt-1 text-sm text-stone-muted">{m.note}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Location & geography */}
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/beach.jpg"
                alt="Agatti Island lagoon and beach"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionLabel>Where is Agatti?</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                A coral atoll in the Arabian Sea
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-muted">
                  Location
                </h3>
                <ul className="mt-4 space-y-3">
                  {aboutLocation.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.15}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-muted">
                  Geography
                </h3>
                <ul className="mt-4 space-y-3">
                  {aboutGeography.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Company story + values */}
      <section className="bg-sand/40 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <SectionLabel>{companyStory.eyebrow}</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
                {companyStory.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-stone-muted">
                {companyStory.description}
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {companyValues.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-border/60">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-muted">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Trust badges */}
      <section className="container py-20 md:py-28">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {trustBadges.map((b, i) => {
            const Icon = trustIcons[i] ?? ShieldCheck;
            return (
              <StaggerItem key={b.title}>
                <div className="h-full rounded-3xl border border-border/70 p-8 text-center transition-colors hover:border-olive/40">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-olive text-cream">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-muted">{b.description}</p>
                  <p className="mt-4 inline-flex rounded-full bg-olive/10 px-4 py-1.5 text-xs font-medium text-olive">
                    {b.highlight}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <ExperienceCta />
    </>
  );
}
