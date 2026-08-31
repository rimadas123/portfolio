"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Smarter patient search for appointment booking",
    category: "Healthcare",
    description:
      "Reducing friction in appointment booking with Smarter Patient Search",
    year: "2025",
    image: "/Cover-1.png",
  },
  {
    id: "02",
    title: "Project Two",
    category: "Product Design",
    description:
      "Reducing friction in appointment booking with Smarter Patient Search",
    year: "2025",
    image: "/Cover-2.png",
  },
  {
    id: "03",
    title: "Project Three",
    category: "Visual Design",
    description:
      "Reducing friction in appointment booking with Smarter Patient Search",
    year: "2025",
    image: "/Cover-3.png",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.35,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    rotateX: 12,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Work() {
  return (
    <section id="work" className="w-full px-2 py-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="mb-6 flex items-end justify-between"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-foreground">
          Selected Work
        </p>
        <span className="text-sm text-text-muted">
          {projects.length.toString().padStart(2, "0")} projects
        </span>
      </motion.div>

      {/* Project List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
        style={{
          perspective: "1200px",
        }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            variants={cardVariants}
            className={`group ${
              index !== projects.length - 1
                ? "border-b border-border-muted"
                : ""
            }`}
            style={{
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Project Card */}
            <a
              href={`/work/${project.id}`}
              className="group relative block overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[2px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Blur / Overlay */}
                <div
                  className="
          absolute inset-0
          bg-black/0
          backdrop-blur-0
          transition-all
          duration-500
          group-hover:bg-black/45
          group-hover:backdrop-blur-sm
        "
                />

                {/* Hover Content */}
                <div
                  className="
          absolute inset-0
          flex flex-col
          items-center
          justify-center
          px-8
          text-center
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
                >
                  {/* Title */}
                  <h3
                    className="
            max-w-xl
            text-2xl
            font-medium
            leading-tight
            tracking-tight
            text-white
            translate-y-4
            transition-transform
            duration-500
            group-hover:translate-y-0
          "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
            mt-3
            max-w-md
            text-sm
            leading-6
            text-white/70
            translate-y-4
            transition-transform
            duration-500
            delay-75
            group-hover:translate-y-0
          "
                  >
                    {project.description}
                  </p>

                  {/* Center Arrow */}
                  <div
                    className="
            mt-7
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            translate-y-4
            scale-90
            transition-all
            duration-500
            delay-100
            group-hover:translate-y-0
            group-hover:scale-100
          "
                  >
                    <ArrowUpRight size={20} strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            </a>

            {/* Project Meta */}
            <div className="flex items-start justify-between gap-5 py-5">
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-muted">{project.id}</span>

                <div className="h-1 w-1 rounded-full bg-border-muted" />

                <span className="text-sm text-text-muted">
                  {project.category}
                </span>
              </div>

              <span className="text-sm text-text-muted">{project.year}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
