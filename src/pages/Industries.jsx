import React from 'react';
import { motion } from 'framer-motion';
import IndustriesFAQ from '../components/industries/IndustriesFAQ';
import { industries } from '../data/industriesData';
import { 
  FaGraduationCap, 
  FaLeaf,
  FaBook,
  FaTshirt,
  FaShoppingCart,
  FaHome,
  FaTruck,
  FaHandHoldingHeart,
  FaCode,
  FaLightbulb,
  FaCog,
  FaTree,
  FaBullhorn,
  FaHardHat,
  FaTractor,
  FaShippingFast,
  FaTools,
  FaIndustry,
  FaStore,
  FaNewspaper,
  FaCity,
  FaMountain
} from 'react-icons/fa';

const Industries = () => {
  const iconMap = {
    FaGraduationCap: FaGraduationCap,
    FaLeaf: FaLeaf,
    FaBook: FaBook,
    FaTshirt: FaTshirt,
    FaShoppingCart: FaShoppingCart,
    FaHome: FaHome,
    FaTruck: FaTruck,
    FaHandHoldingHeart: FaHandHoldingHeart,
    FaCode: FaCode,
    FaLightbulb: FaLightbulb,
    FaCog: FaCog,
    FaTree: FaTree,
    FaBullhorn: FaBullhorn,
    FaHardHat: FaHardHat,
    FaTractor: FaTractor,
    FaShippingFast: FaShippingFast,
    FaTools: FaTools,
    FaIndustry: FaIndustry,
    FaStore: FaStore,
    FaNewspaper: FaNewspaper,
    FaCity: FaCity,
    FaMountain: FaMountain
  };

  return (
    <div className="min-h-screen">
      {/* Industries Grid Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B6575' }}>
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon] || FaIndustry;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col items-center text-center p-4 cursor-pointer group"
                >
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-lg"
                    style={{ backgroundColor: '#1B6575' }}
                  >
                    <IconComponent className="text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold leading-tight transition-colors duration-300" style={{ color: '#1B6575' }}>
                    {industry.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <IndustriesFAQ />
    </div>
  );
};

export default Industries;
