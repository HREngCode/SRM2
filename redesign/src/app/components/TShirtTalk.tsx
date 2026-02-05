import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const tshirtTalkImage = new URL('./assets/TST.PNG', import.meta.url).href;

export function TShirtTalk() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Background overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-700 to-white opacity-90" />
          
          {/* Content and Image Layout */}
          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12">
            {/* Left Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                T-Shirt Talk
              </h2>
              <p className="text-xl text-white/90">
                Catch the weekly uplifting messages on T-Shirt Talk. Join us for inspiring conversations and community connection every week.
              </p>
              <a
                href="https://www.tiktok.com/@tshirttalk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 font-semibold"
              >
                Watch on TikTok
                <ExternalLink size={20} />
              </a>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center"
            >
              <img
                src={tshirtTalkImage}
                alt="T-Shirt Talk"
                className="w-full max-w-sm h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
