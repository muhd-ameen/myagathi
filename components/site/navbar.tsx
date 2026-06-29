"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { nav, site, wa } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light text only when over the dark hero (home, top, menu closed).
  const onDark = isHome && !scrolled && !open;
  const solid = scrolled || open || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className={cn(
            "text-lg font-semibold tracking-tight transition-colors",
            onDark ? "text-white" : "text-ink",
          )}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  onDark
                    ? "text-white/80 hover:text-white"
                    : "text-stone-muted hover:text-ink",
                  active && (onDark ? "text-white" : "text-ink"),
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                      onDark ? "bg-white" : "bg-olive",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant={onDark ? "ghostLight" : "primary"}
            className="hidden sm:inline-flex"
          >
            <a
              href={wa(
                "Hi! I'm interested in your Agatti Island tours. Can you help me with information?",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan My Trip
            </a>
          </Button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              onDark ? "text-white hover:bg-white/15" : "text-ink hover:bg-ink/5",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/60 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === item.href
                      ? "bg-olive/10 text-olive"
                      : "text-ink hover:bg-ink/5",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full">
                <a
                  href={wa(
                    "Hi! I'm interested in your Agatti Island tours. Can you help me with information?",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan My Trip
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
