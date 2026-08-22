"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-24 border-t border-gray-600 sm:px-8 md:py-32 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-brand-ink px-6 py-16 text-brand-bg sm:px-10 md:px-16 md:py-24"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          Let&apos;s work together
        </p>
        <h2 className="mt-5 max-w-6xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-none tracking-tight">
          Have a product problem worth solving?
        </h2>

        <motion.a
          href="mailto:rdas5969@gmail.com"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-foreground shadow-[0_10px_30px_rgba(99,91,255,0.3)]"
        >
          rdas5969@gmail.com ↗
        </motion.a>
      </motion.div>
    </section>
  );
}
