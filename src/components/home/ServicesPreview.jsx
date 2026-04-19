import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFileInvoiceDollar, 
  FaFileInvoice, 
  FaBuilding, 
  FaBook, 
  FaClipboardCheck,
  FaSearchDollar,
  FaLandmark,
  FaHandsHelping,
  FaWarehouse,
  FaUserTie,
  FaArrowRight
} from 'react-icons/fa';
import { services } from '../../data/servicesData';

const ServicesPreview = () => {
  const iconMap = {
    FaFileInvoiceDollar: FaFileInvoiceDollar,
    FaFileInvoice: FaFileInvoice,
    FaBuilding: FaBuilding,
    FaBook: FaBook,
    FaClipboardCheck: FaClipboardCheck,
    FaSearchDollar: FaSearchDollar,
    FaLandmark: FaLandmark,
    FaHandsHelping: FaHandsHelping,
    FaWarehouse: FaWarehouse,
    FaUserTie: FaUserTie
  };

  // Show first 6 services on homepage
  const featuredServices = services.slice(0, 6);

  return (
    <section className="relative py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B6575' }}>
            Our Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaClipboardCheck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#1B6575' }}
                    >
                      <IconComponent className="text-2xl text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1B6575' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            style={{ backgroundColor: '#1B6575' }}
          >
            <span>View All Services</span>
            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
