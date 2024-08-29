"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-16 bg-black">
      <h2 className="text-center text-3xl lg:text-5xl font-bold text-white dark:text-white tracking-wide mb-12">
        <span className="relative inline-block">
          <span className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-pink-500 to-purple-500"></span>
          <span className="relative text-white px-2">RECENT EVENTS</span>
        </span>
      </h2>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    
    description: (
      <>
        <p className=" text-white">
          Abu Dhabi, the cultural heart of the UAE, is a thriving hub for
          world-class events, where live production plays a crucial role in
          delivering unforgettable experiences. At [Your Company Name], we
          specialize in bringing your event to life with cutting-edge
          technology, expert coordination, and a creative approach that
          captivates your audience.
        </p>
        <p className=" text-white">
          Abu Dhabi, the cultural heart of the UAE, is a thriving hub for
          world-class events, where live production plays a crucial role in
          delivering unforgettable experiences.
        </p>
        <p className=" text-white">
          Abu Dhabi, the cultural heart of the UAE, is a thriving hub for
          world-class events, where live production plays a crucial role in
          delivering unforgettable experiences. At [Your Company Name], we
          specialize in bringing your event to life with cutting-edge
          technology, expert coordination, and a creative approach that
          captivates your audience.
        </p>
      </>
    ),
    badge: "Abu Dhabi Live Event",
    image:
      "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724932225/Events_in_UAE_skcv4y.png",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p className=" text-white">
          Abu Dhabi once again cemented its status as a global hub for premier
          sporting events with a thrilling live UFC event that electrified fans
          from around the world. Held at the iconic Etihad Arena, this event
          brought together the world's top mixed martial artists for an evening
          of high-octane action, dramatic knockouts, and moments that will be
          etched in the history of the sport.
        </p>
        <p className=" text-white">
          Abu Dhabi once again cemented its status as a global hub for premier
          sporting events with a thrilling live UFC event that electrified fans
          from around the world.
        </p>
      </>
    ),
    badge: "Live UFC 242",
    image:
      "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831616/DALL_E_2024-08-28_11.53.29_-_A_dramatic_sports_production_scene_in_Abu_Dhabi_s_desert_at_night_featuring_a_UFC_fight_between_two_boxers_in_a_ring._The_ring_is_set_up_in_the_middl_vigjf5.webp",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p className=" text-white">
          Abu Dhabi once again cemented its status as a global hub for premier
          sporting events with a thrilling live UFC event that electrified fans
          from around the world. Held at the iconic Etihad Arena, this event
          brought together the world's top mixed martial artists for an evening
          of high-octane action, dramatic knockouts, and moments that will be
          etched in the history of the sport.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724932225/festive-table-decoration-elements-flora-luxury-hall_fy8eaj.webp",
  },
];
