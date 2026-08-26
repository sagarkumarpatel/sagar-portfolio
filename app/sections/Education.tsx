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
      if (num >= 8.5) return 'text-dark-accent';
      if (num >= 7.5) return 'text-orange-500';
      return 'text-yellow-500';
    } else {
      const num = parseFloat(score);
      if (num >= 80) return 'text-dark-accent';
      if (num >= 70) return 'text-orange-500';
      return 'text-yellow-500';
    }
  };

  return (
    <section id="education" ref={ref} className="py-20 px-4 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-dark-accent to-orange-500 mx-auto rounded-full" />
          <p className="text-dark-textMuted mt-4">
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
              className="bg-dark-card border border-dark-borderGlow rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-dark-accent/10 transition-all"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-dark-textMain">{edu.degree}</h3>
                  <p className="text-dark-accent font-medium">{edu.institution}</p>
                </div>
                {/* <div className={`text-xl font-bold ${getScoreColor(edu.score)}`}>
                  {edu.score}
                </div> */}
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-dark-textMuted">
                <div className="flex items-center gap-1">
                  <FiMapPin className="text-dark-accent" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar className="text-dark-accent" />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FiBook className="text-dark-accent" />
                    <h4 className="font-semibold text-sm text-dark-textMain">Relevant Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs rounded-full bg-dark-bg border border-dark-borderGlow text-dark-textMuted"
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
          className="mt-8 bg-dark-accent/10 border border-dark-accent/20 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-dark-textMain">
            <FiStar className="text-yellow-500" />
            Academic Highlights
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center gap-2 text-sm text-dark-textMuted">
              <span className="w-1.5 h-1.5 rounded-full bg-dark-accent" />
              Consistent academic performer
            </li>
            <li className="flex items-center gap-2 text-sm text-dark-textMuted">
              <span className="w-1.5 h-1.5 rounded-full bg-dark-accent" />
              Active participation in hackathons
            </li>
            <li className="flex items-center gap-2 text-sm text-dark-textMuted">
              <span className="w-1.5 h-1.5 rounded-full bg-dark-accent" />
              Strong foundation in DSA & System Design
            </li>
            <li className="flex items-center gap-2 text-sm text-dark-textMuted">
              <span className="w-1.5 h-1.5 rounded-full bg-dark-accent" />
              Self-taught full-stack development
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}