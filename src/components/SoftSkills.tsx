import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, Target } from 'lucide-react';
const softSkills = [
{
  name: 'Project Management',
  icon: Target,
  color: 'from-coral to-coral-dark',
  description:
  'Planning, organizing, and executing projects from concept to delivery with clear milestones and deadlines.'
},
{
  name: 'Teamwork',
  icon: Handshake,
  color: 'from-lavender to-lavender-dark',
  description:
  'Collaborating effectively with cross-functional teams, sharing knowledge, and contributing to collective goals.'
},
{
  name: 'Leadership',
  icon: Users,
  color: 'from-emerald-400 to-teal-500',
  description:
  'Guiding teams with clear vision, motivating peers, and taking initiative to drive projects forward.'
}];

export function SoftSkills() {
  return (
    <section className="py-32 px-6 bg-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
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
            Beyond Code
          </h2>
          <h3 className="text-4xl md:text-6xl font-playfair font-bold text-navy leading-tight">
            Soft{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-lavender">
              Skills
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 40
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 15
                  }
                }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-navy/5 hover:shadow-xl hover:border-coral/20 transition-all duration-300 text-center">

                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: {
                      duration: 0.5
                    }
                  }}>

                  <Icon size={28} className="text-white" />
                </motion.div>
                <h4 className="text-navy font-bold text-xl mb-3 group-hover:text-coral transition-colors font-playfair">
                  {skill.name}
                </h4>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}