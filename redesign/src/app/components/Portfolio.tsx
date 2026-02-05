import { HTMLAttributeReferrerPolicy ,useState, useEffect } from 'react';
import { PortfolioCard, PortfolioProject } from './PortfolioCard';
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
    video: {
      src: 'https://www.youtube.com/embed/pgTB8kzD9RE?autoplay=1&mute=1&playsinline=1',
      title: 'YouTube video player',
      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      referrerPolicy: 'strict-origin-when-cross-origin',
      allowFullScreen: true,
    },
    tags: ['Production', 'Editing', 'Motion Graphics'],
  },
];

export function Portfolio() {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      document.addEventListener('keydown', onKey);
      // prevent background scrolling while modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

    return (
    <section id="portfolio" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.title}
              project={project}
              index={index}
              onOpen={setActiveProject}
            />
          ))}
        </div>

        {/* MODAL */}
        {activeProject && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setActiveProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
          >
            <div
              className="relative w-[90%] max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute -top-10 right-0 bg-white/90 rounded-full p-2 z-10"
                aria-label="Close preview"
              >
                ✕
              </button>

              {activeProject.video ? (
                <iframe
                  src={`${activeProject.video.src}&autoplay=1&mute=0`}
                  title={activeProject.video.title}
                  allow={activeProject.video.allow}
                  referrerPolicy={activeProject.video.referrerPolicy as HTMLAttributeReferrerPolicy}
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-contain rounded-lg bg-black"
                />
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}