'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload, FiCode, FiDatabase } from 'react-icons/fi';
import Button from '@/app/components/ui/Button';
import { personalInfo } from '@/app/lib/data';
import ParticleBackground from '@/app/components/ui/ParticleBackground';
import Image from 'next/image';

export default function Hero() {
  // Typewriter Effect State
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Logic
  useEffect(() => {
    const name = personalInfo.name;
    let typingSpeed = isDeleting ? 100 : 100; // Deleting is faster than typing

    if (!isDeleting && displayText === name) {
      typingSpeed = 2000; // Pause at the end of typing
      setIsDeleting(true);
    } else if (isDeleting && displayText === '') {
      typingSpeed = 800; // Pause before typing starts again
      setIsDeleting(false);
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        name.substring(0, displayText.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5, filter: 'blur(20px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden font-sans">
      {/* Background: Ambient Radial Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-dark-accent/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24"
        >
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            
            {/* Premium Badge */}
            <motion.div variants={itemVariants} className="mb-8 flex justify-center lg:justify-start">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-0 bg-gradient-to-r from-dark-accent via-orange-500 to-yellow-500 animate-[spin_3s_linear_infinite]" />
                <span className="inline-flex items-center justify-center w-full h-full px-5 py-2 text-sm font-medium text-dark-textMain bg-dark-card/90 backdrop-blur-3xl rounded-full">
                  <span className="mr-2 animate-pulse">✨</span> Available for opportunities
                </span>
              </span>
            </motion.div>

            {/* Name: Typewriter Animation */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-6xl font-extrabold tracking-tight mb-4 flex flex-wrap justify-center lg:justify-start items-center min-h-[1.2em]"
            >
              {/* Screen reader only text for accessibility and SEO */}
              <span className="sr-only">{personalInfo.name}</span>
              
              {/* Visible animated text */}
              <span aria-hidden="true" className="text-transparent bg-clip-text bg-gradient-to-r from-dark-textMain via-dark-accent to-dark-textMain bg-[length:200%_auto] animate-gradient">
                {displayText}
              </span>
              
              {/* Glowing blinking cursor */}
              <span 
                aria-hidden="true" 
                className="text-dark-accent font-light ml-1 animate-[pulse_1s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(255,87,51,0.8)] -mt-2"
              >
                |
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium tracking-tight text-dark-textMain mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-dark-textMuted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
            >
              {personalInfo.shortIntro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-dark-accent to-orange-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500" />
                <div className="relative">
                  <Button 
                    href={personalInfo.resumeUrl}
                    variant="primary"
                    icon={<FiDownload />}
                    download
                  >
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="relative hover:-translate-y-1 transition-transform duration-300">
                <Button 
                  href={`mailto:${personalInfo.email}`}
                  variant="outline"
                  icon={<FiMail />}
                >
                  Email Me
                </Button>
              </div>

              <div className="relative hover:-translate-y-1 transition-transform duration-300">
                <Button 
                  href={personalInfo.linkedin}
                  variant="outline"
                  icon={<FiLinkedin />}
                  external
                >
                  LinkedIn
                </Button>
              </div>

              <div className="relative hover:-translate-y-1 transition-transform duration-300">
                <Button 
                  href={personalInfo.github}
                  variant="outline"
                  icon={<FiGithub />}
                  external
                >
                  GitHub
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex-1 flex justify-center relative w-full max-w-md"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-96 md:h-96 cursor-pointer group"
            >
              {/* Complex Orbiting Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-dark-accent/20 animate-[spin_10s_linear_infinite] scale-110" />
              <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-[spin_15s_linear_infinite_reverse] scale-125" />
              
              {/* Glassmorphism Background Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-dark-accent via-orange-500 to-yellow-500 opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-dark-borderGlow shadow-[0_0_40px_-10px_rgba(255,87,51,0.5)] bg-dark-card group-hover:scale-105 transition-transform duration-500 ease-out">
                <Image
                  src="/sagarkumar.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none" />
              </div>

              {/* Interactive Tech Orbs */}
              <div className="absolute top-10 -right-4 w-12 h-12 bg-dark-card/50 backdrop-blur-md rounded-full border border-dark-borderGlow flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite] shadow-xl">
                <FiCode className="text-xl text-dark-accent" />
              </div>
              <div className="absolute bottom-10 -left-4 w-10 h-10 bg-dark-card/50 backdrop-blur-md rounded-full border border-dark-borderGlow flex items-center justify-center animate-[bounce_4s_ease-in-out_infinite_reverse] shadow-xl">
                <FiDatabase className="text-lg text-orange-500" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ParticleBackground />
    </section>
  );
}