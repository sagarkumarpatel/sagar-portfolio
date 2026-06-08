'use client';

import Hero from '@/app/sections/Hero';
import About from '@/app/sections/About';
import Skills from '@/app/sections/Skills';
import Projects from '@/app/sections/Projects';
import Experience from '@/app/sections/Experience';
import Education from '@/app/sections/Education';
import Achievements from '@/app/sections/Achievements';
import Contact from '@/app/sections/Contact';
import { motion } from 'framer-motion';
import AchievementGallery from './sections/AchievementGallery';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <AchievementGallery />
      <Contact />
    </motion.div>
  );
}