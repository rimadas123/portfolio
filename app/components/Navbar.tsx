"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 flex flex-col bg-surface px-6 py-4 md:px-10">
      <nav className="mx-auto flex w-full items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-lg font-semibold tracking-tighter">
          RD<span className="text-foreground">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="transition-opacity duration-200 hover:opacity-50"
            >
              {nav.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-x-2 rounded-2xl border border-brand px-3 py-2 md:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-muted md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={18} strokeWidth={1.8} />
          ) : (
            <Menu size={18} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden border-b border-border-subtle bg-surface transition-all duration-300 md:hidden ${
          isOpen
            ? "visible max-h-100 opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 pb-8 pt-6">
          {navLinks.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              onClick={() => setIsOpen(false)}
              className="text-md tracking-tight"
            >
              {nav.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background"
          >
            Let's Talk
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </header>
  );
}
