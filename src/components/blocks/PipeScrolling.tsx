"use client";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [visibleTexts, setVisibleTexts] = useState({
    capture: false,
    design: false,
    create: false,
    launch: false,
  });


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setVisibleTexts({
      capture: latest >= 0,
      design: latest >= 0.25,
      create: latest >= 0.5,
      launch: latest >= 0.75,
    });
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="READY TO ELEVATE YOUR BUSINESS?"
        description={
          <div className="flex justify-center space-x-2 text-white font-bold text-xl md:text-3xl">
            <span
              className={`transition-opacity duration-500 ${
                visibleTexts.capture ? "opacity-100" : "opacity-0"
              }`}
            >
              CAPTURE.
            </span>
            <span
              className={`transition-opacity duration-500 ${
                visibleTexts.design ? "opacity-100" : "opacity-0"
              }`}
            >
              DESIGN.
            </span>
            <span
              className={`transition-opacity duration-500 ${
                visibleTexts.create ? "opacity-100" : "opacity-0"
              }`}
            >
              CREATE.
            </span>
            <span
              className={`transition-opacity duration-500 ${
                visibleTexts.launch ? "opacity-100" : "opacity-0"
              }`}
            >
              LAUNCH
            </span>
          </div>
        }
      />
    </div>
  );
}
