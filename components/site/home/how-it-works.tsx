import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/site/section";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:aspect-square">
            <Image
              src="/images/sight-seeing.jpg"
              alt="Agatti Island viewpoint"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-bottom"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>How it works</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
              Trip planning process
            </h2>
          </Reveal>

          <Stagger className="mt-10 space-y-3">
            {howItWorks.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="group flex items-start gap-5 rounded-2xl p-5 transition-colors duration-300 hover:bg-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/10 text-sm font-semibold text-olive transition-colors duration-300 group-hover:bg-olive group-hover:text-cream">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
