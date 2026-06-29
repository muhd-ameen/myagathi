import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { ExperienceCta } from "@/components/site/experience-cta";
import { activities } from "@/lib/content";
import { cn, imgPosition } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Activities on Agatti Island",
  description:
    "From pristine beaches to cultural experiences, discover everything Agatti Island has to offer.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="What you can do"
        title="Activities on Agatti Island"
        description="From pristine beaches to cultural experiences, discover everything Agatti has to offer. Your complete guide to the ultimate island adventure."
      />

      <section className="container py-12 md:py-16">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
          {activities.map((activity) => (
            <StaggerItem key={activity.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                      imgPosition(activity.image),
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {activity.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-muted">
                    {activity.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border/70 pt-5">
                    {activity.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ExperienceCta />
    </>
  );
}
