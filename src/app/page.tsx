"use client";
import { useEffect, useState } from "react";
import Blogs from "@/components/blocks/Blogs";
import { Hero } from "@/components/blocks/Hero";
import { Button } from "@/components/ui/button";
import { CanvasRevealEffectDemo } from "@/components/blocks/CanvasRevealEffectDemo";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import Image from "next/image";
import { GoogleGeminiEffectDemo } from "@/components/blocks/PipeScrolling";
import { TracingBeamDemo } from "@/components/blocks/TracingBeam";
import Gallary from "@/components/blocks/Gallary";
import InfiniteCarousel from "@/components/blocks/Clients";
import Lottie from "react-lottie";
import animationData from "../app/Animation - 1724926835471.json";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/cy8jqgxbehocdjc5kzrfujybclxitgc4.js";
    script.async = true;
    document.body.appendChild(script);

    const hideTidioWidget = (isAnimating: boolean) => {
      const tidioChat = document.querySelector(
        "#tidio-chat"
      ) as HTMLElement | null;
      if (tidioChat) {
        tidioChat.style.bottom = isAnimating ? "-100px" : "20px"; 
        tidioChat.style.zIndex = isAnimating ? "0" : "9999"; 
      }
    };

    // Recalculate the position whenever the modal opens or closes
    hideTidioWidget(isAnimating);

    script.onload = () => hideTidioWidget(isAnimating);

    return () => {
      document.body.removeChild(script);
    };
  }, [isAnimating]); // Passing isAnimating as a dependency

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="bg-black w-full relative">
      <Hero />
      <CanvasRevealEffectDemo />
      <GoogleGeminiEffectDemo />
      <div className="overflow-hidden w-full">
        <TracingBeamDemo />
      </div>
      <Gallary />
      <InfiniteCarousel />

      {/* WhatsApp Icon */}
      <div className="fixed left-4 bottom-[33px] z-50">
        <a
          href="https://wa.me/971585575277?text=Hello,%20How%20are%20you?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie options={defaultOptions} height={60} width={60} />
        </a>
      </div>
    </main>
  );
}
