'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { experiences } from '@/app/lib/data';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Internships and professional experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10">
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
              </div>

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FiMapPin className="text-blue-500" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar className="text-blue-500" />
                      <span>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty spacer for layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}

          {/* If no experience, show placeholder */}
          {experiences.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <FiBriefcase className="text-4xl mx-auto mb-4 opacity-50" />
              <p>No experience entries yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}