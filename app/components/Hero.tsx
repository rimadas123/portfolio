"use client";

import Image from "next/image";
import profileImage from "../../public/profile-1.png";
import { motion } from "motion/react";
import Work from "./Work";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid h-[calc(100vh-88px)] w-full grid-cols-2 gap-8 overflow-hidden px-10">
      <div className="flex h-full min-h-0 flex-col px-5 py-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-surface
            px-3.5
            py-1.5
            max-w-fit
            shadow-[0_1px_3px_rgba(0,0,0,0.08)] mb-5
          "
        >
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="text-sm leading-none tracking-tight text-text-muted">
            Available for Work
          </span>
        </motion.div>
        <div className="flex gap-x-3 items-center">
          <div className="relative overflow-hidden rounded-full">
            <Image src={profileImage} alt="Rima Das" height={60} width={60} />
          </div>
          {/* Profile Information */}
          <div className="flex flex-col gap-y-3 mt-2">
            <h1 className="text-lg font-medium leading-1 tracking-tight text-foreground">
              Rima Das
            </h1>

            <motion.a
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:rdas5969@gmail.com"
              className="mt-1 text-sm leading-[1.2] tracking-tight text-text-muted hover:text-brand flex gap-x-1.5"
            >
              rdas5969@gmail.com <MoveUpRight size={16} />
            </motion.a>
          </div>
        </div>

        {/** Heading */}
        <div className="mt-10 flex flex-col gap-y-5">
          <h1 className="text-[80px] leading-none font-bold">
            Your Next <br />
            <span>UX/UI</span> Designer
          </h1>
          <p className="text-md text-text-muted">
            I work on digital products, websites, and interfaces with a strong
            focus on usability, clarity, and real-world use. I care about making
            things that not only look good, but feel intuitive.
          </p>
        </div>

        {/** CTA */}
        <div className="flex gap-x-4 mt-6">
          <button className="text-md px-4 py-1.5 bg-brand rounded-full">
            Get in touch
          </button>
          <button className="text-md px-4 py-1.5 bg-surface rounded-full">
            See my work
          </button>
        </div>

        <div className="flex gap-x-4 mt-30">
          <button className="text-sm font-normal border border-border-muted rounded-full px-3 py-2">
            UX/UI
          </button>
          <button className="text-sm font-normal border border-border-muted rounded-full px-3 py-2">
            Wireframing
          </button>
          <button className="text-sm font-normal border border-border-muted rounded-full px-3 py-2">
            Prototyping
          </button>
          <button className="text-sm font-normal border border-border-muted rounded-full px-3 py-2">
            Research
          </button>
        </div>
      </div>
      <div className="hide-scrollbar h-full min-h-0 overflow-y-auto pr-10">
        <Work />
      </div>
    </section>
  );
}
