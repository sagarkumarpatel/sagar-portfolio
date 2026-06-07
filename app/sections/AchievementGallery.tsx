'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiX, FiZoomIn, FiDownload, FiExternalLink, FiCalendar, FiAward } from 'react-icons/fi';
import { achievements } from '@/app/lib/data';

// Define the type properly matching the Achievement type
interface AchievementWithImage {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'hackathon' | 'certification' | 'coding' | 'award';
  link?: string;
  image?: string;
  certificate?: string;
}

export default function AchievementGallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<AchievementWithImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Filter achievements that have images - Fixed type predicate
  const achievementsWithImages = achievements.filter(
    (achievement): achievement is AchievementWithImage => 
      'image' in achievement && !!achievement.image
  );

  const filteredAchievements = filter === 'all' 
    ? achievementsWithImages 
    : achievementsWithImages.filter(a => a.type === filter);

  const types = ['all', ...new Set(achievementsWithImages.map(a => a.type))];

  return (
    <section ref={ref} id="achievement-gallery" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievement Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Proof of excellence - Certificates, awards, and recognition
          </p>
        </motion.div>

        {/* Filter Buttons */}
        {types.length > 1 && (
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                  filter === type
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {type === 'all' ? 'All' : type}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        {achievementsWithImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              📸 Achievement images coming soon! Check back later.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(achievement)}
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                    {achievement.image ? (
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FiAward className="text-white/30 text-6xl" />
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                          <FiZoomIn className="text-white text-2xl" />
                        </button>
                        {achievement.certificate && (
                          <a
                            href={achievement.certificate}
                            download
                            onClick={(e) => e.stopPropagation()}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                          >
                            <FiDownload className="text-white text-2xl" />
                          </a>
                        )}
                        {achievement.link && (
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                          >
                            <FiExternalLink className="text-white text-2xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                        achievement.type === 'hackathon' 
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                          : achievement.type === 'certification'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      }`}>
                        {achievement.type}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <FiCalendar size={12} />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition text-white"
                >
                  <FiX size={24} />
                </button>
                
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {selectedImage.description}
                  </p>
                  <div className="flex gap-4">
                    {selectedImage.certificate && (
                      <a
                        href={selectedImage.certificate}
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition"
                      >
                        <FiDownload />
                        Download Certificate
                      </a>
                    )}
                    {selectedImage.link && (
                      <a
                        href={selectedImage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 transition"
                      >
                        <FiExternalLink />
                        View Details
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}