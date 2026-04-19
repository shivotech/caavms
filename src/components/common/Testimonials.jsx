import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../data/testimonialsData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-100 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#1B6575' }}>
            Client Testimonials
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#3FAFBF' }}>
            What our clients say about our professional services
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-2 md:px-4">
          <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 min-h-[320px] sm:min-h-[300px] md:min-h-[280px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-4 md:mb-6">
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#3FAFBF' }}
                  >
                    <FaQuoteLeft className="text-xl md:text-2xl text-white" />
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center mb-6 md:mb-8 italic leading-relaxed px-2">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Client Info */}
                <div className="text-center">
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    {testimonials[currentIndex].designation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-110 z-10"
              style={{ hover: { backgroundColor: '#3FAFBF' } }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3FAFBF'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-sm sm:text-base md:text-lg" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-4 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-110 z-10"
              style={{ hover: { backgroundColor: '#3FAFBF' } }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3FAFBF'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-sm sm:text-base md:text-lg" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 md:w-8' 
                    : 'w-2.5 md:w-3 hover:scale-125'
                }`}
                style={{ 
                  backgroundColor: index === currentIndex ? '#3FAFBF' : '#d1d5db'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
