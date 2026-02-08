import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface PreloaderProps {
  onComplete: () => void;
}
export function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const completeTimer = setTimeout(() => onComplete(), 3000);
    return () => clearTimeout(completeTimer);
  }, [onComplete]);
  const nameLetters = 'mr_bad_bug'.split('');
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-navy flex items-center justify-center overflow-hidden"
      exit={{
        clipPath: 'inset(50% 0% 50% 0%)',
        transition: {
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1]
        }
      }}>

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-coral/10 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />


      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent mb-12"
          initial={{
            width: 0,
            opacity: 0
          }}
          animate={{
            width: 240,
            opacity: 1
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }} />


        <div className="flex flex-wrap justify-center gap-[2px] mb-8 overflow-hidden max-w-md">
          {nameLetters.map((letter, i) =>
          <motion.span
            key={i}
            className="text-3xl md:text-5xl font-playfair font-bold text-cream tracking-[0.1em]"
            initial={{
              y: '120%',
              opacity: 0
            }}
            animate={{
              y: '0%',
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.04,
              ease: [0.22, 1, 0.36, 1]
            }}>

              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          )}
        </div>

        <motion.p
          className="text-cream/40 text-sm tracking-[0.3em] uppercase font-light"
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1.2,
            duration: 0.6
          }}>

          Full-Stack Developer
        </motion.p>

        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-cream/20 to-transparent mt-12"
          initial={{
            width: 0,
            opacity: 0
          }}
          animate={{
            width: 120,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.22, 1, 0.36, 1]
          }} />


        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) =>
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-coral"
            animate={{
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut'
            }} />

          )}
        </div>
      </div>
    </motion.div>);

}