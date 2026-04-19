import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaAward, FaUniversity, FaLandmark, FaIndustry } from 'react-icons/fa';
import Button from '../common/Button';
import { keyCredentials } from '../../data/credentialsData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const iconMap = {
    FaAward: FaAward,
    FaUniversity: FaUniversity,
    FaLandmark: FaLandmark,
    FaIndustry: FaIndustry
  };

  return (
    <section className="relative bg-[#E2F5F8] text-primary-500 overflow-hidden min-h-[calc(100vh-5rem)] md:min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&fit=crop" 
          alt="Professional Corporate Office Building" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#E2F5F8]/96 via-white/94 to-[#E2F5F8]/96"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B6575' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="py-16 md:py-24 lg:py-32">
          <motion.div
            className="max-w-6xl mx-auto text-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight text-primary-500"
              variants={itemVariants}
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
               Welcome to AVMS
            </motion.h1>

            {/* Tagline */}
            <motion.p 
                className="text-2xl md:text-3xl lg:text-4xl mb-20 text-primary-500 font-light tracking-wide"
              variants={itemVariants}
              style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
            >
                Accelerating Value, Magnifying Success
            </motion.p>

            {/* Key Credentials Mini Cards - Hidden as per client request */}
            {/* <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
              variants={itemVariants}
            >
              {keyCredentials.map((cred) => {
                const IconComponent = iconMap[cred.icon];
                return (
                  <motion.div 
                    key={cred.id}
                    className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/25 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {IconComponent && <IconComponent className="text-4xl md:text-5xl mb-3 text-yellow-300" />}
                      <p className="font-bold text-base md:text-lg mb-1">{cred.credential}</p>
                      <p className="text-xs md:text-sm text-blue-200">{cred.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  icon={<FaPhone />}
                  className="shadow-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-10 py-4 text-lg"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
