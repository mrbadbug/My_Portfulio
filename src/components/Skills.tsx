import React from 'react';
import { motion } from 'framer-motion';
const skillCategories = [
{
  title: 'Mobile & Frontend',
  skills: [
  {
    name: 'Flutter / Dart',
    level: 90
  },
  {
    name: 'HTML / CSS / JS',
    level: 85
  },
  {
    name: 'Tailwind CSS',
    level: 80
  },
  {
    name: 'Streamlit',
    level: 75
  }]

},
{
  title: 'Backend & Database',
  skills: [
  {
    name: 'PHP / PDO',
    level: 80
  },
  {
    name: 'MySQL / NoSQL',
    level: 80
  },
  {
    name: 'Node.js',
    level: 70
  },
  {
    name: 'Flask / API',
    level: 75
  }]

},
{
  title: 'Languages',
  skills: [
  {
    name: 'Python',
    level: 90
  },
  {
    name: 'C / C++',
    level: 80
  },
  {
    name: 'Java',
    level: 75
  },
  {
    name: 'JavaScript',
    level: 85
  }]

},
{
  title: 'ML, AI & Tools',
  skills: [
  {
    name: 'ML Models & AI',
    level: 80
  },
  {
    name: 'Git / Docker / Bash',
    level: 85
  },
  {
    name: 'Figma / Adobe XD / Canva',
    level: 80
  },
  {
    name: 'VS Code / Android Studio',
    level: 90
  }]

}];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-navy relative overflow-hidden">

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
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
              }}>

              <h2 className="text-coral font-medium tracking-widest uppercase mb-4">
                Expertise
              </h2>
              <h3 className="text-4xl md:text-6xl font-playfair font-bold text-cream mb-8 leading-tight">
                Technical <br />{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-lavender">
                  Arsenal
                </span>
                .
              </h3>
              <p className="text-cream/60 text-lg leading-relaxed max-w-md">
                From mobile apps to machine learning models, I work across the
                full stack to build complete solutions.
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, catIndex) =>
            <div key={category.title}>
                <motion.h4
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: catIndex * 0.1
                }}
                className="text-xl font-bold text-cream mb-6 border-b border-white/10 pb-2">

                  {category.title}
                </motion.h4>

                <div className="space-y-6">
                  {category.skills.map((skill, index) =>
                <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-cream/80 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-coral">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-navy-light rounded-full overflow-hidden">
                        <motion.div
                      initial={{
                        width: 0
                      }}
                      whileInView={{
                        width: `${skill.level}%`
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.1,
                        ease: 'easeOut'
                      }}
                      className="h-full bg-gradient-to-r from-coral to-lavender rounded-full" />

                      </div>
                    </div>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}