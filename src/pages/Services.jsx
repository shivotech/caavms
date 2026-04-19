import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServicesFAQ from '../components/services/ServicesFAQ';
import { services } from '../data/servicesData';
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
  FaEnvelope
} from 'react-icons/fa';

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = ['All', 'Tax', 'Audit', 'Corporate', 'Advisory', 'Accounting'];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleCardClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
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
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#1B6575' }}>
              Our Services
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#3FAFBF' }}></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive accounting, audit, tax, and advisory services tailored to your business needs. 
              Three decades of professional excellence across 22+ industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={selectedCategory === category ? { backgroundColor: '#1B6575' } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = iconMap[service.icon] || FaClipboardCheck;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    onClick={() => handleCardClick(service.slug)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCardClick(service.slug);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full"
                  >
                    {/* Card Header */}
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div 
                            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
                            style={{ backgroundColor: '#1B6575' }}
                          >
                            <IconComponent className="text-2xl text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: '#1B6575' }}>
                            {service.title}
                          </h3>
                          {service.category && (
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#E2F5F8', color: '#1B6575' }}>
                              {service.category}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>

                      {/* Read More Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(service.slug);
                        }}
                        className="text-sm font-semibold hover:underline transition-all mt-auto self-start text-left"
                        style={{ color: '#1B6575' }}
                      >
                        <span>Read More</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Professional Guidance?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Let's discuss how we can help your business with our comprehensive accounting and advisory services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ color: '#1B6575' }}
            >
              <FaEnvelope />
              <span>Contact Us Today</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServicesFAQ />
    </div>
  );
};

export default Services;
