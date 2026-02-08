import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github } from 'lucide-react';
export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-navy flex items-center justify-center pt-200">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            rotate
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />

        <motion.div
          style={{
            rotate: useTransform(scrollY, [0, 500], [45, 0])
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />

        <motion.div
          style={{
            y: y1
          }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-coral to-lavender opacity-20 blur-[100px] animate-blob-slow" />

        <motion.div
          style={{
            y: y2
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-lavender to-navy-light opacity-20 blur-[120px] animate-blob-medium" />

      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.5
          }}
          className="mb-7 inline-block">

          <span className="text-coral font-medium tracking-[0.2em] text-sm md:text-base uppercase">
            Full-Stack Developer · Flutter · Web · Python · ML & AI
          </span>
        </motion.div>

        <div className="overflow-hidden mb-20">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair text-cream leading-tight">
            <motion.div
              initial={{
                x: '-100%'
              }}
              animate={{
                x: 0
              }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 20,
                delay: 0.2
              }}
              className="inline-block mr-3 md:mr-6">

              Zakir Hussain
            </motion.div>
            <motion.div
              initial={{
                x: '100%'
              }}
              animate={{
                x: 0
              }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 20,
                delay: 0.4
              }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-coral to-lavender">

              Monir
            </motion.div>
          </motion.h1>
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.8,
            duration: 0.8
          }}
          className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">

          Computer Science student & aspiring Full-Stack Developer with hands-on
          experience in Flutter, Web Development, UI/UX Design, Python, ML, and
          AI. Passionate about solving real-world problems through technology.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1,
            duration: 0.8
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-5">

          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="group relative px-8 py-4 bg-coral text-white rounded-full font-bold text-lg overflow-hidden shadow-lg shadow-coral/25">

            <span className="relative z-10 flex items-center gap-2">
              View My Work{' '}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform" />

            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="px-8 py-4 border border-cream/20 text-cream rounded-full font-medium text-lg hover:bg-white/5 transition-colors backdrop-blur-sm">

            Get In Touch
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/13GP5J335ME00_wAcYgioLg8lSRDzme9S/view?usp=drive_link"
            download
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="group px-8 py-4 bg-white/5 border border-lavender/30 text-lavender rounded-full font-medium text-lg hover:bg-lavender/10 transition-colors backdrop-blur-sm flex items-center gap-2">

            <Download
              size={20}
              className="group-hover:translate-y-0.5 transition-transform" />

            Download CV
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        style={{
          opacity
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cream/30 flex flex-col items-center gap-2">

        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cream/50 to-transparent" />
      </motion.div>
    </section>);

}