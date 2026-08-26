'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiTarget, FiAward } from 'react-icons/fi';
import { personalInfo, education, codingStats } from '@/app/lib/data';
import Counter from '@/app/components/ui/Counter';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

 const stats = [
  { label: 'LeetCode Rating', value: codingStats.leetcodeRating, isCounter: true, suffix: '', icon: FiAward, color: 'from-yellow-500 to-orange-500' },
  { label: 'Problems Solved', value: codingStats.leetcodeProblems, isCounter: true, suffix: '+', icon: FiTarget, color: 'from-green-500 to-emerald-500' },
  { label: 'Projects Completed', value: codingStats.projectsCompleted, isCounter: true, suffix: '+', icon: FiBriefcase, color: 'from-blue-500 to-cyan-500' },
];

  // Tracks whether Vanta loaded successfully.
  // 'pending' → waiting, 'loaded' → running, 'failed' → fallback active.
  const [vantaStatus, setVantaStatus] = useState<'pending' | 'loaded' | 'failed'>('pending');
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initVanta = () => {
      // Guard: VANTA or THREE might not be on window yet
      if (!(window as any).VANTA || !(window as any).THREE) {
        setVantaStatus('failed');
        return;
      }

      // Guard: WebGL availability check
      try {
        const canvas = document.createElement('canvas');
        const hasWebGL =
          !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
        if (!hasWebGL) {
          setVantaStatus('failed');
          return;
        }
      } catch {
        setVantaStatus('failed');
        return;
      }

      // Attempt to start the Vanta animation
      try {
        const effect = (window as any).VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          skyColor: 0x68b8d7,
          cloudColor: 0xadc1de,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
          speed: 1.00,
        });
        setVantaEffect(effect);
        setVantaStatus('loaded');
      } catch (e) {
        // Vanta threw an error (e.g. WebGL context lost, bad THREE version, etc.)
        console.warn('[About] Vanta.js failed to initialise. Using fallback background.', e);
        setVantaStatus('failed');
      }
    };

    // Give the CDN scripts up to 4 seconds to attach to window.
    // If they haven't arrived by then, flip to the fallback.
    const timeout = setTimeout(() => {
      if (!(window as any).VANTA) {
        console.warn('[About] Vanta.js CDN did not load in time. Using fallback background.');
        setVantaStatus('failed');
      }
    }, 4000);

    // If scripts are already present (cached / fast network), run immediately.
    if ((window as any).VANTA) {
      clearTimeout(timeout);
      initVanta();
    } else {
      // Poll until VANTA appears or the timeout fires.
      const pollInterval = setInterval(() => {
        if ((window as any).VANTA) {
          clearInterval(pollInterval);
          clearTimeout(timeout);
          initVanta();
        }
      }, 200);

      // Cleanup the interval on unmount
      return () => {
        clearInterval(pollInterval);
        clearTimeout(timeout);
        if (vantaEffect) vantaEffect.destroy();
      };
    }

    return () => {
      clearTimeout(timeout);
      if (vantaEffect) vantaEffect.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The fallback gradient mirrors the section's clean aesthetic when Vanta can't run.
  const fallbackStyle =
    vantaStatus === 'failed'
      ? { background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #e8f4fd 100%)' }
      : {};

  return (
    <section
      id="about"
      ref={vantaRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 bg-dark-bg relative overflow-hidden"
      style={fallbackStyle}
    >
      <div className="relative z-10 pointer-events-auto">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-dark-accent to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
            <p className="text-dark-textMuted mb-4 leading-relaxed">
              I'm a passionate Full Stack Developer and AI enthusiast currently pursuing my 
              Bachelor's in Engineering at Sri Eshwar College of Engineering, Coimbatore. 
              With a strong foundation in computer science and a knack for building scalable 
              web applications, I strive to create impactful solutions that solve real-world problems.
            </p>
            <p className="text-dark-textMuted mb-6 leading-relaxed">
              My journey in tech started with competitive programming, where I achieved a 
              LeetCode rating of 1928 (Top 11% globally). This problem-solving mindset has 
              been instrumental in my development work, helping me build efficient and 
              optimized applications.
            </p>
            
            {/* Career Objective */}
            <div className="bg-dark-card border border-dark-borderGlow rounded-xl p-6 mb-6 shadow-md">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-dark-textMain">
                <FiTarget className="text-dark-accent" />
                Career Objective
              </h4>
              <p className="text-dark-textMuted">
                To leverage my full-stack development skills and problem-solving expertise 
                in a challenging software engineering role at a product-based company, 
                where I can contribute to building innovative solutions and grow as a 
                technologist.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-dark-card border border-dark-borderGlow rounded-xl shadow-md"
                >
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} mb-2`}>
                    <stat.icon className="text-white text-xl" />
                  </div>
                 {stat.isCounter ? (
                  <div className="text-2xl font-bold">
                        <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                           ) : (
                   <div className="text-2xl font-bold">{stat.value}</div>
                 )}
                  <div className="text-xs text-dark-textMuted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Personal Info & Education Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>
            <div className="space-y-4 mb-8">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label className="text-sm text-dark-textMuted">Full Name</label>
                  <p className="font-medium text-dark-textMain">{personalInfo.name}</p>
                </div>
                <div className="flex-1">
                  <label className="text-sm text-dark-textMuted">Location</label>
                  <p className="font-medium text-dark-textMain">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label className="text-sm text-dark-textMuted">Email</label>
                  <p className="font-medium text-dark-textMain">{personalInfo.email}</p>
                </div>
                <div className="flex-1">
                  <label className="text-sm text-dark-textMuted">Current CGPA</label>
                  <p className="font-medium">{education[0].score}</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">What Drives Me?</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-dark-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-dark-accent">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-dark-textMain">Problem Solving</h4>
                  <p className="text-dark-textMuted text-sm">
                    I love tackling complex challenges and optimizing solutions for better performance.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-dark-textMain">Continuous Learning</h4>
                  <p className="text-dark-textMuted text-sm">
                    Technology evolves rapidly, and I'm committed to staying at the cutting edge.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-500">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-dark-textMain">Building Impactful Products</h4>
                  <p className="text-dark-textMuted text-sm">
                    I aim to create solutions that make a difference in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}