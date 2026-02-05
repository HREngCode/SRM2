import { HTMLAttributeReferrerPolicy } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  image?: string;
  video?: {
    src: string;
    title: string;
    allow: string;
    referrerPolicy: string;
  };
  tags: string[];
};

type PortfolioCardProps = {
  project: PortfolioProject;
  index: number;
  onOpen: (project: PortfolioProject) => void;
};

export function PortfolioCard({ project, index, onOpen }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
      {/* MEDIA */}
      <div className="relative h-64 overflow-hidden">
        <div className="relative w-full h-full">

          {project.video ? (
            <iframe
              src={project.video.src}
              title={project.video.title}
              allow={project.video.allow}
              referrerPolicy={project.video.referrerPolicy as HTMLAttributeReferrerPolicy}
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <ImageWithFallback
              src={project.image!}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          )}
{/* gradient */}
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

{/* IMAGE text overlay */}
{!project.video && (
  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 max-w-[90%]">
      <h3 className="text-white text-xl mb-1">
        {project.title}
      </h3>
      <p className="text-gray-200 text-sm leading-snug">
        {project.description}
      </p>
    </div>
  </div>
)}


          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-900">
            {project.category}
          </div>

          <button
            onClick={() => onOpen(project)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`Open ${project.title} preview`}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <ExternalLink className="text-yellow-600" size={20} />
            </div>
          </button>

        </div>
      </div>

{/* CONTENT */}
{project.video ? (
  // VIDEO: text below
  <div className="p-6 bg-white">
    <h3 className="text-2xl text-gray-900 mb-2">
      {project.title}
    </h3>

    <p className="text-gray-600 mb-4">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <span
          key={tag}
          className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
) : (
  // IMAGE: tags only (optional)
  <div className="p-4 bg-white">
    <div className="flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <span
          key={tag}
          className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)}

    </motion.div>
  );
}

