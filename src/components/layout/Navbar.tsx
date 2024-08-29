"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { MovingBorderButton } from "../ui/moving-border";
import Image from "next/image";
import { HiChevronDoubleDown } from "react-icons/hi2";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Form state variables
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Open and close modal
  const handleButtonClick = () => setIsAnimating(true);
  const closeModal = () => setIsAnimating(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // New function to close the menu

  useEffect(() => {
    const toggleTidioWidget = () => {
      const tidioChat = document.querySelector(
        "#tidio-chat"
      ) as HTMLElement | null;
      if (tidioChat) {
        tidioChat.style.display = isAnimating ? "none" : "block";
      }
    };

    toggleTidioWidget(); // Run on component mount and when isAnimating changes

    return () => {
      toggleTidioWidget(); // Reset visibility on unmount
    };
  }, [isAnimating]);

  return (
    <>
      <header
        className={cn("fixed inset-x-0 min-w-full z-50 bg-black", className)}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-black">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href={"/"} className="cursor-pointer">
                <Image
                  src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724918915/Yellow_and_Black_Modern_Media_Company_Logo_300_x_100_px_1_rfejyn.png"
                  alt="logo"
                  width={200} 
                  height={200} 
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white text-4xl focus:outline-none"
              >
                <HiChevronDoubleDown />
              </button>
            </div>

            {/* Links for large screens */}
            <nav className="hidden lg:flex">
              <Menu setActive={setActive}>
                <Link
                  href={"/"}
                  className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-colors duration-300 ease-in-out"
                >
                  Home
                </Link>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Productions"
                >
                  <div className="text-sm grid grid-cols-2 gap-10 p-4 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-colors duration-300 ease-in-out">
                    <ProductItem
                      title="Content Production"
                      href="/"
                      src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831094/DALL_E_2024-08-28_11.44.43_-_A_modern_content_production_scene_featuring_a_sleek_workspace_with_a_large_computer_screen_displaying_a_video_editing_timeline_surrounded_by_creative_q9jcqz.webp"
                      description="Engaging content across all platforms."
                    />
                    <ProductItem
                      title="Live Production"
                      href="/"
                      src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831496/DALL_E_2024-08-28_11.51.27_-_A_night_scene_of_a_live_production_event_in_Abu_Dhabi_showcasing_the_iconic_Etihad_Towers_illuminated_against_the_night_sky._The_foreground_features_yfxmge.webp"
                      description="Seamless live event services."
                    />
                    <ProductItem
                      title="Sports Production"
                      href="/"
                      src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831616/DALL_E_2024-08-28_11.53.29_-_A_dramatic_sports_production_scene_in_Abu_Dhabi_s_desert_at_night_featuring_a_UFC_fight_between_two_boxers_in_a_ring._The_ring_is_set_up_in_the_middl_vigjf5.webp"
                      description="Capturing every sports moment."
                    />
                    <ProductItem
                      title="Digital Media"
                      href="/"
                      src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831685/DALL_E_2024-08-28_11.54.39_-_A_modern_digital_media_production_scene_set_in_a_high-tech_studio._The_foreground_features_multiple_computer_screens_displaying_analytics_social_medi_tftg4b.webp"
                      description="Boosting your online presence."
                    />
                  </div>
                </MenuItem>
                <Link
                  href={"/about"}
                  className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-colors duration-300 ease-in-out"
                >
                  About Us
                </Link>
                <Link
                  href={"/services"}
                  className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-colors duration-300 ease-in-out"
                >
                  Services
                </Link>
              </Menu>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <MovingBorderButton
                  onClick={handleButtonClick}
                  variant="secondary"
                  borderRadius="1.75rem"
                  className="bg-gray-50 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Contact Us
                </MovingBorderButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 transform transition-transform duration-300 bg-black z-40 p-4 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex items-center text-white flex-col space-y-4">
          <Link href={"/"} onClick={closeMenu}>
            Home
          </Link>
          <Link href={"/productions"} onClick={closeMenu}>
            Productions
          </Link>
          <Link href={"/about"} onClick={closeMenu}>
            About Us
          </Link>
          <Link href={"/services"} onClick={closeMenu}>
            Services
          </Link>
        </nav>
      </div>

      {/* Modal sliding up from bottom */}
      <div
        className={`fixed bottom-0 inset-x-0 z-[100] transform transition-transform duration-500 bg-gradient-to-r from-pink-500 to-purple-500 p-6 shadow-lg ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center">
          <button
            onClick={closeModal}
            className="ml-auto text-gray-700 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          {isFormSubmitted ? (
            <>
              <h2 className="font-bold w-full text-gray-800 text-[32px] mb-8 text-center">
                Submitted successfully
              </h2>
              <p className="mt-0.5 text-sm font-medium text-blue-500 text-center">
                If you want you can submit another enquiry
              </p>
            </>
          ) : (
            <>
              <h2 className="font-bold w-full text-gray-800 text-[32px] text-center">
                Contact Us
              </h2>
              <p className="font-bold w-full text-gray-800 text-[20px] mb-8 text-center">
                Got a Project? Tell us everything.
              </p>

              <form className="grid grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="mx-4 my-2 text-black py-4 px-2 bg-transparent border-b-4 border-gray-900 focus:border-2 hover:border-2 transition-all ease-in-out placeholder-white"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="mx-4 my-2 text-black py-4 px-2 bg-transparent border-b-4 border-gray-900 focus:border-2 hover:border-2 transition-all ease-in-out placeholder-white"
                />

                <input
                  type="text"
                  name="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone"
                  className="mx-4 my-2 text-black py-4 px-2 bg-transparent border-b-4 border-gray-900 focus:border-2 hover:border-2 transition-all ease-in-out placeholder-white"
                />
                <input
                  type="text"
                  name="subject"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Subject"
                  className="mx-4 my-2 text-black py-4 px-2 bg-transparent border-b-4 border-gray-900 focus:border-2 hover:border-2 transition-all ease-in-out placeholder-white"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={messages}
                  onChange={(e) => setMessages(e.target.value)}
                  className="mx-4 my-2 col-span-2 text-black py-4 px-2 bg-transparent border-b-4 border-gray-900 min-h-28 focus:border-2 hover:border-2 transition-all ease-in-out placeholder-white"
                ></textarea>
                <div className="col-span-2 flex justify-end mx-4 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-block overflow-hidden border border-black px-8 py-3 focus:outline-none focus:ring"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-black transition-all group-hover:h-full group-active:bg-indigo-500"></span>
                    <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                      {loading ? "Submitting..." : "Submit Enquiry"}
                    </span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
