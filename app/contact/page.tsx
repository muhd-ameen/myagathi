import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Faq } from "@/components/site/faq";
import { contactMethods, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Agatti's local experts. Get personalized recommendations, instant quotes and expert advice for your Lakshadweep trip.",
};

const methodIcons = [Phone, MessageCircle, Mail, Calendar];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Ready to start your adventure?"
        title="Let's plan your dream vacation"
        description="Our local experts are standing by to help you create the perfect Lakshadweep experience. Get personalized recommendations, instant quotes and expert advice."
      />

      {/* Contact methods */}
      <section className="container py-12 md:py-16">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, i) => {
            const Icon = methodIcons[i] ?? Phone;
            return (
              <StaggerItem key={method.title}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-olive text-cream">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 font-display text-lg font-semibold text-ink">
                    {method.title}
                  </h2>
                  <p className="mt-2 text-sm text-stone-muted">{method.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-olive">
                    {method.action}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-1 text-xs text-stone-muted">{method.available}</span>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Details + image */}
      <section className="container py-12 md:py-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] bg-white p-8 ring-1 ring-border/60 md:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Get in touch
              </h2>
              <div className="mt-8 space-y-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10 text-olive">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{site.name}</h3>
                    <p className="text-sm text-stone-muted">{site.location}</p>
                    <p className="text-sm text-stone-muted">
                      Government Licensed Tour Operator
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10 text-olive">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">Phone</h3>
                    <a
                      href={`tel:${site.phonePrimary}`}
                      className="block text-sm text-stone-muted transition-colors hover:text-olive"
                    >
                      +91 {site.phonePrimary} (Primary)
                    </a>
                    <a
                      href={`tel:${site.phoneSecondary}`}
                      className="block text-sm text-stone-muted transition-colors hover:text-olive"
                    >
                      +91 {site.phoneSecondary}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10 text-olive">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${site.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-stone-muted transition-colors hover:text-olive"
                    >
                      +91 {site.phonePrimary}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/local-food.jpg"
                alt="Agatti Island experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/95 p-6 backdrop-blur-sm">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Agatti Island
                </h3>
                <p className="mt-1 text-sm text-stone-muted">
                  Gateway to Lakshadweep paradise - your adventure starts here.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Got questions?</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-stone-muted">
              Everything you need to know about planning your perfect Lakshadweep
              adventure. Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
            </p>
          </Reveal>
        </div>
        <div className="mt-12">
          <Faq />
        </div>
      </section>
    </>
  );
}
