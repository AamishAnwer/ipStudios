"use client";
import React from "react";
import { TbHandClick } from "react-icons/tb";
import { MdCameraRoll, MdPermMedia } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { SiUfc } from "react-icons/si";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 bg-black dark:bg-black w-full px-8">
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-white dark:text-white tracking-wide mb-12">
          <span className="relative inline-block">
            <span className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-pink-500 to-purple-500"></span>
            <span className="relative text-white px-2">WHAT WE DO</span>
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 mx-auto">
          <Card title="CONTENT PRODUCTION" icon={<MdCameraRoll size={50} />}>
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
          {/* <Card title="LIVE PRODUCTION" icon={<BsCameraReelsFill size={50} />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [119, 136, 153], // Light Slate Gray
                [176, 196, 222], // Light Steel Blue
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card> */}
          <Card title="LIVE PRODUCTION" icon={<BsCameraReelsFill size={50} />}>
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName=" bg-slate-500"
            />
          </Card>
          <Card title="SPORTS PRODUCTION" icon={<SiUfc size={70} />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
          <Card title="DIGITAL MEDIA" icon={<MdPermMedia size={50} />}>
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="bg-red-600"
              colors={[[252, 61, 57]]}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-4 border-white dark:border-white/[0.2] group/canvas-card flex flex-col items-center justify-center max-w-xs w-full mx-auto p-4 relative h-[20rem] lg:h-[25rem] bg-black relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center w-full flex flex-col items-center justify-center">
        {icon}
        <h2 className="text-white text-xl opacity-100 relative z-10 mt-4 font-bold">
          {title}
        </h2>
        <div className="mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
          <HoverIcon />
        </div>
      </div>
    </div>
  );
};

const HoverIcon = () => {
  return <TbHandClick className="animate-bounce text-white" size={24} />;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
