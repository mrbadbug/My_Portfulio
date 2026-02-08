import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
const qualifications = [
{
  degree: 'B.Sc in CSE',
  institution: 'Daffodil International University',
  year: '2022 - 2026',
  status: 'Ongoing',
  highlights: [
  'Computer Science & Engineering'
  ]

},
{
  degree: 'HSC (Science)',
  institution: 'Dhaka Residential Model College',
  year: '2019 - 2021',
  status: 'GPA: 5.0 / 5.0',
  highlights: ['Science']
},
{
  degree: 'SSC (Science)',
  institution: 'Dhaka Residential Model College',
  year: '2017 - 2019',
  status: 'GPA: 5.0 / 5.0',
  highlights: ['Science', 'Scholarship']
}];

export function Education() {
  return (
    <section
      id="education"
      className="py-32 px-6 bg-navy relative overflow-hidden">

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />


      <div className="max-w-6xl mx-auto relative z-10">
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
          className="text-center mb-20">

          <h2 className="text-coral font-medium tracking-widest uppercase mb-4">
            Education
          </h2>
          <h3 className="text-4xl md:text-6xl font-playfair font-bold text-cream leading-tight">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-lavender">
              Foundation
            </span>
          </h3>
        </motion.div>

        <div className="space-y-8">
          {qualifications.map((qual, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-80px'
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="group relative bg-navy-light/40 border border-white/5 rounded-2xl p-8 md:p-10 hover:border-coral/20 transition-colors duration-500">

              <span className="absolute top-6 right-8 text-8xl font-bold text-white/[0.02] font-outfit select-none">
                0{index + 1}
              </span>

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <motion.div
                initial={{
                  scale: 0
                }}
                whileInView={{
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  delay: 0.3 + index * 0.1
                }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral/20 to-lavender/20 flex items-center justify-center flex-shrink-0">

                  <GraduationCap size={28} className="text-coral" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-2xl font-playfair font-bold text-cream group-hover:text-coral transition-colors">
                        {qual.degree}
                      </h4>
                      <p className="text-cream/60 text-lg">
                        {qual.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <span className="flex items-center gap-1.5 text-cream/50 text-sm">
                        <Calendar size={14} />
                        {qual.year}
                      </span>
                      <span className="flex items-center gap-1.5 text-coral text-sm font-bold">
                        <Award size={14} />
                        {qual.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {qual.highlights.map((highlight, hIndex) =>
                  <motion.span
                    key={hIndex}
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: 0.5 + hIndex * 0.1
                    }}
                    className="px-3 py-1.5 bg-white/5 text-cream/70 text-sm rounded-lg border border-white/5">

                        {highlight}
                      </motion.span>
                  )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}