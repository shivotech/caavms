import { motion } from 'framer-motion';
import { FaShieldAlt, FaGraduationCap, FaBriefcase, FaCheckCircle, FaLaptopCode, FaSearch, FaLinkedin } from 'react-icons/fa';
import { leadPartner, teamMembers } from '../../data/teamData';

// Team Section - Updated: 2026-03-10
const TeamSection = () => {
  // Other team members (excluding the lead partner)
  const otherMembers = teamMembers.slice(1);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced chartered accountants committed to delivering
            excellence in financial services
          </p>
        </motion.div>

        {/* Lead Partner - Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid md:grid-cols-3 gap-8 p-8">
              {/* Lead Partner Image */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
                    <img
                      src={leadPartner.image}
                      alt={leadPartner.name}
                      className="w-full h-full object-cover"
                    />
                    {/* LinkedIn Icon */}
                    {leadPartner.linkedin && (
                      <a
                        href={leadPartner.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                        aria-label={`${leadPartner.name} LinkedIn Profile`}
                      >
                        <FaLinkedin className="text-xl text-secondary-500" />
                      </a>
                    )}
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-6 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-sm uppercase tracking-wide">
                      {leadPartner.designation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Partner Details */}
              <div className="md:col-span-2 space-y-6">
                {/* Name and Certifications */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {leadPartner.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {leadPartner.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold border border-amber-200"
                      >
                        <FaGraduationCap />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full Certifications */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Professional Credentials */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaShieldAlt className="text-primary-600" />
                      Professional Credentials
                    </h4>
                    <div className="space-y-3">
                      {leadPartner.certificationsFull.map((cert, index) => {
                        const Icon = cert.abbr === 'CISA' ? FaLaptopCode : FaSearch;
                        return (
                          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-start gap-3">
                              <Icon className="text-2xl text-primary-600 flex-shrink-0 mt-1" />
                              <div>
                                <p className="font-bold text-gray-900">
                                  {cert.abbr} - {cert.full}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                  {cert.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      Key Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leadPartner.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg text-sm font-semibold border border-primary-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Areas of Expertise */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      Areas of Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {leadPartner.expertise.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-gray-700">
                          <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {otherMembers.map((member, index) => (
            <motion.div
              key={`team-${member.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                {/* Member Image */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* LinkedIn Icon */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <FaLinkedin className="text-xl text-secondary-500" />
                    </a>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    {member.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
