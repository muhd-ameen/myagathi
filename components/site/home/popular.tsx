import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/site/section";
import { popular } from "@/lib/content";
import { cn, imgPosition } from "@/lib/utils";

export function Popular() {
  return (
    <section className="container py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal className="flex justify-center">
          <SectionLabel>Destination</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
            Discover our most popular tours!
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-lg text-base text-stone-muted">
            We recommend several beautiful experiences across Agatti Island. Choose
            your favourite and let us handle the rest.
          </p>
        </Reveal>
      </div>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {popular.map((tour) => (
          <StaggerItem key={tour.title}>
            <div className="group h-full overflow-hidden rounded-3xl bg-white p-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                    imgPosition(tour.image),
                  )}
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <h3 className="text-base font-semibold text-ink">{tour.title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-stone-muted">
                  <MapPin className="h-4 w-4 text-olive" />
                  {tour.place}
                </div>
                <div className="mt-4">
                  <span className="text-sm font-semibold text-olive">{tour.meta}</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1} className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/packages">
            Explore more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
