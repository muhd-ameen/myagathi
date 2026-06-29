"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const lines = hero.title.split("\n");

  return (
    <section className="relative px-2 pt-2 md:px-3 md:pt-3">
      <div className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden rounded-[1.75rem] md:min-h-[92vh] md:rounded-[2.5rem]">
        <Image
          src="/images/main-banner.png"
          alt="Agatti Island, Lakshadweep"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />

        <div className="relative z-10 px-6 pb-10 md:px-12 md:pb-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80"
              >
                {hero.eyebrow}
              </motion.span>

              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                {lines.map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.12 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
              >
                {hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Button asChild size="lg" variant="light">
                  <a href={hero.ctaPrimary.href} target="_blank" rel="noopener noreferrer">
                    {hero.ctaPrimary.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghostLight">
                  <a href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</a>
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 text-sm text-white/70"
              >
                {hero.socialProof}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
              className="flex flex-wrap gap-2 lg:justify-end"
            >
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
