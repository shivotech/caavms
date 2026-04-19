import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa';

const FirmHistory = () => {
  const practiceAreas = [
    {
      icon: FaChartLine,
      title: "Assurance and Audit",
      services: [
        "Statutory audits",
        "Concurrent audits",
        "Internal audits",
        "Stock audits",
        "Management audits"
      ]
    },
    {
      icon: FaHandshake,
      title: "Taxation",
      services: [
        "Income tax advisory and compliance",
        "GST registration and compliance",
        "Tax audits",
        "TDS management"
      ]
    },
    {
      icon: FaLightbulb,
      title: "Advisory and Compliance",
      services: [
        "Corporate law",
        "Forensic investigations",
        "IT system audits",
        "Management consultancy",
        "Project report preparation"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md mb-6">
              <FaHistory className="text-2xl text-accent-600" />
              <span className="text-primary-700 font-semibold">Since 1993</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Firm Built on Integrity, Not Just Compliance
            </h2>
          </motion.div>

          {/* Historical Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AVMS & Associates LLP Chartered Accountants was founded in Bhopal in 1993 - the same year India was still absorbing the early effects of economic liberalization. In the three decades since, the country's tax laws, corporate regulations, and banking frameworks have been rewritten multiple times. GST replaced an entire ecosystem of indirect taxes. The Companies Act, 2013 replaced a legislation that had been in place since 1956. The Income Tax Act, 1961 has been amended virtually every year. SEBI tightened disclosure requirements. RBI deepened its audit requirements for banks.
              </p>

              <p className="text-lg font-semibold text-primary-700 mb-6">
                We have navigated every one of those changes - and kept our clients ahead of each one.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The firm was built around a straightforward belief: that the role of a Chartered Accountant is not to process paperwork but to genuinely help organizations understand their financial position, meet their legal obligations, and make better decisions. That belief still drives every engagement we take on.
              </p>
            </div>
          </motion.div>

          {/* Our Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Journey
            </h3>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AVMS & Associates LLP Chartered Accountants started as a statutory audit practice in Bhopal, primarily serving local businesses and beginning to build its banking audit credentials. As the firm grew, it expanded into forensic audit - brought on by the increasing complexity of financial fraud in the Indian banking sector - and into IT system audits, as core banking technology became central to how banks operate.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Today, the firm operates across three broad practice areas:</strong>
              </p>
            </div>

            {/* Practice Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="text-2xl" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {area.title}
                    </h4>
                    
                    <ul className="space-y-2">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-accent-600 mt-1">•</span>
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border-l-4 border-primary-600"
            >
              <p className="text-gray-700 italic">
                <strong className="text-primary-700">This breadth is not accidental.</strong> It reflects a deliberate effort to build a firm that can be a single, trusted professional home for a client's entire accounting, audit, and compliance needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FirmHistory;
