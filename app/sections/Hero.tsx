'use client';

import { motion, Variants } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Button from '@/app/components/ui/Button';
import { personalInfo } from '@/app/lib/data';
import ParticleBackground from '@/app/components/ui/ParticleBackground';
import Image from 'next/image';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-500/20">
                ✨ Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.shortIntro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button 
                href={personalInfo.resumeUrl}
                variant="primary"
                icon={<FiDownload />}
                download
              >
                Download Resume
              </Button>
              <Button 
                href={`mailto:${personalInfo.email}`}
                variant="outline"
                icon={<FiMail />}
              >
                Email Me
              </Button>
              <Button 
                href={personalInfo.linkedin}
                variant="outline"
                icon={<FiLinkedin />}
                external
              >
                LinkedIn
              </Button>
              <Button 
                href={personalInfo.github}
                variant="outline"
                icon={<FiGithub />}
                external
              >
                GitHub
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center"
          >
            <motion.div
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient opacity-75 blur-xl" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="/sagarkumar.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              
              {/* Decorative ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/30 pointer-events-none"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <ParticleBackground />
    </section>
  );
}