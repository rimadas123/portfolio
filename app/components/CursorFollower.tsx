"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorFollower() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-9999

        hidden
        h-7
        w-7
        -translate-x-1/2
        -translate-y-1/2

        rounded-full
        bg-[#635BFF]/20

        shadow-[0_0_25px_rgba(99,91,255,0.18)]

        md:block
      "
    />
  );
}
