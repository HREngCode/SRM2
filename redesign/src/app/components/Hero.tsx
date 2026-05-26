import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";
import Banner from "./Banner";
import Tags from "./Tags";
import Description from "./Description";
import BasicSlider from "./BasicSlider";
import ranchbg from "./assets/ranchbg2.png";
import welcomeImage from "./assets/Welcome.png";

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
              {/* Structural Hero Entryway Wrapper — Set to a distinct h-screen on desktop for cinematic scale */}
              <div className="relative w-full min-h-[650px] md:h-screen bg-stone-900 overflow-hidden select-none">
                {/* ====== THE OVERLAY FRAME: SUSPENDED VIA AN INTEGRATED GATEWAY ARCH ====== */}
                {/* Kept at z-20 so it layers perfectly over your tall background slider graphics */}
                <div className="absolute inset-x-0 top-0 z-20 pointer-events-none flex flex-col items-center select-none">
                  {/* Top Horizontal Header Timber Beam */}
                  <div className="w-full h-6 bg-stone-950 shadow-md"></div>

                  {/* Maximized 92% Width Structural Archway & Sign Assembly */}
                  <div className="w-full max-w-[92%] mx-auto flex flex-col items-center relative">
                    {/* Hanging Support Chains */}
                    <div className="flex justify-between w-[85%] -mt-1 px-12">
                      <div className="w-3 h-14 bg-gradient-to-r from-zinc-800 to-zinc-950 rounded-b shadow-lg"></div>
                      <div className="w-3 h-14 bg-gradient-to-r from-zinc-800 to-zinc-950 rounded-b shadow-lg"></div>
                    </div>

                    {/* Wide Deeply Etched Wood Signboard */}
                    <div
                      className="relative -mt-2 w-full px-12 py-6 md:py-8 text-center rounded border-4 border-stone-950 shadow-2xl
                  bg-amber-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900 via-stone-900 to-stone-950"
                    >
                      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_8px)]"></div>

                      <h1
                        className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.2em]
                   text-amber-100 drop-shadow-[0_4px_4px_rgba(0,0,0,0.95)] [text-shadow:_2px_3px_0px_#1c1917] scale-y-105"
                      >
                        Welcome to the Ranch
                      </h1>
                    </div>

                    {/* Vertical Side Gate Posts — Set to stretch from top to the absolute bottom of the viewport container */}
                    <div className="absolute top-0 h-[200vh] left-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 border-x border-stone-950 shadow-2xl z-30">
                      <div className="w-full h-full opacity-10 bg-[linear-gradient(to_bottom,#000_50%,transparent_50%)] bg-[length:100%_20px]"></div>
                    </div>
                    <div className="absolute top-0 h-[200vh] right-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-stone-900 via-amber-950 to-stone-900 border-x border-stone-950 shadow-2xl z-30">
                      <div className="w-full h-full opacity-10 bg-[linear-gradient(to_bottom,#000_50%,transparent_50%)] bg-[length:100%_20px]"></div>
                    </div>
                  </div>
                </div>

                {/* ====== YOUR HERO CONTENT / TALL CAROUSEL CONTAINER ====== */}
                {/* Absolute fitting forces the slider wrapper to match the exact full height of the parent container frame */}
                <div className="absolute inset-0 z-10 pt-36 pb-6 px-2 flex items-center justify-center">
                  {/* Removed min-h-96 and added h-full to maximize the canvas footprint for Stallion Ranch Media graphics */}
                  <div className="w-full max-w-[92%] h-full rounded-2xl overflow-hidden bg-transparent mx-auto relative px-2 sm:px-4">
                    {/* Active Carousel Component — Now dynamically expands to the absolute boundaries of the canvas */}
                    <div className="w-full h-full">
                      <BasicSlider />
                    </div>
                  </div>
                </div>
              </div>

              {/* <img
                src={welcomeImage}
                className="absolute top-0 left-0 w-3/4 h-full object-cover"
                alt="Welcome image"
              /> */}
              {/* <div
                className="animate-[pulse_3s_ease-in-out_infinite] hover:scale-105 transition-transform duration-500 cursor-pointer
                bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 
                border-4 border-amber-950 rounded-xl px-12 py-8 shadow-2xl max-w-2xl text-center
                before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)]"
              > */}
              {/* <div className="absolute inset-x-0 top-1/2 h-0.5 bg-amber-900/40 border-b border-amber-950/20"></div>
                <div className="absolute inset-x-0 top-1/4 h-0.5 bg-amber-900/30 border-b border-amber-950/10"></div> */}

              {/* <div className="absolute top-3 left-3 w-3 h-3 bg-stone-700 border border-stone-900 rounded-full shadow-inner"></div>
                <div className="absolute top-3 right-3 w-3 h-3 bg-stone-700 border border-stone-900 rounded-full shadow-full"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 bg-stone-700 border border-stone-900 rounded-full shadow-inner"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 bg-stone-700 border border-stone-900 rounded-full shadow-full"></div> */}

              {/* <div className="relative"> */}
              {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
                    <div className="relative z-10 font-serif text-5xl md:text-6xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_0px_#fff]">
                      WELCOME TO THE RANCH
                    </div>
                  </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* <h1 className="text-3xl sm:text-5xl lg:text-7xl text-gray-900 mb-6">
                Bring Your Ideas to Life
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#0056b3",
                }}
              >
                <i className="fas fa-star" style={{ color: "#0056b3" }}></i>{" "}
                Ultimate Feature
              </p> */}
              {/* <p className="text-sm sm:text-xl lg:text-2xl text-gray-900 mb-8">
                Custom web applications, websites, graphics, and videos designed
                for small businesses
              </p>
              <p className="text-xs sm:text-lg text-gray-900 mb-10 mx-auto">
                At Stallion Ranch Media, we help organizations work smarter, not
                harder. We create digital solutions that automate tasks,
                streamline workflows, and boost efficiency.
              </p> */}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Background with colored gradient and padded image container */}
      {/* <div className="max-w-6xl rounded-2xl overflow-hidden bg-transparent min-h-96 mx-auto">
       **Added to test the slider component - remove later** */}
      {/* <BasicSlider /> */}
      {/* Banner image testing */}
      {/* <Banner image={ranchbg}>
          <Title title="Custom web applications, websites, graphics, and videos designed for small businesses" />
          <Tags tags={["Action", "Thriller"]} />
          <Description
            description="At Stallion Ranch Media, we help organizations work smarter, not
        harder. We create digital solutions that automate tasks,
        streamline workflows, and boost efficiency."
          />
        </Banner>
      </div> */}
      {/* <div className="relative z-0 flex items-center justify-center px-6 sm:px-12 bg-transparent">
        <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-transparent min-h-96">
          <img
            src={ranchbg}
            alt="Modern office technology"
            className="w-full h-96 sm:h-[60vh] md:h-[70vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-transparent pointer-events-none" />
        </div>
      </div> */}

      {/* Buttons - positioned below image */}
      <div className="relative z-10 flex justify-center px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-all hover:scale-105"
          >
            Get Started
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("services");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-white/10 transition-all"
          >
            Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
