import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917427/yastv-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_a7nju5.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917427/twofour54-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_mpnoea.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917427/TK_FIGHTNIGHT-1-1-phm57x1j46xmte99kbxa1ezm7pu8rt91sf2h2m9zgw_qngqxa.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917426/rotana-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_yzsp3t.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917426/sheikmansoorfest-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_y89q4l.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917426/natgeo-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_j7x1ug.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917426/parus-mma-logo-black-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_ixwrnt.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917426/mawasim-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_klfyki.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917426/fox-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_mhkdxt.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917426/majid-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_rdovfs.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917425/admedia_logo_NEW-1-1-phm57x1j46xmte99kbxa1ezm7pu8rt91sf2h2m9zgw_1_mosvo5.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917425/adss-2-phm57x1j46xmte99kbxa1ezm7pu8rt91sf2h2m9zgw_kltnqv.png",
];

const InfiniteCarousel: React.FC = () => {
  return (
    <>
      <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-wide mb-6 md:mb-8">
        <span className="relative inline-block">
          <span className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-pink-500 to-purple-500"></span>
          <span className="relative text-white px-2">OUR CLIENTS</span>
        </span>
      </h2>
      <div className="flex justify-center items-center py-2 md:py-4">
        <div className="overflow-hidden relative bg-slate-200 rounded-lg w-full max-w-[90%] sm:max-w-[1280px] mx-auto py-4 md:py-6 px-2 md:px-4">
          <motion.div
            className="flex space-x-4 md:space-x-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[...images, ...images].map((src, index) => (
              <div key={index} className="flex-none w-24 md:w-32">
                <Image
                  src={src}
                  alt={`Client ${index + 1}`}
                  width={120} 
                  height={75} 
                  objectFit="contain"
                  className="h-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InfiniteCarousel;
