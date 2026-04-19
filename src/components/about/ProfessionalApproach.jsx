import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaHandshake, FaFileAlt, FaComments, FaShieldAlt } from 'react-icons/fa';
import { firmInfo } from '../../data/teamData';

const ProfessionalApproach = () => {
  const principles = [
    {
      icon: FaFileAlt,
      title: "Do the Work Properly",
      description: "We follow professional standards and regulatory requirements without shortcuts"
    },
    {
      icon: FaFileAlt,
      title: "Document Thoroughly",
      description: "Every finding is backed by evidence, every conclusion is traceable to source data"
    },
    {
      icon: FaComments,
      title: "Communicate Clearly",
      description: "Our reports are written in clear language that management and stakeholders can understand"
    },
    {
      icon: FaShieldAlt,
      title: "Stand Behind Certifications",
      description: "We take responsibility for what we certify and don't compromise on professional integrity"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrity and professionalism guide everything we do
            </p>
          </motion.div>

          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white rounded-2xl p-10 md:p-12 shadow-2xl mb-12 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative z-10">
              <FaQuoteLeft className="text-5xl text-accent-400 mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed italic mb-6">
                {firmInfo.approach}
              </blockquote>
              <div className="flex items-center gap-2">
                <FaHandshake className="text-3xl text-accent-400" />
                <p className="text-blue-200 font-semibold">
                  AVMS & Associates LLP Chartered Accountants - Professional Commitment
                </p>
              </div>
            </div>
          </motion.div>

          {/* Principles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                        <Icon className="text-2xl text-accent-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalApproach;
