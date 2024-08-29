import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const images: string[] = [
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724924080/Events-and-entertainment-industry-in-Dubai-Poised-for-a-brighter-future_lexybz.jpg",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724932225/Events_in_UAE_skcv4y.png",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724924080/KyKE7StX-DX3_2502-1200x800_rempjc.jpg",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724920800/DALL_E_2024-08-29_12.39.51_-_An_image_of_Abu_Dhabi_s_iconic_Etihad_Towers_and_Emirates_Palace_with_advanced_AR_elements_integrated_into_the_scene._The_image_features_the_futurist_frfzez.webp",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724924080/UAE-Events-2022_epi7us.jpg",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724924080/Fireworks-best-time-to-visit-Dubai-UAE_avzj3w.jpg",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724924080/dwtcexhibitionhall-1_tjmgfg.jpg",
  "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724932225/festive-table-decoration-elements-flora-luxury-hall_fy8eaj.webp",
];

const ImageGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const previousImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  };

  return (
    <>
      <div id="gallery">
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-white dark:text-white tracking-wide mb-4 mt-12">
          <span className="relative inline-block">
            <span className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-pink-500 to-purple-500"></span>
            <span className="relative text-white px-2">Image Gallery</span>
          </span>
        </h2>

        <div className="container mx-auto py-10 px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                onClick={() =>
                  index !== images.length - 1 ? openModal(index) : null
                }
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-xl"></div>

                {index !== images.length - 1 ? (
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold">{`Image ${
                      index + 1
                    }`}</p>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-purple-600 bg-opacity-70 text-white py-3 px-6 rounded-md border border-white border-opacity-50 hover:bg-opacity-80 hover:border-opacity-100 transition-all duration-300">
                      See All
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50 p-4 backdrop-blur-md">
            <div className="relative max-w-6xl w-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full max-h-[90vh] rounded-lg shadow-2xl"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    width={1920}
                    height={1080}
                    objectFit="contain"
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl md:text-3xl bg-red-600 rounded-full p-2 md:p-3 hover:bg-red-800 transition-opacity shadow-lg"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <button
                onClick={previousImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-xl md:text-3xl bg-black bg-opacity-60 rounded-full p-2 md:p-3 hover:bg-opacity-80 transition-opacity shadow-lg"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-xl md:text-3xl bg-black bg-opacity-60 rounded-full p-2 md:p-3 hover:bg-opacity-80 transition-opacity shadow-lg"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    onClick={() => selectImage(index)}
                    width={88}
                    height={64}
                    className={`object-cover rounded-lg cursor-pointer border-4  ${
                      currentIndex === index
                        ? "border-white"
                        : "border-transparent"
                    } transition-transform duration-300 transform hover:scale-105`}
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
