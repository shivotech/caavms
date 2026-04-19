import React from 'react';
import { motion } from 'framer-motion';
import JobCard from '../components/careers/JobCard';
import Button from '../components/common/Button';
import BackgroundPattern from '../components/common/BackgroundPattern';
import {
  FaBook,
  FaLightbulb,
  FaSearch,
  FaShieldAlt,
  FaComments,
  FaGraduationCap,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import { careersIntro, whatWeLookFor, currentOpportunities, howToApply } from '../data/careersData';

// Icon mapping for qualities
const qualityIconMap = {
  FaBook,
  FaLightbulb,
  FaSearch,
  FaShieldAlt,
  FaComments,
  FaGraduationCap
};

const Careers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24 overflow-hidden">
        <BackgroundPattern variant="grid" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {careersIntro.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-blue-100 mb-6 leading-relaxed"
            >
              {careersIntro.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-blue-200"
            >
              {careersIntro.location}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative">
        <BackgroundPattern variant="dots" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent mb-4">
              {whatWeLookFor.heading}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#3FAFBF' }}>
              {whatWeLookFor.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeLookFor.qualities.map((item, index) => {
              const IconComponent = qualityIconMap[item.icon] || FaBook;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-accent-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-accent-100 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="text-2xl text-accent-700" />
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {item.quality}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#3FAFBF' }}>
              Join our team and work on substantive, varied, technically demanding projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {currentOpportunities.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-100 to-gray-50 relative">
        <BackgroundPattern variant="accounting" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 md:p-12 rounded-2xl border-2 border-primary-100">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent mb-6 text-center">
                {howToApply.heading}
              </h2>
              
              <p className="text-lg leading-relaxed mb-8 text-center" style={{ color: '#3FAFBF' }}>
                {howToApply.description}
              </p>

              {/* Contact Details */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href={`mailto:${howToApply.email}`}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <FaEnvelope className="text-primary-600 text-xl" />
                  <span className="font-semibold text-gray-900">{howToApply.email}</span>
                </a>
                <a
                  href={`tel:${howToApply.mobile}`}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <FaPhone className="text-primary-600 text-xl" />
                  <span className="font-semibold text-gray-900">{howToApply.mobile}</span>
                </a>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-primary-200 mb-8">
                <p className="text-gray-700 leading-relaxed italic">
                  {howToApply.commitment}
                </p>
              </div>

              <div className="text-center">
                <Button variant="primary" icon={FaEnvelope} to="/contact">
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
