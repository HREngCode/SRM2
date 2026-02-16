import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ranchbg = new URL("./assets/ranchbg2.png", import.meta.url).href;

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
    <section
      id="home"
      className="relative w-full"
    >
      {/* Content - appears above image on mobile, centered */}
      <div className="relative z-10 w-full pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-7xl text-gray-900 mb-6">
                Bring Your Ideas to Life
              </h1>
              <p className="text-sm sm:text-xl lg:text-2xl text-gray-900 mb-8">
                Custom web applications, websites, graphics, and videos designed
                for small businesses
              </p>
              <p className="text-xs sm:text-lg text-gray-900 mb-10 mx-auto">
                At Stallion Ranch Media, we help organizations work smarter, not
                harder. We create digital solutions that automate tasks,
                streamline workflows, and boost efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Background with colored gradient and padded image container */}
      <div className="relative z-0 flex items-center justify-center px-6 sm:px-12 bg-transparent">
        <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-transparent min-h-96">
          <img
            src={ranchbg}
            alt="Modern office technology"
            className="w-full h-96 sm:h-[60vh] md:h-[70vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-transparent pointer-events-none" />
        </div>
      </div>

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
