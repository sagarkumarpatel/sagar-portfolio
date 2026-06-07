'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function Counter({ end, duration = 2, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16.67);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="text-4xl font-bold"
    >
      {count}{suffix}
    </motion.span>
  );
}