import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function AboutSection() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="bg-black">
          <h2 className="text-center text-3xl lg:text-5xl font-bold text-white dark:text-white tracking-wide mb-12">
            <span className="relative inline-block">
              <span className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-pink-500 to-purple-500"></span>
              <span className="relative text-white px-2">About Us</span>
            </span>
          </h2>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded our global reach by establishing a new office in Dubai,
            solidifying our presence in the Middle East market.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831616/DALL_E_2024-08-28_11.53.29_-_A_dramatic_sports_production_scene_in_Abu_Dhabi_s_desert_at_night_featuring_a_UFC_fight_between_two_boxers_in_a_ring._The_ring_is_set_up_in_the_middl_vigjf5.webp"
              alt="Global expansion"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831685/DALL_E_2024-08-28_11.54.39_-_A_modern_digital_media_production_scene_set_in_a_high-tech_studio._The_foreground_features_multiple_computer_screens_displaying_analytics_social_medi_tftg4b.webp"
              alt="Middle East market"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831496/DALL_E_2024-08-28_11.51.27_-_A_night_scene_of_a_live_production_event_in_Abu_Dhabi_showcasing_the_iconic_Etihad_Towers_illuminated_against_the_night_sky._The_foreground_features_yfxmge.webp"
              alt="New Dubai office"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724831094/DALL_E_2024-08-28_11.44.43_-_A_modern_content_production_scene_featuring_a_sleek_workspace_with_a_large_computer_screen_displaying_a_video_editing_timeline_surrounded_by_creative_q9jcqz.webp"
              alt="Global team"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="bg-black">
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Successfully produced and broadcasted several high-profile live
            events, including international sports tournaments and major music
            festivals.
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Partnered with leading technology providers to enhance our
            production capabilities, incorporating advanced AR and VR elements
            into live broadcasts.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724920651/DALL_E_2024-08-29_12.37.22_-_An_image_showcasing_the_production_and_broadcasting_of_high-profile_live_events._The_scene_includes_vibrant_lighting_large_LED_screens_cameras_on_cr_q0z96c.webp"
              alt="Live events production"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724920700/DALL_E_2024-08-29_12.38.13_-_An_image_depicting_a_live_broadcast_studio_with_advanced_technology_setup._The_scene_includes_large_monitors_displaying_AR_and_VR_elements_such_as_3D_evkd0i.webp"
              alt="AR VR integration"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724920754/DALL_E_2024-08-29_12.39.05_-_A_dynamic_image_showcasing_the_integration_of_AR_Augmented_Reality_in_a_live_sports_event_broadcast._The_scene_includes_a_sports_stadium_with_an_ove_r8tzt4.webp"
              alt="Technology partnership"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724920800/DALL_E_2024-08-29_12.39.51_-_An_image_of_Abu_Dhabi_s_iconic_Etihad_Towers_and_Emirates_Palace_with_advanced_AR_elements_integrated_into_the_scene._The_image_features_the_futurist_frfzez.webp"
              alt="Broadcast innovation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Innovation Highlights",
      content: (
        <div className="bg-black">
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Continuously pushing the boundaries of live production technology,
            we introduced several innovative solutions in 2023:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Enhanced live-streaming capabilities with 4K UHD support.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Implemented real-time audience interaction features during live
              broadcasts.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Expanded our portfolio to include multi-camera sports
              production.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Pioneered the use of augmented reality in sports coverage.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Launched a new mobile app to enhance viewer engagement during
              live events.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724920896/DALL_E_2024-08-29_12.41.29_-_An_image_showcasing_enhanced_live-streaming_capabilities_with_4K_UHD_support._The_scene_features_a_high-tech_broadcasting_room_with_large_monitors_dis_uvp6cq.webp"
              alt="4K UHD Streaming"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724921035/DALL_E_2024-08-29_12.43.48_-_An_image_of_Abu_Dhabi_s_iconic_skyline_including_landmarks_like_Etihad_Towers_and_the_Emirates_Palace_with_advanced_broadcasting_technology_integrat_m2149o.webp"
              alt="Real-time interaction"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724921036/DALL_E_2024-08-29_12.43.45_-_An_image_of_Abu_Dhabi_s_iconic_skyline_including_landmarks_like_Etihad_Towers_and_the_Emirates_Palace_with_advanced_broadcasting_technology_integrat_eeuwks.webp"
              alt="Multi-camera sports production"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724920931/DALL_E_2024-08-29_12.41.48_-_An_image_depicting_real-time_audience_interaction_features_during_a_live_broadcast._The_scene_includes_a_large_screen_showing_a_live_event_with_audien_z25bog.webp"
              alt="AR in sports"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
