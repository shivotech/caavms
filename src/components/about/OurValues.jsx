import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaBook, FaLightbulb, FaLock } from 'react-icons/fa';

const OurValues = () => {
  const values = [
    {
      icon: FaBullhorn,
      title: "We tell you what we find, not what you want to hear.",
      description: "Independence is not just a professional requirement under the ICAI Code of Ethics. It is a personal commitment every partner of AVMS & Associates LLP Chartered Accountants makes to every client. If the accounts have a problem, we say so. If a proposed transaction carries tax or legal risk, we flag it. That directness is what builds trust over decades."
    },
    {
      icon: FaBook,
      title: "We stay current so our clients don't have to.",
      description: "The GST framework introduced in 2017 under the Central Goods and Services Tax Act has been amended and clarified repeatedly through circulars, notifications, and council decisions. The Income Tax Act, 1961 sees changes in nearly every Union Budget. The Companies Act, 2013 has seen significant amendments including the Companies (Amendment) Acts of 2017, 2019, and 2020. Keeping up with all of this is a full-time job - and it is ours, not yours."
    },
    {
      icon: FaLightbulb,
      title: "We give advice you can actually use.",
      description: "There is a tendency in professional services to answer every question with \"it depends\" and then hand the client a thirty-page opinion. We do not operate that way. We explain the issue, outline the options, give our recommendation, and explain why. Plain language. Practical direction."
    },
    {
      icon: FaLock,
      title: "What you share with us stays with us.",
      description: "Client confidentiality is an absolute obligation under the ICAI Code of Ethics. We take it seriously, and every member of our team - partners and staff - understands that. No client information is ever shared, discussed, or referenced outside the engagement without explicit written consent."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
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
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto"></div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-accent-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-accent-300"
                >
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-3xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
