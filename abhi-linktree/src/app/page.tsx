"use client";
import { motion, type Variants } from "framer-motion";
import Background from "@/components/Background";
import Avatar from "@/components/Avatar";
import Typewriter from "@/components/Typewriter";
import { FeaturedCard, SocialTile, PlatformRow, rise } from "@/components/LinkCards";
import { profile, portfolio, socials, coding } from "@/data/links";

// One orchestrated entrance: everything cascades in once on load.
const stage: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const sectionTitle = "mb-3 px-1 font-display text-sm font-medium text-white/50";

export default function Home() {
  return (
    <>
      <Background />
      <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-12 pt-14">
        <motion.div variants={stage} initial="hidden" animate="show" className="flex flex-col gap-8">
          <motion.header variants={rise} className="flex flex-col items-center text-center">
            <Avatar src={profile.image} name={profile.name} />
            <h1 className="mt-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm text-white/45">{profile.handle}</p>
            <p className="mt-3 h-6 text-[15px]" aria-label="Computer Science Engineer">
              <Typewriter words={profile.roles} />
            </p>
          </motion.header>

          <section>
            <FeaturedCard item={portfolio} />
          </section>

          <section>
            <motion.h2 variants={rise} className={sectionTitle}>Find me online</motion.h2>
            <div className="grid grid-cols-5 gap-2">
              {socials.map((s) => (
                <SocialTile key={s.label} item={s} />
              ))}
            </div>
          </section>

          <section>
            <motion.h2 variants={rise} className={sectionTitle}>Coding platforms</motion.h2>
            <div className="flex flex-col gap-2.5">
              {coding.map((c) => (
                <PlatformRow key={c.label} item={c} />
              ))}
            </div>
          </section>

          <motion.footer variants={rise} className="pt-2 text-center text-xs text-white/35">
            Built with Next.js, TypeScript and Tailwind
          </motion.footer>
        </motion.div>
      </main>
    </>
  );
}
