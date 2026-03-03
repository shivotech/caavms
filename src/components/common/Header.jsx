import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaChevronDown, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Button from './Button';
import logo from '../../images/logo.png';

const Header = () => {
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);

  return (
    <motion.header 
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {/* Top Info Bar - Hidden on mobile */}
      <div className="hidden lg:block text-white py-2 text-sm" style={{ backgroundColor: '#023E60' }}>
        <div className="container-custom">
          <div className="flex items-center justify-between gap-3">
            {/* Left Side - Address */}
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-base" style={{ color: '#4ade80' }} />
              <span>Office No. 8 6th Floor, Bansal One, Near Rani Kamlapati Station, Bhopal</span>
            </div>

            {/* Right Side - Info Items */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Working Hours */}
              <div className="flex items-center gap-2">
                <FaClock className="text-base" style={{ color: '#4ade80' }} />
                <span>Mon - Sat 10.00 - 19.00</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-base" style={{ color: '#4ade80' }} />
                <a href="mailto:rohit@jainrs.com" className="text-white hover:text-gray-200 transition-colors">
                  rohit@jainrs.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <FaPhone className="text-base" style={{ color: '#4ade80' }} />
                <a href="tel:+919981416845" className="text-white hover:text-gray-200 transition-colors">
                  +91 9981416845
                </a>
              </div>

              {/* Branches Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
                  onMouseEnter={() => setBranchDropdownOpen(true)}
                  onMouseLeave={() => setBranchDropdownOpen(false)}
                  className="flex items-center gap-2 hover:text-gray-200 transition-colors"
                >
                  <span>Branches</span>
                  <FaChevronDown className="text-xs" />
                </button>
                
                {branchDropdownOpen && (
                  <div
                    onMouseEnter={() => setBranchDropdownOpen(true)}
                    onMouseLeave={() => setBranchDropdownOpen(false)}
                    className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg py-1 z-50"
                  >
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                      Indore
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                      Mumbai
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                      New Delhi
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="AVMS Logo" 
              className="h-16 w-18 object-contain transition-transform duration-300 self-center"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl lg:text-[26px] font-bold group-hover:opacity-90 transition-all duration-300" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em', color: '#186087' }}>
                AVMS & ASSOCIATES
              </span>
              <span className="text-xl lg:text-[19px] font-semibold tracking-wider" style={{ color: '#C4D5B2' }}>
                CHARTERED ACCOUNTANTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <Navbar />
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
