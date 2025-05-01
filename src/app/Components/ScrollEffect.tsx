"use client";
import Image from "next/image";
import { motion, useScroll } from "motion/react";

export default function ScrollEffect() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      <Content />
    </>
  );
}

function Content() {
  return (
    <div>
      <></>
    </div>
  );
}
