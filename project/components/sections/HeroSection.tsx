'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-white/80 to-cream-100/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/photo_5447397551293724018_x.jpg')`
          }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-amber-300/10 rounded-full blur-3xl z-20" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-amber-100/30 to-amber-200/20 rounded-full blur-3xl z-20" />
      
      <motion.div
        className="relative z-30 text-center px-6 max-w-4xl mx-auto"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {/* Feather decoration */}
        <motion.div
          className="flex justify-center mb-8"
          variants={fadeInUp}
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            className="text-amber-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
        </motion.div>

        {/* Names */}
        <motion.div
          className="mb-8"
          variants={fadeInUp}
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-gray-800 mb-4">
            А <span className="text-amber-600 mx-4">&</span> А
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
            Азамат и Амина
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8 text-amber-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;