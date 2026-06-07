'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiMapPin, FiCalendar, FiStar } from 'react-icons/fi';
import { education } from '@/app/lib/data';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getScoreColor = (score: string) => {
    if (score.includes('CGPA')) {
      const num = parseFloat(score.split(' ')[0]);
      if (num >= 8.5) return 'text-green-500';
      if (num >= 7.5) return 'text-blue-500';
      return 'text-yellow-500';
    } else {
      const num = parseFloat(score);
      if (num >= 80) return 'text-green-500';
      if (num >= 70) return 'text-blue-500';
      return 'text-yellow-500';
    }
  };

  return (
    <section id="education" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                </div>
                <div className={`text-xl font-bold ${getScoreColor(edu.score)}`}>
                  {edu.score}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <FiMapPin className="text-blue-500" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar className="text-blue-500" />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FiBook className="text-blue-500" />
                    <h4 className="font-semibold text-sm">Relevant Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Academic Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Academic Highlights
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Consistent academic performer
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Active participation in hackathons
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Strong foundation in DSA & System Design
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Self-taught full-stack development
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}