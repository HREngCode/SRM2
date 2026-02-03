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
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ranchbg}
          alt="Modern office technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-800/60 to-gray-700/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Bring Your Ideas to Life
            </h1>
            <p className="text-xl sm:text-2xl text-yellow-100 mb-8">
              Custom web applications, websites, graphics, and videos designed
              for small businesses
            </p>
            <p className="text-lg text-gray-50/90 mb-10 max-w-2xl">
              At Stallion Ranch Media, we help organizations work smarter, not
              harder. We create digital solutions that automate tasks,
              streamline workflows, and boost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all"
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
