import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";
import Banner from "./Banner";
import Tags from "./Tags";
import Description from "./Description";
import BasicSlider from "./BasicSlider";
import ranchbg from "./assets/ranchbg2.png";
import welcomeImage from "./assets/Welcome.png";

// Import your custom gateway post assets
import poleLeft from "./assets/pole_left.png";
import poleRight from "./assets/pole_right.png";

// Imported your edge-to-edge top board asset graphic
import poleTopImg from "./assets/pole_top.png";

// Imported your custom WelcomeSign graphic asset
import welcomeSignImg from "./assets/WelcomeSign.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full">
      {/* Content - Fixed parent layouts to allow the ranch gateway to be full-width */}
      <div className="relative z-10 w-full">
        <div className="w-full">
          <div className="flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center w-full"
            >
              {/* Structural Hero Entryway Wrapper */}
              <div className="relative w-full min-h-[650px] md:h-screen bg-stone-900 overflow-hidden flex flex-col justify-start select-none">
                {/* ====== THE OVERLAY FRAME: SUSPENDED VIA AN INTEGRATED GATEWAY ARCH ====== */}
                <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center select-none">
                  {/* 100% full-width parent overlay container tracking grid */}
                  <div className="w-full h-full relative">
                    {/* ====== TRANSPARENT POLE IMAGE OVERLAYS (BASE LAYER: z-30) ====== */}
                    <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 md:w-20 lg:w-24 h-full z-30">
                      <img
                        src={poleLeft}
                        alt="Gateway Post Left"
                        className="w-full h-full object-cover object-top filter drop-shadow-[4px_0_8px_rgba(0,0,0,0.5)]"
                      />
                    </div>

                    <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 md:w-20 lg:w-24 h-full z-30">
                      <img
                        src={poleRight}
                        alt="Gateway Post Right"
                        className="w-full h-full object-cover object-top filter drop-shadow-[-4px_0_8px_rgba(0,0,0,0.5)]"
                      />
                    </div>

                    {/* ====== pole_top.png LAYERED ON TOP (MIDDLE LAYER: z-40) ====== */}
                    <div className="absolute top-0 left-0 right-0 w-full z-40 px-0 -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8">
                      <img
                        src={poleTopImg}
                        alt="Gateway Top Post"
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover filter drop-shadow-[0_12px_16px_rgba(0,0,0,0.85)]"
                      />
                    </div>

                    {/* ====== WelcomeSign.png CENTERED OVER THE TOP BEAM (TOP LAYER: z-50) ====== */}
                    <div
                      className="absolute inset-x-0 mx-auto flex justify-center z-50 pointer-events-none
                                    top-6 sm:top-10 md:top-14 lg:top-20 
                                    w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[35%]"
                    >
                      <img
                        src={welcomeSignImg}
                        alt="Welcome to the Ranch - Stallion Ranch Media"
                        className="w-full h-auto object-contain filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.9)]"
                      />
                    </div>
                  </div>
                </div>

                {/* ====== YOUR HERO CONTENT / ALIGNED CAROUSEL CONTAINER ====== */}
                {/* FIXED: Shifted top positions upward aggressively to erase the black gap entirely */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10 pb-6 px-2 flex items-center justify-center
                                top-20 sm:top-28 md:top-36 lg:top-[11.5rem]"
                >
                  <div className="w-full max-w-[92%] h-full rounded-2xl overflow-hidden bg-transparent mx-auto relative px-4 sm:px-6 md:px-8">
                    {/* Active Carousel Component — Now seamlessly locked to the bottom edge of the logs */}
                    <div className="w-full h-full">
                      <BasicSlider />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
