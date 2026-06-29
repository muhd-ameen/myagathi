import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionLabel({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
        light ? "text-cream/70" : "text-olive",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          light ? "bg-cream/40" : "bg-olive/50",
        )}
      />
      {children}
    </span>
  );
}

/** Hero band used at the top of inner pages (About, Activities, etc.). */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-cream pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="container max-w-4xl">
        <Reveal>
          <SectionLabel>{eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink text-balance md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-muted text-pretty">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
