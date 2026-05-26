// import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider"; // Fix: Use named import
// import Wrapper from "./Wrapper";
// import Title from "./Title";
// import Subtitle from "./Subtitle";

import React from "react";
import ranchbg2 from "../components/assets/ranchbg2.png";
import flocrm from "../components/assets/flocrm.png";
import landscape from "../components/assets/landscaping.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "YOUR TECHNICAL PARTNER FOR SUCCESS",
      description: "Making technology work for you and your business",
      ctaText: "Contact Us",
      // Changed to anchor hash links to keep users on the same page
      ctaLink: "#contact",
      image: ranchbg2,
    },
    {
      id: 2,
      title: "BRING YOUR IDEAS TO LIFE",
      description:
        "From concept to creation, we turn your vision into reality.",
      ctaText: "Services",
      // Changed to anchor hash links
      ctaLink: "#services",
      image: flocrm,
    },
    {
      id: 3,
      title: "MODERN REDESIGN",
      description: "See what we can do for you.",
      ctaText: "Portfolio",
      // Changed to anchor hash links
      ctaLink: "#portfolio",
      image: landscape,
    },
  ];

  // Optional: Native JS Smooth Scroll Handler to override jumpy anchor tags
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="h-full w-full">
      {" "}
      {/* Swiper matches parent framework canvas */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full flex items-center justify-start bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay for Readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Left-Aligned Content Container */}
              <div className="relative z-10 text-left px-8 md:px-24 max-w-4xl w-full">
                <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white text-lg md:text-xl mb-8 opacity-90 max-w-xl">
                  {slide.description}
                </p>
                <a
                  href={slide.ctaLink}
                  onClick={(e) => handleScroll(e, slide.ctaLink)}
                  className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

// Original Test of HeroSlider component - remove later
// export default function BasicSlider() {
//   return (
//     <HeroSlider
//       height={"100vh"}
//       autoplay
//       controller={{
//         initialSlide: 1,
//         slidingDuration: 500,
//         slidingDelay: 100,
//         onSliding: (nextSlide) =>
//           console.debug("onSliding(nextSlide): ", nextSlide),
//         onBeforeSliding: (previousSlide, nextSlide) =>
//           console.debug(
//             "onBeforeSliding(previousSlide, nextSlide): ",
//             previousSlide,
//             nextSlide
//           ),
//         onAfterSliding: (nextSlide) =>
//           console.debug("onAfterSliding(nextSlide): ", nextSlide),
//       }}
//     >
//       <Overlay>
//         <Wrapper>
//           <Title title="WELCOME TO STALLION RANCH MEDIA" />
//           <Subtitle>Making technology work for you and your business.</Subtitle>
//         </Wrapper>
//       </Overlay>

//       <Slide
//         shouldRenderMask
//         label="Giau Pass - Italy"
//         background={{
//           backgroundImageSrc: flocrm, // 2. Use the imported variables here
//         }}
//       />

//       <Slide
//         shouldRenderMask
//         label="Bogliasco - Italy"
//         background={{
//           backgroundImageSrc: ranchbg2,
//         }}
//       />

//       <Slide
//         shouldRenderMask
//         label="County Clare - Ireland"
//         background={{
//           backgroundImageSrc: srmpoloblk,
//         }}
//       />

//       <Slide
//         shouldRenderMask
//         label="Crater Rock, OR - United States"
//         background={{
//           backgroundImageSrc: tshttkbrn,
//         }}
//       />

//       <MenuNav />
//     </HeroSlider>
//   );
// }
