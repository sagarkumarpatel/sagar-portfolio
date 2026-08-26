'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiBook, FiAward, FiMail,FiImage } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';

const navItems = [
  { name: 'Home', href: '/', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Experience', href: '#experience', icon: FiBriefcase },
  { name: 'Education', href: '#education', icon: FiBook },
  { name: 'Achievements', href: '#achievements', icon: FiAward },
  { name: 'Gallery', href: '#achievement-gallery', icon: FiImage },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        if (section === '') continue;
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        // Changed z-50 to z-[999] here to force it above all 3D content
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/80 backdrop-blur-md shadow-lg border-b border-dark-borderGlow'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
        <Link href="/" className="relative group">
  <div className="flex items-center gap-2">
    {/* Logo Icon */}
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-10 h-10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark-accent to-orange-500 rounded-xl transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-lg font-['Orbitron'] tracking-wider">SP</span>
      </div>
    </motion.div>
    
    {/* Logo Text - Futuristic Style with Orbitron */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-2xl font-bold font-['Orbitron'] tracking-wider"
    >
      <span className="bg-gradient-to-r from-dark-accent to-orange-500 bg-clip-text text-transparent">
        SAGAR
      </span>
      <span className="text-dark-textMain font-light">.dev</span>
    </motion.div>
  </div>
</Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1) || 
                  (item.href === '/' && activeSection === '');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-dark-accent group min-h-[44px] flex items-center justify-center"
                  >
                    <span className={`${isActive ? 'text-dark-accent' : 'text-dark-textMuted'}`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-dark-accent to-orange-500"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-accent/10" />
                  </Link>
                );
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-dark-accent via-orange-500 to-yellow-500"
          style={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.1 }}
        />
      </motion.header>

      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}