"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Dot = { left: number; top: number; delay: number };

export default function Confetti({ count = 20 }: { count?: number }) {
  const [dots, setDots] = useState<Dot[] | null>(null);

  useEffect(() => {
    // generate positions on the client only to avoid hydration mismatch
    const arr: Dot[] = Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: i * 0.1,
    }));
    setDots(arr);
  }, [count]);

  if (!dots) return null;

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-sky-400 rounded-full"
          style={{ left: `${d.left}%`, top: `${d.top}%` }}
          animate={{ y: [-20, -60], opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: d.delay, repeat: Infinity }}
        />
      ))}
    </motion.div>
  );
}
