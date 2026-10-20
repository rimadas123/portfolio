"use client";

import Image from "next/image";
import profileImage from "../../public/profile-1.png";
import { motion } from "motion/react";
import Work from "./Work";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid w-full grid-cols-1 gap-10 px-5 pb-10 md:px-8 lg:h-[calc(100vh-88px)] lg:grid-cols-2 lg:gap-8 lg:overflow-hidden lg:px-10">
      <div className="flex min-w-0 flex-col px-0 py-4 md:px-2 lg:h-full lg:min-h-0 lg:px-5">
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
          <span className="h-1.5 w-1.5 animate-ping [animation-duration:1.5s] opacity-90 rounded-full bg-brand" />
          <span className="text-sm leading-none tracking-tight text-text-muted">
            Available for Work
          </span>
        </motion.div>
        <div className="flex gap-x-3 items-center">
          <div className="relative overflow-hidden rounded-full">
            <Image src={profileImage} alt="Rima Das" height={60} width={60} />
          </div>
          {/* Profile Information */}
          <div className="flex flex-col gap-y-1.5 lg:gap-y-3 mt-2">
            <h1 className="text-sm lg:text-lg font-medium leading-1 tracking-tight text-foreground">
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
        <div className="mt-10 flex flex-col gap-y-5 md:mt-12 lg:mt-14">
          <h1 className="text-[48px] sm:text-5xl md:text-6xl lg:text-[76px] leading-none font-bold">
            Your Next <br />
            <span className="text-text-brand">UX/UI</span> Designer
          </h1>
          <p className="max-w-2xl text-sm leading-5 text-text-muted md:text-base md:leading-6">
            I work on digital products, websites, and interfaces with a strong
            focus on <br /> usability, clarity, and real-world use.
          </p>
        </div>

        {/** CTA */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="text-md px-4 py-1.5 bg-brand rounded-full">
            Get in touch
          </button>
          <button className="text-md px-4 py-1.5 bg-surface border border-brand rounded-full">
            See my work
          </button>
        </div>

        <div className="flex gap-x-4 mt-20 lg:mt-30">
          <button className="border border-border-muted rounded-full px-3 py-2">
            <Image src="/figma.svg" alt="figma logo" width={16} height={16} />
          </button>
          <button className="border border-border-muted rounded-full px-3 py-2">
            <Image
              src="/adobe-photoshop.svg"
              alt="adobe photoshop"
              width={16}
              height={16}
            />
          </button>
          <button className="border border-border-muted rounded-full px-3 py-2">
            <Image
              src="/illustrator.svg"
              alt="adobe illustrator"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
      <div className="hide-scrollbar h-full min-h-0 overflow-y-auto pr-10">
        <Work />
      </div>
    </section>
  );
}
