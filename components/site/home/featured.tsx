import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/site/section";
import { featured } from "@/lib/content";

export function Featured() {
  return (
    <section className="container py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Reveal>
            <SectionLabel>Tour</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
              Come here and explore the beautiful places here.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} direction="left">
          <Button asChild>
            <Link href="/activities">
              Explore more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {featured.map((item) => (
          <StaggerItem key={item.name}>
            <Link href={item.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                  <p className="text-sm text-stone-muted">{item.blurb}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-olive transition-transform duration-300 group-hover:translate-x-1">
                  See more
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
