import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { servicesNavData } from '../../data/servicesNavData';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setServicesExpanded(false);
    setExpandedCategory(null);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    setServicesExpanded(false);
    setExpandedCategory(null);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleCategoryClick = (categorySlug) => {
    navigate(`/services/${categorySlug}`);
    closeMenu();
  };

  const handleSubServiceClick = (subServiceSlug) => {
    navigate(`/services/${subServiceSlug}`);
    closeMenu();
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };
  
  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4 border-b border-gray-200">
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-col p-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`
                        block px-4 py-3 rounded-lg font-medium transition-all duration-300
                        ${isActive(link.path) 
                          ? 'bg-primary-600 text-white shadow-md' 
                          : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-1"
                >
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300
                      ${(isActive('/services') || location.pathname.startsWith('/services/'))
                        ? 'bg-primary-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                      }
                    `}
                  >
                    <span>Services</span>
                    {servicesExpanded ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {/* Services Submenu */}
                  <AnimatePresence>
                    {servicesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-2 space-y-2">
                          {/* All Services Link */}
                          <Link
                            to="/services"
                            onClick={closeMenu}
                            className="block px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg font-semibold"
                          >
                            View All Services
                          </Link>

                          {/* Categories */}
                          {servicesNavData.map((category) => (
                            <div key={category.id} className="border-l-2 border-gray-200 pl-2">
                              <button
                                onClick={() => toggleCategory(category.id)}
                                className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                              >
                                <span className="text-left flex-1">{category.mainCategory}</span>
                                {expandedCategory === category.id ? (
                                  <FaChevronUp className="text-xs ml-2 flex-shrink-0" />
                                ) : (
                                  <FaChevronDown className="text-xs ml-2 flex-shrink-0" />
                                )}
                              </button>

                              {/* Sub-services */}
                              <AnimatePresence>
                                {expandedCategory === category.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="ml-2 mt-1 space-y-1">
                                      {/* Main Category Link */}
                                      <button
                                        onClick={() => handleCategoryClick(category.slug)}
                                        className="block w-full text-left px-3 py-2 text-xs text-primary-600 hover:bg-primary-50 rounded font-semibold"
                                      >
                                        View All {category.mainCategory}
                                      </button>
                                      
                                      {/* Sub-services */}
                                      {category.subServices.map((subService) => (
                                        <button
                                          key={subService.id}
                                          onClick={() => handleSubServiceClick(subService.slug)}
                                          className="block w-full text-left px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 rounded"
                                        >
                                          {subService.name}
                                        </button>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </nav>
              
              {/* Contact Button */}
              <div className="p-4 mt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full px-4 py-3 text-center bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors duration-300 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
