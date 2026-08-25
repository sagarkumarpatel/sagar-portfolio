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
          <p className="text-gray-600 dark:text-gray-400">Some of my best work</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105'
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
                className="group flex flex-col bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-100 dark:border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-700 ease-out" />
                      <FiCode className="text-gray-300 dark:text-gray-700 text-7xl group-hover:text-blue-500/50 transition-colors duration-300 z-10" />
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {project.features.slice(0, 3).map(feature => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Links Section - Now always visible at the bottom of the card */}
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50 flex flex-wrap gap-4">
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