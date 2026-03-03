import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { servicesNavData } from '../data/servicesNavData';
import Button from '../components/common/Button';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState(null);
  const [isMainCategory, setIsMainCategory] = useState(false);
  const [relatedServices, setRelatedServices] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0);

    // Find if slug is a main category
    const mainCategory = servicesNavData.find(cat => cat.slug === slug);
    
    if (mainCategory) {
      setServiceData(mainCategory);
      setIsMainCategory(true);
      setRelatedServices([]);
    } else {
      // Find if slug is a sub-service
      let foundService = null;
      let parentCategory = null;
      
      for (const category of servicesNavData) {
        const subService = category.subServices.find(sub => sub.slug === slug);
        if (subService) {
          foundService = subService;
          parentCategory = category;
          break;
        }
      }
      
      if (foundService && parentCategory) {
        setServiceData({
          ...foundService,
          mainCategory: parentCategory.mainCategory,
          mainCategorySlug: parentCategory.slug
        });
        setIsMainCategory(false);
        // Get related services from the same category
        setRelatedServices(
          parentCategory.subServices.filter(sub => sub.slug !== slug).slice(0, 3)
        );
      } else {
        // Service not found, redirect to services page
        navigate('/services');
      }
    }
  }, [slug, navigate]);

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          {/* Breadcrumb */}
          <motion.div 
            className="flex items-center gap-2 text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-white">Home</Link>
            <FaChevronRight className="text-xs" />
            <Link to="/services" className="text-white">Services</Link>
            {!isMainCategory && (
              <>
                <FaChevronRight className="text-xs" />
                <Link 
                  to={`/services/${serviceData.mainCategorySlug}`} 
                  className="text-white"
                >
                  {serviceData.mainCategory}
                </Link>
              </>
            )}
            <FaChevronRight className="text-xs" />
            <span className="text-white font-medium">
              {isMainCategory ? serviceData.mainCategory : serviceData.name}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {isMainCategory ? serviceData.mainCategory : serviceData.name}
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {serviceData.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {isMainCategory ? (
                // Display sub-services for main category
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">
                    Our {serviceData.mainCategory} Services
                  </h2>
                  <div className="space-y-8">
                    {serviceData.subServices.map((subService, index) => (
                      <motion.div
                        key={subService.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-l-4 border-primary-600 pl-6"
                      >
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">
                          {subService.name}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {subService.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                // Display detailed content for sub-service
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    About {serviceData.name}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {serviceData.description}
                    </p>
                    
                    <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 mb-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {serviceData.description.split(',').map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FaCheckCircle className="text-accent-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Related Services
                  </h3>
                  <div className="space-y-3">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 group"
                      >
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-blue-900 py-16">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let us help you achieve your financial and business goals with our expert services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                icon={<FaArrowRight />}
                className="shadow-2xl"
              >
                Request a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
