import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { servicesNavData } from '../../data/servicesNavData';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);
  
  const navLinksBeforeServices = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
  ];

  const navLinksAfterServices = [
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdownOpen(false);
      setActiveSubMenu(null);
    }, 300); // 300ms delay before closing
    setCloseTimeout(timeout);
  };

  const handleMainCategoryClick = (slug) => {
    navigate(`/services/${slug}`);
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setServicesDropdownOpen(false);
    setActiveSubMenu(null);
  };

  const handleSubServiceClick = (slug) => {
    navigate(`/services/${slug}`);
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setServicesDropdownOpen(false);
    setActiveSubMenu(null);
  };
  
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {/* Nav links before Services */}
      {navLinksBeforeServices.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
        >
          {link.label}
          {isActive(link.path) && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
              layoutId="navbar-indicator"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }}
            />
          )}
        </Link>
      ))}
      
      {/* Services Dropdown */}
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium flex items-center gap-1"
        >
          Services
          <FaChevronDown className="text-xs" />
          {(isActive('/services') || location.pathname.startsWith('/services/')) && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
              layoutId="navbar-indicator"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }}
            />
          )}
        </button>
        
        {servicesDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200">
            {servicesNavData.map((category) => (
              <div
                key={category.id}
                className="relative group"
                onMouseEnter={() => setActiveSubMenu(category.id)}
              >
                <button
                  onClick={() => handleMainCategoryClick(category.slug)}
                  className="w-full px-5 py-3 text-left hover:bg-primary-50 transition-colors flex items-center justify-between group"
                >
                  <span className="text-gray-800 font-medium group-hover:text-primary-600">
                    {category.mainCategory}
                  </span>
                  <FaChevronRight className="text-xs text-gray-400 group-hover:text-primary-600" />
                </button>
                
                {/* Sub-menu */}
                {activeSubMenu === category.id && (
                  <div className="absolute left-full top-0 ml-1 w-80 bg-white rounded-lg shadow-xl py-2 border border-gray-200">
                    {category.subServices.map((subService) => (
                      <button
                        key={subService.id}
                        onClick={() => handleSubServiceClick(subService.slug)}
                        className="w-full px-5 py-3 text-left hover:bg-primary-50 transition-colors group"
                      >
                        <div className="flex flex-col">
                          <span className="text-gray-800 font-medium group-hover:text-primary-600 mb-1">
                            {subService.name}
                          </span>
                          <span className="text-xs text-gray-500 leading-relaxed">
                            {subService.description}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Nav links after Services */}
      {navLinksAfterServices.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
        >
          {link.label}
          {isActive(link.path) && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
              layoutId="navbar-indicator"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
