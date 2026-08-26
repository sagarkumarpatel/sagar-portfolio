'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { projects } from '@/app/lib/data';
import Button from '@/app/components/ui/Button';

const categories = ['All', 'fullstack', 'ecommerce', 'ai'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-dark-textMuted">Some of my best work</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-dark-accent text-white shadow-lg shadow-dark-accent/25 scale-105'
                  : 'bg-dark-card text-dark-textMuted hover:bg-dark-bg hover:text-dark-textMain hover:scale-105'
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                // Updated Card Styling: Added flex-col to push buttons to the bottom, nicer borders, and glow on hover
                className="group flex flex-col bg-dark-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-dark-accent/20 border border-dark-borderGlow hover:border-dark-accent/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-dark-bg flex items-center justify-center overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-dark-accent/10 to-orange-500/10 group-hover:scale-110 transition-transform duration-700 ease-out" />
                      <FiCode className="text-dark-textMuted text-7xl group-hover:text-dark-accent/50 transition-colors duration-300 z-10" />
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-dark-textMain group-hover:text-dark-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-dark-textMuted mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-dark-accent/10 text-dark-accent border border-dark-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-dark-card border border-dark-borderGlow text-dark-textMuted">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-2 text-sm text-dark-textMuted mb-6">
                    {project.features.slice(0, 3).map(feature => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-dark-accent mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Links Section - Now always visible at the bottom of the card */}
                  <div className="mt-auto pt-4 border-t border-dark-borderGlow flex flex-wrap gap-4">
                    <Button href={project.githubUrl} variant="outline" small icon={<FiGithub />}>
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button href={project.liveUrl} variant="primary" small icon={<FiExternalLink />}>
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}