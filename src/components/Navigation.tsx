import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Education',
  href: '#education'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-navy/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.5
        }}>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-coral origin-left"
          style={{
            scaleX
          }} />


        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="relative z-50 group">
            <span className="font-playfair text-2xl font-bold text-cream">
              mr_bad_bug<span className="text-coral">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-coral transition-all duration-300 group-hover:w-full" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-cream/80 hover:text-coral transition-colors group">

                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-coral transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            )}
            <a
              href="#contact"
              className="px-6 py-2 bg-coral text-white text-sm font-bold rounded-full hover:bg-coral-dark transition-colors shadow-lg shadow-coral/20">

              Let's Talk
            </a>
          </nav>

          <button
            className="md:hidden relative z-50 text-cream hover:text-coral transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}>

            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen &&
        <motion.div
          initial={{
            opacity: 0,
            x: '100%'
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: '100%'
          }}
          transition={{
            type: 'tween',
            duration: 0.4
          }}
          className="fixed inset-0 z-30 bg-navy flex items-center justify-center md:hidden">

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) =>
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.1 + index * 0.1
              }}
              className="text-3xl font-playfair font-bold text-cream hover:text-coral transition-colors">

                  {link.name}
                </motion.a>
            )}
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}