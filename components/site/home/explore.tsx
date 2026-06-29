import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/site/section";
import { categories } from "@/lib/content";
import { cn, imgPosition } from "@/lib/utils";

export function Explore() {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <Reveal>
            <SectionLabel>Explore</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
              Our tailored destinations just for you
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-stone-muted md:max-w-md md:justify-self-end">
            Experience the difference with our exceptional, personalized island
            adventures. We prioritise what makes Agatti unique to you.
          </p>
        </Reveal>
      </div>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
        {categories.map((cat, i) => (
          <StaggerItem key={cat.name}>
            <Link
              href="/activities"
              className="group relative block aspect-[16/10] overflow-hidden rounded-3xl"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className={cn(
                  "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                  imgPosition(cat.image),
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{cat.description}</p>
                </div>
                <span className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  See Details
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
