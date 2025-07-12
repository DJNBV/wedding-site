'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Heart } from 'lucide-react';

const CalendarSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const specialDayVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.8
      }
    }
  };

  // Generate July 2025 calendar
  const generateJulyCalendar = () => {
    const daysInMonth = 31;
    const startDay = 2; // July 1, 2025 is a Tuesday (0 = Sunday, 1 = Monday, etc.)
    const days = [];
    
    // Add empty cells for the start of the month
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const days = generateJulyCalendar();
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  return (
    <section id="calendar" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/photo_5444862275048567181_x.jpg')`
          }}
        />
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-100/30 to-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-amber-200/20 to-amber-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Date section */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-4xl md:text-5xl font-sans font-light text-gray-800 mb-8 tracking-wider">
              17|07|2025
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </motion.div>

          {/* Main invitation text */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-light">
              В этот особенный день мы хотим оказаться в окружении<br />
              самых любимых и дорогих для нас людей.
            </p>

            <p className="text-xl md:text-2xl text-gray-800 mb-8 font-medium">
              С большой радостью приглашаем вас на свадебное торжество<br />
              <span className="text-amber-600 font-semibold">нашей дочери Амины</span>
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </motion.div>

          {/* Section title */}
          <motion.div variants={itemVariants} className="mb-12">
            <Calendar className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              Июль 2025
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </motion.div>

          {/* Calendar */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-xl border border-amber-100"
          >
            {/* Week days header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className="text-center font-semibold text-gray-600 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                const isWeddingDay = day === 17;
                
                return (
                  <motion.div
                    key={index}
                    variants={isWeddingDay ? specialDayVariants : itemVariants}
                    className={`
                      relative h-12 flex items-center justify-center text-lg font-medium
                      ${day ? 'cursor-pointer' : ''}
                      ${isWeddingDay 
                        ? 'text-white font-bold' 
                        : day 
                          ? 'text-gray-700 hover:bg-amber-100 rounded-lg transition-colors' 
                          : ''
                      }
                    `}
                  >
                    {day && (
                      <>
                        {isWeddingDay ? (
                          <div className="relative">
                            {/* Beautiful CSS Heart */}
                            <div className="wedding-heart wedding-heart-pulse">
                            </div>
                            {/* Date number */}
                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg z-10 drop-shadow-sm">
                              {day}
                            </span>
                          </div>
                        ) : (
                          <span>{day}</span>
                        )}
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Wedding day highlight */}
            <motion.div
              variants={specialDayVariants}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full text-white font-medium">
                <Heart className="w-4 h-4 mr-2 fill-white" />
                <span>17 июля - День нашей свадьбы!</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Event details */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-xl border border-amber-100"
          >
            <div className="space-y-6 text-gray-700">
              <div className="text-2xl font-medium">
                Начало в 12:00
              </div>
              
              <div className="text-xl">
                г. Буйнакск
              </div>
              
              <div className="text-xl font-medium">
                Банкетный зал "Кристалл"
              </div>
            </div>
          </motion.div>

          {/* Closing message */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-700 font-medium italic">
              С уважением,
            </p>
            <p className="text-2xl text-gray-800 font-semibold mt-2">
              Расул и Айшат
            </p>
            <div className="mt-8">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 512 512" 
                className="text-amber-600 fill-amber-600 mx-auto"
              >
                <path d="M278.059 17.02c-5.856-1.664-12.032-1.664-17.888 0-58.624 16.64-115.2 51.2-164.352 100.352C47.659 165.532 17.019 220.892 17.019 278.02c0 57.088 30.64 112.448 78.8 160.608 49.152 49.152 105.728 83.712 164.352 100.352 2.944.832 5.952 1.248 8.96 1.248s6.016-.416 8.96-1.248c58.624-16.64 115.2-51.2 164.352-100.352 48.16-48.16 78.8-103.52 78.8-160.608 0-57.128-30.64-112.488-78.8-160.648C393.291 68.22 336.715 33.66 278.059 17.02zM269.131 49.02c48.64 13.824 95.744 42.496 136.832 83.584 41.088 41.088 69.76 88.192 83.584 136.832v17.568c-13.824 48.64-42.496 95.744-83.584 136.832-41.088 41.088-88.192 69.76-136.832 83.584-48.64-13.824-95.744-42.496-136.832-83.584-41.088-41.088-69.76-88.192-83.584-136.832v-17.568c13.824-48.64 42.496-95.744 83.584-136.832C173.387 91.516 220.491 62.844 269.131 49.02z"/>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarSection;