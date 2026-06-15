'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

// Icon Imports
import { 
  FaAws, FaJava, FaNetworkWired, FaServer, 
  FaMicrochip
} from 'react-icons/fa';
import { 
  SiCplusplus, SiJavascript, SiPython, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiPostman, SiGithubactions, SiSocketdotio, SiWebrtc,
  SiCodeblocks, SiLeetcode
} from 'react-icons/si';
import { DiCodeBadge } from 'react-icons/di';

import { skills } from '@/app/lib/data';

// ==========================================
// SHARED CONFIGURATION
// ==========================================

const skillIcons: Record<string, any> = {
  // Languages & Web
  'C/C++': SiCplusplus, 'Java': FaJava, 'JavaScript': SiJavascript,
  'Python': SiPython, 'TypeScript': SiTypescript, 'React.js': SiReact,
  'Next.js': SiNextdotjs, 'Tailwind CSS': SiTailwindcss, 'Bootstrap': SiBootstrap,
  'EJS': SiReact, 'Node.js': SiNodedotjs, 'Express.js': SiExpress,
  'REST APIs': DiCodeBadge, 'Socket.io': SiSocketdotio, 'WebRTC': SiWebrtc,
  'MongoDB': SiMongodb, 'PostgreSQL': SiPostgresql, 'MySQL': SiMysql,
  'Git/GitHub': SiGit, 'Docker': SiDocker, 'GitHub Actions': SiGithubactions,
  'AWS': FaAws, 'Postman': SiPostman,

  // Fixed Core CS Icons mapped precisely to data names
  'OOPs': SiCodeblocks,
  'Object Oriented Programming': SiCodeblocks,
  'DBMS': FaServer,
  'OS': FaMicrochip,
  'Operating Systems': FaMicrochip,
  'Computer Networks': FaNetworkWired,
  'DSA': SiLeetcode,
  'Data Structures & Algorithms': SiLeetcode,
};

const categoryConfig: Record<string, { orbit: number; color: string; speed: number }> = {
  languages: { orbit: 4.5, color: '#f59e0b', speed: 0.2 }, 
  frontend: { orbit: 6.5, color: '#06b6d4', speed: 0.3 },  
  backend: { orbit: 8.5, color: '#10b981', speed: 0.15 },  
  databases: { orbit: 10.5, color: '#3b82f6', speed: 0.1 }, 
  core: { orbit: 12.5, color: '#8b5cf6', speed: 0.25 },     
  tools: { orbit: 14.5, color: '#f97316', speed: 0.08 },   
};

// ==========================================
// 3D GALAXY COMPONENTS
// ==========================================

const SkillNode = ({ skill, radius, speed, color, angle }: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const Icon = skillIcons[skill.name] || DiCodeBadge;

  useFrame((state, delta) => {
    if (groupRef.current && !hovered) {
      groupRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <group ref={groupRef}>
      <group position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Html transform distanceFactor={15} center zIndexRange={[100, 0]}>
            <div 
              className={`relative group cursor-pointer transition-transform duration-300 ${hovered ? 'scale-125' : 'scale-100'}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div 
                className="absolute inset-0 rounded-full blur-md opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: color }}
              />
              <div className="relative flex items-center justify-center w-12 h-12 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <Icon className="text-2xl" style={{ color: hovered ? '#fff' : color }} />
              </div>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 p-3 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-300 origin-top ${hovered ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <h4 className="text-white font-bold text-sm text-center mb-1">{skill.name}</h4>
                <div className="text-xs text-gray-400 text-center uppercase tracking-wider mb-2">{skill.category}</div>
                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: hovered ? `${skill.level}%` : '0%', backgroundColor: color }}
                  />
                </div>
              </div>
            </div>
          </Html>
        </Float>
      </group>
    </group>
  );
};

const OrbitPath = ({ radius, color }: { radius: number, color: string }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return pts;
  }, [radius]);

  return <Line points={points} color={color} lineWidth={1} transparent opacity={0.15} />;
};

const GalaxyScene = () => {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (sceneRef.current) {
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, (state.pointer.y * Math.PI) / 10 + 0.2, 0.05);
      sceneRef.current.rotation.z = THREE.MathUtils.lerp(sceneRef.current.rotation.z, (state.pointer.x * Math.PI) / 10, 0.05);
    }
  });

  return (
    <group ref={sceneRef}>
      <Float speed={3} rotationIntensity={0.2} floatIntensity={0.2}>
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} toneMapped={false} />
          <Html center distanceFactor={15}>
            <div className="pointer-events-none text-center">
              <h2 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                Tech Core
              </h2>
            </div>
          </Html>
        </mesh>
        {[1, 2, 3].map((ring) => (
          <mesh key={ring} rotation-x={Math.PI / 2}>
            <torusGeometry args={[1.5 + ring * 0.2, 0.02, 16, 100]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.3 / ring} />
          </mesh>
        ))}
      </Float>
      
      {Object.entries(categoryConfig).map(([category, config]) => {
        const catSkills = skills.filter(s => s.category === category);
        if (catSkills.length === 0) return null;

        return (
          <group key={category}>
            <OrbitPath radius={config.orbit} color={config.color} />
            {catSkills.map((skill, index) => {
              const angle = (index / catSkills.length) * Math.PI * 2;
              return (
                <SkillNode 
                  key={skill.name}
                  skill={skill} 
                  radius={config.orbit} 
                  speed={config.speed} 
                  color={config.color} 
                  angle={angle}
                />
              );
            })}
          </group>
        );
      })}
    </group>
  );
};

function Skills3D() {
  return (
    <div className="relative w-full h-[100vh] min-h-[800px] bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none z-10" />
      <div className="absolute top-20 left-0 w-full text-center z-20 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Explore my ecosystem of languages, frameworks, and tools.
        </p>
      </div>
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 8, 25], fov: 60 }} dpr={[1, 2]}>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#00ffff" />
          <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <GalaxyScene />
        </Canvas>
      </div>
      <div className="absolute bottom-10 left-0 w-full text-center z-20 pointer-events-none md:hidden">
        <p className="text-xs text-gray-500 uppercase tracking-widest animate-pulse">
          Touch & drag to explore
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
    </div>
  );
}

// ==========================================
// 2D GRID COMPONENTS & HELPERS
// ==========================================

const getColorFromGradient = (gradient: string) => {
  const colorMap: Record<string, string> = {
    'from-red-500': 'text-red-500', 'from-blue-500': 'text-blue-500',
    'from-green-500': 'text-green-500', 'from-purple-500': 'text-purple-500',
    'from-yellow-500': 'text-yellow-500', 'from-indigo-500': 'text-indigo-500',
  };
  for (const [key, value] of Object.entries(colorMap)) {
    if (gradient.includes(key)) return value;
  }
  return 'text-blue-500';
};

function AnimatedNumber({ value, isInView, duration = 2.5 }: { value: number, isInView: boolean, duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: duration, ease: "easeOut" });
      return animation.stop;
    }
  }, [count, value, isInView, duration]);

  return <motion.span>{rounded}</motion.span>;
}

function SkillCard({ skill, color, index }: { skill: any, color: string, index: number }) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: '-50px' });

  const Icon = skillIcons[skill.name] || DiCodeBadge;
  const progressColor = getColorFromGradient(color);
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  
  const ANIMATION_DURATION = 2.5;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isCardInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{ background: `linear-gradient(135deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})` }}
      />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
        {Icon && <Icon className="text-3xl mx-auto mb-2 text-gray-700 dark:text-gray-300" />}
        <div className="font-medium text-sm h-10 flex items-center justify-center">{skill.name}</div>
        
        <div className="relative mt-3 flex justify-center">
          <svg className="w-14 h-14 transform -rotate-90">
            <circle
              className="text-gray-200 dark:text-gray-700"
              strokeWidth="3" stroke="currentColor" fill="transparent"
              r={radius} cx="28" cy="28"
            />
            <motion.circle
              className={progressColor}
              strokeWidth="3"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ 
                strokeDashoffset: isCardInView 
                  ? circumference * (1 - skill.level / 100)
                  : circumference
              }}
              transition={{ duration: ANIMATION_DURATION, ease: "easeOut" }}
              stroke="currentColor" fill="transparent"
              r={radius} cx="28" cy="28"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold">
              <AnimatedNumber 
                value={skill.level} 
                isInView={isCardInView} 
                duration={ANIMATION_DURATION}
              />%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Skills2D() {
  const categories = {
    languages: { title: '💻 Programming Languages', color: 'from-red-500 to-orange-500' },
    frontend: { title: '🎨 Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { title: '⚙️ Backend', color: 'from-green-500 to-emerald-500' },
    databases: { title: '🗄️ Databases', color: 'from-purple-500 to-pink-500' },
    tools: { title: '🛠️ Tools', color: 'from-yellow-500 to-amber-500' },
    core: { title: '📚 Core CS', color: 'from-indigo-500 to-violet-500' },
  };

  return (
    <div className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Proficiency</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            A comprehensive breakdown of my capabilities
          </p>
        </div>

        {Object.entries(categories).map(([category, { title, color }]) => {
          const categorySkills = skills.filter(s => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold mb-6">{title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categorySkills.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    color={color} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// MAIN EXPORT
// ==========================================

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 flex flex-col w-full">
      <Skills3D />
      <Skills2D />
    </section>
  );
}