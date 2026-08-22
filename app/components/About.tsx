"use client";

import Image from "next/image";
import { motion } from "motion/react";

const profileImage = "/profile_1.JPG";

const skills = [
  "UX Research",
  "Product Design",
  "UI Design",
  "Interaction",
  "Prototyping",
  "Design Systems",
];

const display = [
  [
    "01",
    "Start with why",
    "Understand the problem before jumping into pixels.",
  ],
  [
    "02",
    "Make it clear",
    "Remove unnecessary complexity and let the important things speak first.",
  ],
  [
    "03",
    "Sweat the details",
    "Small interactions and thoughtful visual decisions make experiences feel complete.",
  ],
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border-subtle px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            About me
          </p>
          <h2 className="mt-5 max-w-6xl text-[clamp(3rem,6.5vw,7rem)] font-semibold tracking-tight leading-none">
            I turn complex ideas
            <span> into simple experiences.</span>
          </h2>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="overflow-hidden rounded-4xl shadow-[0_25px_70px_rgba(23,23,23,0.1)]">
              {/* <Image
                src={profileImage}
                alt="Replace with your portrait"
                className="aspect-4/5 w-full object-cover"
              /> */}
              <Image
                src={profileImage}
                alt="My photo"
                width={900}
                height={1000}
                priority
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-surface/65 border-brand px-5 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-[0.14em] text-text-subtle">
                Currently
              </p>
              <p className="mt-1 text-sm font-medium text-text-foreground">
                Designing & Coding
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="max-w-2xl text-xl leading-relaxed tracking-tight sm:text-2xl md:text-3xl">
              I like asking{" "}
              <span className="font-semibold text-brand">“why?”</span> before
              asking “how?”
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-text-foreground">
              I enjoy taking messy problems, understanding what people actually
              need, and turning those insights into digital experiences that
              feel clear, useful and intentional.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-text-foreground">
              My work sits between strategy and visual craft — from research and
              information architecture to interaction, interface and design
              systems.
            </p>

            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                My toolkit
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="cursor-default rounded-full border border-border-muted px-4 py-2.5 text-sm transition-colors hover:bg-brand hover:text-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-28 grid gap-4 pt-6 md:grid-cols-3">
          {display.map(([number, title, text]) => (
            <motion.div
              key={number}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-border-subtle bg-surface p-6 transition-colors hover:border-border-muted hover:bg-surface-hover"
            >
              <p className="text-4xl font-semibold tracking-[-0.06em] text-brand">
                {number}
              </p>
              <h3 className="mt-8 text-lg font-medium text-text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
