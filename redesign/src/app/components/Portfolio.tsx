import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Mobile App Development',
    category: 'Web Application',
    description: 'Custom Applications to meet your business needs and streamline your operations.',
    image: new URL('./assets/flocrm.png', import.meta.url).href,
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Corporate Website Redesign',
    category: 'Website',
    description: 'Modern, responsive website with improved UX and 200% increase in conversion rates.',
    image: new URL('./assets/service.png', import.meta.url).href,
    tags: ['WordPress', 'SEO', 'Analytics'],
  },
  {
    title: 'Brand Identity Package',
    category: 'Graphics',
    description: 'Complete brand refresh including logo, color palette, and marketing materials.',
    image: 'https://images.unsplash.com/photo-1615220367990-1940567341f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjYwNTgyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Branding', 'Design', 'Print'],
  },
  {
    title: 'Product Launch Video',
    category: 'Video',
    description: 'Engaging promotional video that assists your customers and drives product sales.',
    image: new URL('./assets/launch.png', import.meta.url).href,
    tags: ['Production', 'Editing', 'Motion Graphics'],
  },
];

export function Portfolio() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
        setActiveTitle(null);
      }
    };

    if (activeImage) {
      document.addEventListener('keydown', onKey);
      // prevent background scrolling while modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-900">
                  {project.category}
                </div>
                <button
                  onClick={() => { setActiveImage(project.image); setActiveTitle(project.title); }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Open ${project.title} preview`}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink className="text-yellow-600" size={20} />
                  </div>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => { setActiveImage(null); setActiveTitle(null); }}
            role="dialog"
            aria-modal="true"
            aria-label={activeTitle ?? 'Image preview'}
          >
            <div className="relative max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => { setActiveImage(null); setActiveTitle(null); }}
                className="absolute top-2 right-2 bg-white/90 rounded-full p-2 z-10"
                aria-label="Close image preview"
              >
                ✕
              </button>
              <img src={activeImage ?? undefined} alt={activeTitle ?? 'Full size'} className="max-w-full max-h-[80vh] object-contain rounded" />
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Want to see more examples of our work?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}