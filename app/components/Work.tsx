"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-subtle px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-20 grid gap-8 md:grid-cols-[0.5fr_1.5fr] lg:mb-28"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            Selected work
          </p>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,7rem)] font-semibold leading-none tracking-[-0.07em]">
              Things I&apos;ve designed,
              <span className="text-brand-ink/30"> shipped and explored.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-brand-ink/50 sm:text-lg">
              A selection of product, UX and interface work focused on turning
              complex problems into clear experiences.
            </p>
          </div>
        </motion.div>

        <div className="space-y-28 lg:space-y-40">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.8, delay: index * 0.04 }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="mb-6 grid gap-4 sm:grid-cols-[70px_1fr_auto] sm:items-end">
                  <span className="text-sm font-medium text-brand-ink/35">
                    {project.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>
                      <span className="rounded-full bg-brand-primary/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-primary">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-brand-ink/50 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink/40">
                      {project.category}
                    </span>
                    <motion.span
                      whileHover={{ x: 4, y: -4 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_7px_20px_rgba(99,91,255,0.2)]"
                    >
                      ↗
                    </motion.span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-brand-surface shadow-[0_20px_60px_rgba(23,23,23,0.06)] sm:rounded-4xl">
                  <motion.div
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative aspect-16/10 w-full"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between sm:inset-x-7 sm:bottom-7">
                    <span className="rounded-full bg-brand-bg/90 px-4 py-2.5 text-xs font-medium text-brand-ink shadow-lg backdrop-blur-md">
                      View case study
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-5 pb-7 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-muted px-3 py-1.5 text-xs text-brand-ink/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-brand-ink/55">
                    {project.result}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
