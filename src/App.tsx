import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { SoftSkills } from './components/SoftSkills';
import { Contact } from './components/Contact';
import { MarqueeStrip } from './components/MarqueeStrip';
import { ArrowUp } from 'lucide-react';
export function App() {
  const [loading, setLoading] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="font-outfit antialiased selection:bg-coral selection:text-white bg-navy min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading &&
      <motion.main
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.5
        }}
        className="w-full relative">

          <Navigation />

          <Hero />
          <MarqueeStrip />
          <About />
          <Projects />
          <MarqueeStrip />
          <Education />
          <Skills />
          <MarqueeStrip />
          <SoftSkills />
          <Contact />

          <footer className="bg-navy-dark py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-playfair font-bold text-cream mb-2">
                  Zakir Hussain Monir
                </h3>
                <p className="text-navy-light/60 text-sm">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>

              <div className="flex gap-8 text-sm font-medium text-cream/70">
                <a
                href="https://github.com/mrbadbug"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral transition-colors">

                  GitHub
                </a>
                <a
                href="https://codeforces.com/profile/monir00"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral transition-colors">

                  Codeforces
                </a>
                <a
                href="mailto:monir222051101801@diu.edu.bd"
                className="hover:text-coral transition-colors">

                  Email
                </a>
              </div>

              <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-coral text-white flex items-center justify-center transition-colors group">

                <ArrowUp
                size={20}
                className="group-hover:-translate-y-1 transition-transform" />

              </button>
            </div>
          </footer>
        </motion.main>
      }
    </div>);

}