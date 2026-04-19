import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';
import { firmInfo } from '../../data/teamData';

const AboutPreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full" style={{ color: '#3FAFBF', backgroundColor: '#fff5ed' }}>
              Who We Are
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary-900 via-primary-700 to-primary-600 bg-clip-text text-transparent leading-tight">
            About AVMS & Associates
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            {firmInfo.description}
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            {firmInfo.specialization}
          </p>

          <Link to="/about">
            <Button 
              variant="primary" 
              size="lg"
              icon={<FaArrowRight />}
              iconPosition="right"
              className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
