import { Monitor, Code, Palette, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Custom-built applications that automate your business processes and streamline operations. From simple tools to complex systems, we create solutions tailored to your needs.',
    features: ['Custom Development', 'Process Automation', 'API Integration', 'Database Management'],
  },
  {
    icon: Monitor,
    title: 'Websites',
    description: 'Professional, responsive websites that represent your brand and drive results. We focus on user experience, performance, and conversion optimization.',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Easy to Manage'],
  },
  {
    icon: Palette,
    title: 'Graphics',
    description: 'Eye-catching visual designs that communicate your message and strengthen your brand identity. From logos to marketing materials, we bring creativity to every project.',
    features: ['Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Print Design'],
  },
  {
    icon: Video,
    title: 'Videos',
    description: 'Engaging video content that tells your story and connects with your audience. Professional production that elevates your brand and communicates your value.',
    features: ['Promotional Videos', 'Product Demos', 'Social Media Content', 'Explainer Videos'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help your business thrive
          </p>
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-600">
                      <span className="text-yellow-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}