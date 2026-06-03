import { Monitor, Code, Palette, Video } from "lucide-react";
import { motion } from "framer-motion";
import westernFrame from "./assets/frame.png";
import services_sign from "./assets/services_sign.png";

const services = [
  {
    icon: Code,
    title: "Web Applications",
    description:
      "Custom-built applications that automate your business processes and streamline operations. From simple tools to complex systems, we create solutions tailored to your needs.",
    features: [
      "Custom Development",
      "Process Automation",
      "API Integration",
      "Database Management",
    ],
  },
  {
    icon: Monitor,
    title: "Websites",
    description:
      "Professional, responsive websites that represent your brand and drive results. We focus on user experience, performance, and conversion optimization.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Performance",
      "Easy to Manage",
    ],
  },
  {
    icon: Palette,
    title: "Graphics",
    description:
      "Eye-catching visual designs that communicate your message and strengthen your brand identity. From logos to marketing materials, we bring creativity to every project.",
    features: [
      "Brand Identity",
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design",
    ],
  },
  {
    icon: Video,
    title: "Videos",
    description:
      "Engaging video content that tells your story and connects with your audience. Professional production that elevates your brand and communicates your value.",
    features: [
      "Promotional Videos",
      "Product Demos",
      "Social Media Content",
      "Explainer Videos",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="bg-center bg-no-repeat pt-14 pb-16 px-12 sm:px-20 w-full max-w-2xl mx-auto flex flex-col items-center justify-center drop-shadow-md"
            style={{
              backgroundImage: `url(${services_sign})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                /* MODIFIED: Uniform internal spacing with a tight bottom padding */
                className="relative pt-12 px-14 pb-12 transition-all hover:scale-102 flex flex-col justify-center min-h-[460px]"
              >
                {/* BACKGROUND FRAME LAYER: Reduced to 48px to give content more room */}
                <div
                  className="absolute inset-0 pointer-events-none border-[48px] border-solid"
                  style={{
                    borderImageSource: `url(${westernFrame})`,
                    borderImageSlice: "120 fill",
                    borderImageRepeat: "stretch",
                  }}
                />

                <div className="relative z-10 w-full max-w-[88%] mx-auto">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 bg-[#5c4033] flex-shrink-0 flex items-center justify-center shadow-md border border-[#3d2b1f]">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl text-gray-900 font-serif font-bold leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>

                  <ul className="space-y-1 text-xs sm:text-sm">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-[#8b5a2b] font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
