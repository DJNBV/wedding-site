'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MusicPlayer from '@/components/common/MusicPlayer';
import ScrollIndicator from '@/components/common/ScrollIndicator';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50"
    >
      <MusicPlayer />
      <ScrollIndicator />
      
      {/* Декоративный скролл-индикатор */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-6 border-2 border-amber-700/30 rotate-45 mb-2"
        />
      </div>

      {/* Блок 1: Главный экран */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 via-white to-amber-50/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,251,235,0.95)_100%)]" />
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Image 
            src="/2781343.svg"
            alt="Decorative pen"
            width={120}
            height={120}
            className="mb-12 transform -rotate-12"
            priority
          />
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl font-serif text-amber-950 mb-6 font-light tracking-[0.2em] drop-shadow-sm">А</h1>
          <p className="text-5xl md:text-6xl font-serif text-amber-900 mb-6 font-light drop-shadow-sm">&</p>
          <h1 className="text-7xl md:text-8xl font-serif text-amber-950 mb-10 font-light tracking-[0.2em] drop-shadow-sm">А</h1>
          <p className="text-2xl md:text-3xl font-serif tracking-[0.3em] text-amber-900 font-light drop-shadow-sm">17|07|2025</p>
        </motion.div>
      </motion.section>

      {/* Блок 2: Приглашение и календарь */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/bg2.jpg"
            alt="Background"
            fill
            className="object-cover brightness-95 contrast-105 saturate-[1.2] mix-blend-soft-light blur-[2px]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/80 via-transparent to-white/80" />
        </div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center mb-20 relative before:absolute before:content-[''] before:w-32 before:h-px before:bg-amber-200 before:-top-8 before:left-1/2 before:-translate-x-1/2 after:absolute after:content-[''] after:w-32 after:h-px after:bg-amber-200 after:-bottom-8 after:left-1/2 after:-translate-x-1/2"
        >
          <p className="text-xl md:text-2xl text-amber-800/90 leading-relaxed mb-8 font-light">
            В этот особенный день мы хотим оказаться в окружении самых любимых и дорогих для нас людей.
          </p>
          <p className="text-xl md:text-2xl text-amber-800/90 leading-relaxed font-light">
            С большой радостью приглашаем вас на свадебное торжество нашей дочери
          </p>
        </motion.div>
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-lg relative bg-amber-50/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="calendar-wrapper grid grid-cols-7 gap-2 text-center">
            <div            className="col-span-7 text-xl font-serif text-amber-900 mb-4 relative tracking-widest before:absolute before:content-[''] before:w-12 before:h-px before:bg-amber-300/50 before:-left-16 before:top-1/2 after:absolute after:content-[''] after:w-12 after:h-px after:bg-amber-300/50 after:-right-16 after:top-1/2">Июль 2025</div>
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
              <div key={day} className="text-amber-800/70 font-medium text-sm md:text-base">{day}</div>
            ))}
            {Array.from({ length: 1 }).map((_, i) => (
              <div key={`empty-start-${i}`} className="text-amber-800/50" />
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <motion.div 
                key={i + 1}
                className={`p-1 relative ${i + 1 === 17 ? 'text-white' : 'text-amber-900'}`}
              >
                {i + 1 === 17 ? (
                  <>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 -m-1"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-full h-full text-amber-700"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </motion.div>
                    <span className="relative z-10 font-medium">{i + 1}</span>
                  </>
                ) : (
                  i + 1
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Блок 3: Информация о месте проведения */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-screen flex flex-col items-center justify-center px-6 md:px-8 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-amber-50/20">
          <Image
            src="/bg3.jpg"
            alt="Background"
            fill
            className="object-cover mix-blend-multiply opacity-90 blur-[2px]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/40 to-amber-50/40" />
          <div className="absolute inset-0 backdrop-brightness-110 backdrop-contrast-[0.8] backdrop-saturate-[1.1]" />
        </div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-8 relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-amber-100/20 before:absolute before:content-[''] before:w-16 before:h-16 before:border-t before:border-l before:border-amber-200/30 before:-top-2 before:-left-2 before:rounded-tl-2xl after:absolute after:content-[''] after:w-16 after:h-16 after:border-b after:border-r after:border-amber-200/30 after:-bottom-2 after:-right-2 after:rounded-br-2xl"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-amber-900/90 font-light"
          >
            Время начала 12:00
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-amber-900/90 font-light"
          >
            г.Буйнакск
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-amber-900/90 font-light"
          >
            банкетный зал "Кристалл"
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-amber-800/90 mt-16 font-light italic"
          >
            С любовью,<br/>родители невесты
          </motion.p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}