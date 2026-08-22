"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, MoveUpRight, X } from "lucide-react";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Experience", "#experience"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav className=" flex mx-auto max-w-6xl px-4 py-3 bg-surface/80 items-center justify-between rounded-full">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.03em] transition-opacity hover:opacity-60"
        >
          Tandrima Das
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-surface p-1 sm:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-xs font-medium text-foreground transition hover:bg-surface-hover hover:text-brand hover:shadow-sm"
            >
              {label}
            </a>
          ))}
        </div>

        {/* <a
          href="#contact"
          className="hidden rounded-full bg-brand-primary px-4 py-2.5 text-xs font-semibold text-white shadow-xs shadow-brand transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(99,91,255,0.32)] sm:inline-flex"
        >
          Let&apos;s talk ↗
        </a> */}

        <motion.div
          className="relative rounded-full p-0.5 overflow-hidden max-[1023px]:hidden"
          initial="rest"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-[-200%] shadow-xl bg-[conic-gradient(from_0deg,transparent_0deg,#10b981_20deg,#8b5cf6_35deg,transparent_45deg)]"
            variants={{
              rest: {
                rotate: 0,
                opacity: 0,
              },
              hover: {
                rotate: 360,
                opacity: 1,
                transition: {
                  rotate: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 0.2,
                  },
                },
              },
            }}
          />

          <button className="flex relative gap-x-1 items-center z-10 rounded-full bg-surface px-4 py-3 text-foreground text-xs">
            Let's talk <MoveUpRight className="text-brand" size={16} />
          </button>
        </motion.div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm sm:hidden"
        >
          {open ? (
            <X color="#ffffff" size={16} />
          ) : (
            <Menu color="#ffffff" size={16} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="mx-4 mt-2 rounded-3xl border border-brand/8 bg-brand p-3 shadow-xl backdrop-blur-xl sm:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-surface/6 hover:text-muted"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-2xl border bg-brand hover:bg-surface/65 px-4 py-3 text-sm font-semibold text-foreground"
            >
              Let&apos;s talk ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
