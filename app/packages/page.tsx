import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Calendar, Check, MapPin } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { packages, customPackagePerks, wa } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Handcrafted Lakshadweep experiences - from quick day trips to immersive island adventures.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Handcrafted island experiences"
        title="Choose your perfect adventure"
        description="Each package is carefully designed to showcase the unique beauty of Lakshadweep. From quick escapes to immersive adventures, find the experience that matches your dreams."
      />

      <section className="container py-12 md:py-16">
        <Stagger className="grid gap-7 lg:grid-cols-3" amount={0.1}>
          {packages.map((pkg) => (
            <StaggerItem key={pkg.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 flex flex-col gap-2">
                    {pkg.bestseller && (
                      <span className="rounded-full bg-olive px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream">
                        Bestseller
                      </span>
                    )}
                    {pkg.popular && (
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-olive">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 px-4 py-2 text-right backdrop-blur-sm">
                    <div className="font-display text-xl font-semibold text-ink">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-stone-muted line-through">
                      {pkg.originalPrice}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    {pkg.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-olive">{pkg.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-stone-muted">
                    {pkg.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-stone-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-olive" />
                      {pkg.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-olive" />
                      {pkg.islands}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-2 border-t border-border/70 pt-6">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-ink/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex-1" />
                  <Button asChild className="w-full">
                    <a
                      href={wa(
                        `Hi! I'm interested in booking the "${pkg.title}" package. Can you help me with the booking process?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Custom packages */}
      <section className="bg-sand/40 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <SectionLabel>Tailored for you</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
                Don&apos;t see your perfect package?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-stone-muted">
                We specialise in creating custom experiences tailored to your dreams.
                Whether it&apos;s a romantic honeymoon, family adventure, or corporate
                retreat, we&apos;ll craft the perfect Lakshadweep experience just for you.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {customPackagePerks.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="h-full rounded-3xl bg-white p-8 text-center ring-1 ring-border/60">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-muted">{perk.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a
                href={wa(
                  "Hi! I'd like to get a custom quote for a Lakshadweep tour package. Can you help me create a personalized itinerary?",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Custom Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={wa(
                  "Hi! I'd like to schedule a consultation for my Lakshadweep trip. Can we discuss my travel plans?",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Consultation
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
