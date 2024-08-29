"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Hero() {
  const items = [
    {
      type: "video",
      src: "https://res.cloudinary.com/dg2pzsxp0/video/upload/v1724833615/IP_Studios_Show_Reel_1_1_ln2q1i.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <BackgroundBeamsWithCollision className="">
      <div className="mt-32 bg-black w-full h-[600px] relative">
        <div className="container mx-auto text-center h-full">
          <div className="relative flex items-center justify-center h-full">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              {items[currentIndex].type === "image" ? (
                <img
                  src={items[currentIndex].src}
                  alt="Background"
                  className="rounded-xl w-full h-full object-cover"
                />
              ) : (
                <video
                  src={items[currentIndex].src}
                  className="rounded-xl w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  // Ensure no controls are shown
                  controls={false}
                />
              )}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4">
            {items.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 mx-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-purple-600" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
