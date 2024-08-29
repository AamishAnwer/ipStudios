import React from "react";
import Image from "next/image";
import { FiPhone, FiMail, FiGlobe } from "react-icons/fi"; 
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-black">
      <div
        className="mx-auto max-w-screen-xl rounded-xl py-10 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724918145/Black_And_Blue_Abstract_Jamboard_Background_i3fx7q.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          minHeight: "350px",
        }}
      >
        <div className="bg-[#070707bb] px-5 py-10 rounded-xl h-full">
          <div className="grid grid-cols-1 gap-4 text-center text-sm text-gray-200 sm:grid-cols-3 lg:grid-cols-5">
            <a href="/" className="group relative inline-block">
              <span className="relative z-10 text-white transition-colors duration-300 ease-in-out group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500">
                Home
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            <Link href="/#gallery" legacyBehavior>
              <a className="group relative inline-block">
                <span className="relative z-10 text-white transition-colors duration-300 ease-in-out group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500">
                  Gallery
                </span>
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            </Link>

            <a href="/" className="group relative inline-block">
              <span className="relative z-10 text-white transition-colors duration-300 ease-in-out group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500">
                Productions
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            <a href="/about" className="group relative inline-block">
              <span className="relative z-10 text-white transition-colors duration-300 ease-in-out group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500">
                About
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            <a href="/services" className="group relative inline-block">
              <span className="relative z-10 text-white transition-colors duration-300 ease-in-out group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500">
                Services
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          </div>

          <hr className="my-8 border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start">
            {/* Logo Section */}
            <div className="flex justify-center sm:justify-start">
              <Image
                src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724918915/Yellow_and_Black_Modern_Media_Company_Logo_300_x_100_px_1_rfejyn.png"
                alt="logo"
                width={300}
                height={100}
                className="" 
              />
            </div>

            {/* Contact Section */}
            <div className="mt-6 sm:mt-0 text-center sm:text-right text-gray-200">
              <h3 className="text-lg font-bold text-white">CONTACT</h3>
              <div className="flex flex-col items-center sm:items-end space-y-2 mt-4">
                <a
                  href="tel:+97126504154"
                  className="flex items-center space-x-3"
                >
                  <FiPhone className="text-blue-400" />
                  <span className="text-gray-400 hover:text-gray-200">
                    +971 2 650 4154
                  </span>
                </a>
                <a
                  href="mailto:info@ipstudios.com"
                  className="flex items-center space-x-3"
                >
                  <FiMail className="text-blue-400" />
                  <span className="text-gray-400 hover:text-gray-200">
                    info@ipstudios.com
                  </span>
                </a>
                <a
                  href="https://www.ipstudios.com"
                  className="flex items-center space-x-3"
                >
                  <FiGlobe className="text-blue-400" />
                  <span className="text-gray-400 hover:text-gray-200">
                    www.ipstudios.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Copyright Section --> */}
          <div className="mt-8 text-center text-gray-400">
            © {currentYear}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transition-colors duration-300 ease-in-out">
              IPStudios.{" "}
            </span>
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
