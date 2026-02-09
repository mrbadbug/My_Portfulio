import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import tt from '../assets/tt.png';
import vv from '../assets/vv.webp';
import ss from '../assets/ss.png';

const projects = [
  {
    title: 'eCard_Validator',
    category: 'ML & Mobile App',
    description:
      'Stacked ensemble of DNN, LightGBM, and XGBoost models trained on 30 features from CSV dataset. Highly customized UI in both Streamlit and Flutter mobile app.',
    tags: ['DNN', 'XGBoost', 'LightGBM', 'Streamlit', 'Flutter'],
    github: 'https://github.com/mrbadbug/eCard_Validator',
    gradient: 'from-coral to-lavender',
    image: tt
  },
  {
    title: 'SummariQ',
    category: 'NLP & AI',
    description:
      'Intelligent text summarizer powered by BART Transformer Model using facebook/bart-large-cnn from Hugging Face.',
    tags: ['BART', 'Hugging Face', 'NLTK', 'Python', 'NLP'],
    github: 'https://github.com/mrbadbug/SummariQ',
    gradient: 'from-lavender to-indigo-500',
    image: vv
  },
  {
    title: 'KYT_Shop',
    category: 'E-Commerce Web App',
    description:
      'Full-featured e-commerce website with modern UI, authentication system, and database integration.',
    tags: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/mrbadbug/KYT_Shop',
    gradient: 'from-emerald-400 to-teal-500',
    image: ss
  }
];

type Project = typeof projects[number];

function ProjectItem({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-12 items-center mb-32 last:mb-0`}
    >
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} on GitHub`}
        className="w-full lg:w-3/5 relative group overflow-hidden rounded-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="aspect-[16/10] relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-contain bg-black"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
          />

          <motion.div
            style={{ y }}
            className="relative z-10 flex items-center justify-center h-full text-white/20 text-[8rem] md:text-[12rem] font-bold font-outfit select-none"
          >
            {project.id}
          </motion.div>

          <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />
        </div>
      </motion.a>

      <motion.div
        className="w-full lg:w-2/5"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-coral font-medium tracking-widest uppercase text-sm mb-2 block">
          {project.category}
        </span>

        <h3 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
          {project.title}
        </h3>

        <p className="text-navy/70 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full border border-navy/10 text-navy/60 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 10 }}
          className="flex items-center gap-2 text-navy font-bold group"
        >
          <Github size={20} className="text-coral" />
          View on GitHub
          <ArrowUpRight
            size={20}
            className="text-coral group-hover:rotate-45 transition-transform"
          />
        </motion.a>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-cream relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-coral font-medium tracking-widest uppercase mb-4">
            Selected Work
          </h2>
          <h3 className="text-4xl md:text-6xl font-playfair font-bold text-navy">
            Featured Projects
          </h3>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-20">
          <motion.a
            href="https://github.com/mrbadbug?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-navy text-cream rounded-full font-bold text-lg hover:bg-navy-light transition-colors shadow-xl"
          >
            <Github size={22} />
            View All Repositories
          </motion.a>
        </div>
      </div>
    </section>
  );
}
