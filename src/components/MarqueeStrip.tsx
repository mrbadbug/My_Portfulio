import React from 'react';
import { motion } from 'framer-motion';
export function MarqueeStrip() {
  return (
    <div className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <motion.div
          className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/10"
          initial={{
            scaleX: 0,
            originX: 0
          }}
          whileInView={{
            scaleX: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }} />

        <motion.div
          initial={{
            scale: 0,
            rotate: 0
          }}
          whileInView={{
            scale: 1,
            rotate: 45
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: 'spring',
            stiffness: 200
          }}
          className="w-3 h-3 border border-coral/60 flex-shrink-0" />

        <motion.div
          className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/10"
          initial={{
            scaleX: 0,
            originX: 1
          }}
          whileInView={{
            scaleX: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }} />

      </div>
    </div>);

}