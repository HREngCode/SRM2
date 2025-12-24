import { Target, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback.tsx';

const values = [
  {
    icon: Target,
    title: 'Understanding First',
    description: 'We take time to understand your business inside and out before proposing solutions.',
  },
  {
    icon: Zap,
    title: 'Efficiency Focused',
    description: 'Our solutions automate tasks and streamline workflows so you can focus on growth.',
  },
  {
    icon: CheckCircle,
    title: 'Results Driven',
    description: 'We measure success by the tangible impact we make on your business operations.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              Work Smarter, Not Harder
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our goal is simple — help organizations work smarter, not harder. We take time to 
              understand your business inside and out, then create digital solutions that automate 
              tasks, streamline workflows, and boost efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With the tech side handled, you can focus on what matters most — growing your business 
              and perfecting your craft.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={new URL('./assets/smarter.png', import.meta.url).href}
                alt="Creative design workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6"
            >
              <div className="text-4xl text-yellow-600 mb-1">100%</div>
              <div className="text-gray-600">Client Focused</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-gray-700 to-yellow-500 rounded-xl shadow-xl p-6 text-white"
            >
              <div className="text-4xl mb-1">24/7</div>
              <div className="text-yellow-100">Support Available</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}