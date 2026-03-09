import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import logo from '../../images/logo.png';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            rgba(3, 62, 96, 0.1) 39px,
            rgba(3, 62, 96, 0.1) 40px
          )`
        }}></div>
      </div>

      <div className="container-custom py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="AVMS Logo" 
                className="h-16 w-18 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl lg:text-[16px] font-bold" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em', color: '#186087' }}>
                  AVMS & ASSOCIATES
                </span>
                <span className="text-xl lg:text-[12px] font-semibold tracking-wider" style={{ color: '#0d7a36' }}>
                  CHARTERED ACCOUNTANTS
                </span>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Bhopal, Madhya Pradesh, India
            </p>
            <div className="mt-4 flex items-start text-gray-600 text-sm">
              <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" style={{ color: '#159645' }} />
              <span>Professional excellence since 1993 - serving clients across 22+ industries</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ec812f' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 transition-colors duration-300 flex items-center group" style={{ hover: { color: '#159645' } }}>
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300" style={{ color: '#159645' }}>→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 transition-colors duration-300 flex items-center group" style={{ hover: { color: '#159645' } }}>
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300" style={{ color: '#159645' }}>→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 transition-colors duration-300 flex items-center group" style={{ hover: { color: '#159645' } }}>
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300" style={{ color: '#159645' }}>→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-700 transition-colors duration-300 flex items-center group" style={{ hover: { color: '#159645' } }}>
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300" style={{ color: '#159645' }}>→</span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 transition-colors duration-300 flex items-center group" style={{ hover: { color: '#159645' } }}>
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300" style={{ color: '#159645' }}>→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ec812f' }}>Our Services</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#159645' }}>•</span>
                Income Tax & GST Services
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#159645' }}>•</span>
                Statutory & Bank Audits
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#159645' }}>•</span>
                Forensic Audit & Investigation
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#159645' }}>•</span>
                Corporate Compliance
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#159645' }}>•</span>
                Stock & Management Audit
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#159645' }}>•</span>
                Government & NGO Audits
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#159645' }}>•</span>
                Business Advisory Services
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ec812f' }}>Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center transition-colors duration-300">
                <FaPhone className="mr-3 flex-shrink-0" style={{ color: '#159645' }} />
                <a href="tel:07552555642" className="text-gray-700 hover:text-blue-600">0755-2555642</a>
              </li>
              <li className="flex items-center transition-colors duration-300">
                <FaPhone className="mr-3 flex-shrink-0" style={{ color: '#159645' }} />
                <a href="tel:+917222909440" className="text-gray-700 hover:text-blue-600">+91-7222909440</a>
              </li>
              <li className="flex items-center transition-colors duration-300">
                <FaEnvelope className="mr-3 flex-shrink-0" style={{ color: '#159645' }} />
                <a href="mailto:ca.avms@gmail.com" className="text-gray-700 hover:text-blue-600">
                  ca.avms@gmail.com
                </a>
              </li>
              <li className="flex items-center transition-colors duration-300">
                <FaLinkedin className="mr-3 flex-shrink-0" style={{ color: '#159645' }} />
                <a 
                  href="https://linkedin.com/company/a-v-m-s-associates" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
            
            {/* Office Hours */}
            <div className="mt-6 p-4 rounded-lg border-2" style={{ backgroundColor: '#f0f9ff', borderColor: '#023E60' }}>
              <div className="flex items-center mb-2" style={{ color: '#023E60' }}>
                <FaClock className="mr-2" />
                <span className="font-semibold">Office Hours</span>
              </div>
              <p className="text-gray-700 text-sm">
                Monday to Saturday<br />
                10:00 AM – 6:00 PM
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t mt-10 pt-8 text-center text-gray-600 text-sm"
          style={{ borderColor: '#023E60' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="font-semibold" style={{ color: '#023E60' }}>&copy; {new Date().getFullYear()} AVMS & Associates. All rights reserved.</p>
          <p className="mt-2 text-gray-700">
            Empowering businesses with trusted financial expertise since 1993
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
