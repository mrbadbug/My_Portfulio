import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Phone, Mail, MapPin } from 'lucide-react';
export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 px-6 bg-navy relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}>

              <h2 className="text-coral font-medium tracking-widest uppercase mb-4">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-6 leading-tight">
                Building the{' '}
                <span className="text-lavender italic">future</span> with{' '}
                <span className="text-coral italic">code</span>.
              </h3>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2,
                duration: 0.8
              }}
              className="text-cream/70 text-lg leading-relaxed space-y-6">

              <p>
                I am a Computer Science student at Daffodil International
                University and an aspiring Full-Stack & Mobile Developer. With
                hands-on experience in Flutter, Web Development, UI/UX Design,
                Python, ML, and AI, I have built multiple projects demonstrating
                secure web applications and interactive mobile apps.
              </p>
              <p>
                I am passionate about applying technology to solve real-world
                problems. Always eager to learn new tools and frameworks, I
                strive to grow as a developer and contribute to innovative
                projects.
              </p>
            </motion.div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              {[
              {
                icon: Phone,
                text: '01864034868'
              },
              {
                icon: Mail,
                text: 'monir222051101801@diu.edu.bd'
              },
              {
                icon: MapPin,
                text: '20/A, Barobag, Mirpur-2, Dhaka'
              },
              {
                icon: Github,
                text: 'github.com/mrbadbug',
                href: 'https://github.com/mrbadbug'
              },].
              map((item, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.4 + index * 0.1
                }}
                className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-coral" />
                  </div>
                  {item.href ?
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-coral transition-colors">

                      {item.text}
                    </a> :

                <span className="text-cream/70">{item.text}</span>
                }
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.6
              }}
              className="flex gap-4">

              {['English (Fluent)', 'Bangla (Fluent)'].map((lang) =>
              <span
                key={lang}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cream/70 text-sm">

                  {lang}
                </span>
              )}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              style={{
                y
              }}
              className="relative z-10">

              <div className="aspect-[5.5/5.5] rounded-full overflow-hidden relative group max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-coral/20 to-lavender/20 mix-blend-overlay z-10" />
                <img
                  src="src/assets/prt.jpg"
                  alt="Zakir Hussain Monir"
                  className="w-full h-full rounded-full object-cover object-top" />

              </div>
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10 animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>);

}
