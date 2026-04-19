import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUniversity, FaLandmark, FaIndustry } from 'react-icons/fa';
import { keyCredentials } from '../../data/credentialsData';

const CredentialsCards = () => {
  const iconMap = {
    FaAward: FaAward,
    FaUniversity: FaUniversity,
    FaLandmark: FaLandmark,
    FaIndustry: FaIndustry
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent mb-4">
            Our Credentials
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#3FAFBF' }}>
            Trusted by businesses and institutions across India
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {keyCredentials.map((credential) => {
            const IconComponent = iconMap[credential.icon];
            return (
              <motion.div
                key={credential.id}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)' }}
                className="bg-gradient-to-br from-white to-accent-50 rounded-xl p-8 shadow-lg border-2 border-accent-100 hover:border-accent-300 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  {IconComponent && (
                    <div className="mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-700 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="text-4xl text-white" />
                      </div>
                    </div>
                  )}

                  {/* Credential */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {credential.credential}
                  </h3>

                  {/* Description */}
                  <p className="text-primary-600 font-semibold mb-3">
                    {credential.description}
                  </p>

                  {/* Detail */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {credential.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsCards;
