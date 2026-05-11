// import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider"; // Fix: Use named import
// import Wrapper from "./Wrapper";
// import Title from "./Title";
// import Subtitle from "./Subtitle";

import ranchbg2 from "../components/assets/ranchbg2.png";
import srmpoloblk from "../components/assets/SRMPOLOBLK.png";
import tshttkbrn from "../components/assets/TSHTTKBRN.png";
import flocrm from "../components/assets/flocrm.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider: React.FC = () => {
  const slides = [
    { id: 1, title: "Welcome to SRM2", image: ranchbg2 },
    { id: 2, title: "Modern Redesign", image: flocrm },
  ];

  return (
    <div className="h-screen w-full">
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
              className="relative h-full w-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
              <h1 className="relative z-10 text-white text-6xl font-bold">
                {slide.title}
              </h1>
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
