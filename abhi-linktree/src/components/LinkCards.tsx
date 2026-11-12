"use client";
import { motion, type Variants } from "framer-motion";
import type { MouseEvent } from "react";
import type { LinkItem } from "@/data/links";

export const rise: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

function track(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

const brand = (c: string) => ({ "--brand": c }) as React.CSSProperties;

/** Large featured card, with an animated gradient border */
export function FeaturedCard({ item }: { item: LinkItem }) {
  const Icon = item.icon;
  return (
    <motion.a
      variants={rise}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="focus-ring group block rounded-3xl bg-[linear-gradient(110deg,#7C5CFF,#22D3EE,#FF5CA8,#7C5CFF)] bg-[length:200%_100%] p-[1.5px] animate-shimmer"
    >
      <div
        onMouseMove={track}
        style={brand(item.color)}
        className="spot flex items-center gap-4 rounded-[calc(1.5rem-1.5px)] border border-transparent bg-ink/90 px-5 py-5 backdrop-blur-xl"
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-glow to-cyan-glow text-white shadow-lg shadow-violet-glow/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          <Icon className="text-3xl" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-lg font-semibold">{item.label}</span>
          {item.hint && <span className="block text-sm text-white/60">{item.hint}</span>}
        </span>
        <span aria-hidden className="text-xl text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
          ›
        </span>
      </div>
    </motion.a>
  );
}

/** Square icon tile for social profiles */
export function SocialTile({ item }: { item: LinkItem }) {
  const Icon = item.icon;
  return (
    <motion.a
      variants={rise}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      onMouseMove={track}
      style={brand(item.color)}
      whileHover={{ y: -5, scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="spot focus-ring flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-1 py-4 backdrop-blur-xl transition-colors"
    >
      <Icon className="brand-icon text-2xl text-white/85 transition-colors duration-300" />
      <span className="text-[11px] font-medium text-white/60">{item.label}</span>
    </motion.a>
  );
}

/** Wide row for coding platforms */
export function PlatformRow({ item }: { item: LinkItem }) {
  const Icon = item.icon;
  return (
    <motion.a
      variants={rise}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={track}
      style={brand(item.color)}
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.98 }}
      className="spot focus-ring group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-xl transition-colors"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
        <Icon className="brand-icon text-2xl text-white/85 transition-colors duration-300" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[15px] font-semibold">{item.label}</span>
        {item.hint && <span className="block text-xs text-white/55">{item.hint}</span>}
      </span>
      <span aria-hidden className="text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
        ›
      </span>
    </motion.a>
  );
}
