import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import { firmInfo } from '../../data/teamData';

const Introduction = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#1B6575' }}>
              About AVMS & Associates LLP Chartered Accountants
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#3FAFBF' }}></div>
            <p className="text-lg md:text-xl" style={{ color: '#3FAFBF' }}>
              Chartered Accountants | Bhopal, Madhya Pradesh, India
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="mb-12">
            {/* Firm Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 border border-gray-100">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center" style={{ color: '#1B6575' }}>
                  A Legacy of Professional Excellence Since 1993
                </h2>
                <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: '#3FAFBF' }}></div>

                <div className="space-y-6 text-justify">
                  <p className="text-base md:text-lg text-gray-700 leading-loose">
                    AVMS & Associates LLP Chartered Accountants was founded with a clear vision to provide ethical, independent, and technically sound professional services. Over the past thirty years, the firm has evolved into a multidisciplinary advisory practice serving diverse sectors across India. From statutory audits of public sector banks to forensic system evaluations and corporate compliance advisory, our journey reflects continuous professional growth and adaptation.
                  </p>

                  <p className="text-base md:text-lg text-gray-700 leading-loose">
                    Our philosophy is anchored in integrity, objectivity, and technical rigor. We understand that institutions today operate in a dynamic environment shaped by regulatory changes, digital transformation, and increasing accountability expectations. Our role extends beyond compliance verification to strengthening governance structures, improving internal control systems, and enabling strategic foresight.
                  </p>

                  <p className="text-base md:text-lg text-gray-700 leading-loose">
                    The firm is led by experienced Fellows of the Institute of Chartered Accountants of India, supported by a dedicated team of professionals trained in audit, taxation, system analysis, and compliance advisory. We maintain structured engagement methodologies, internal quality review mechanisms, and strict adherence to professional standards. Our enduring relationships with banks, government authorities, and corporate clients are a testament to our commitment to excellence and reliability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
