"use client";

import Image from "next/image";
import { motion } from "motion/react";
import profileImage from "../../public/profile.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen px-5 pb-16 pt-32 sm:px-8 md:pt-36 lg:px-12 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-subtle">
            Product Designer · UX/UI
          </p>

          <h1 className="text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            I design digital <br />
            experiences that
            <span> feel simple.</span>
          </h1>

          <p className="mt-8 max-w-lg text-text-muted leading-6 sm:text-lg">
            2+ years designing for fintech and healthcare — where confusing UX
            has real consequences, not just annoyance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href="#work"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-foreground shadow-[0_8px_25px_rgba(16,185,129,0.25)]"
            >
              View selected work ↓
            </motion.a>

            <a
              href="#about"
              className="rounded-full border border-subtle px-5 py-3 text-sm font-medium transition hover:border-muted hover:text-brand"
            >
              More about me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="overflow-hidden rounded-4xl bg-brand-surface shadow-[0_30px_80px_rgba(23,23,23,0.12)]">
            <Image
              src={profileImage}
              alt="My photo"
              priority
              className="aspect-4/5 w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute -bottom-5 -left-4 rounded-2xl border border-border-subtle bg-surface/10 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-6"
          >
            <p className="text-[10px] font-light uppercase tracking-[0.14em] text-text-foreground">
              Currently
            </p>
            <p className="mt-1 text-sm font-medium">Designing & Coding</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
