"use client";

import Image from "next/image";
import { Tabs } from "../../components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Animation",
      value: "animation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 md:text-4xl font-bold text-white bg-gradient-to-br from-pink-500 via-teal-400 to-orange-500">
          <DummyContent src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724935031/DALL_E_2024-08-29_16.36.54_-_Create_a_rectangular_animated-style_image_depicting_Dubai_as_a_city_emerging_from_the_sand._The_scene_should_include_iconic_Dubai_skyscrapers_rising_f_rukjkn.webp" />
        </div>
      ),
    },
    {
      title: "Mobile Apps",
      value: "mobile apps",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text- md:text-4xl font-bold text-white bg-gradient-to-br from-pink-500 via-teal-400 to-orange-500">
          <DummyContent src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724935365/1720_vxhvld.jpg" />
        </div>
      ),
    },
    {
      title: "Cool Websites",
      value: "websites",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text- md:text-4xl font-bold text-white bg-gradient-to-br from-pink-500 via-teal-400 to-orange-500">
          <DummyContent src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724935797/1687_ursk3n.jpg" />
        </div>
      ),
    },
    {
      title: "E-Commerce",
      value: "ecommerce",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text- md:text-4xl font-bold text-white bg-gradient-to-br from-pink-500 via-teal-400 to-orange-500">
          <DummyContent src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724935796/3890438_qubp1n.jpg" />
        </div>
      ),
    },
    {
      title: "Social Media",
      value: "social media",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text- md:text-4xl font-bold text-white bg-gradient-to-br from-pink-500 via-teal-400 to-orange-500">
          <DummyContent src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724935796/3107569_xyqlyh.jpg" />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black pb-28">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] flex flex-col max-w-7xl mx-auto w-full items-center justify-center">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

interface DummyContentProps {
  src: string;
}

const DummyContent = ({ src }: DummyContentProps) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt="dummy image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-xl"
      />
    </div>
  );
};
