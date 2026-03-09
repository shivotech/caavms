import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaBriefcase } from 'react-icons/fa';
import anupImage from '../../images/about us images/CA ANUP SHRIVASTAVA.jpeg';
import vinamraImage from '../../images/about us images/CA VINARMA SHRIVASTAVA.jpeg';
import architImage from '../../images/about us images/CA ARCHIT SAXENA.jpeg';
import anujImage from '../../images/about us images/CA ANUJ JAIN.jpeg';
import sakshiImage from '../../images/about us images/CA SAKSHI AGRAWAL.jpeg';
import sudeepImage from '../../images/about us images/CA Sudeep Moitra.png';

const TeamPreview = () => {
  const teamMembers = [
    {
      id: 1,
      name: "CA Anup Shrivastava",
      role: "Founding Partner",
    //   membershipNo: "075270",
      qualifications: ["B.Sc.", "FCA", "DISA (ICA)", "CISA (USA)", "FAFD", "CCAB", "Social Auditor"],
      experience: "30+ years of experience in Information Systems Audit, Forensic Audit, and Banking Audit",
      image: anupImage
    },
    {
      id: 2,
      name: "CA Sudeep Moitra",
      role: "Senior Partner",
    //   membershipNo: "400340",
      qualifications: ["B.Com", "FCA", "DISA (ICA)", "CCAB"],
      experience: "21+ years specializing in Statutory Audit, System Audit, and Bank Audit",
      image: sudeepImage
    },
    {
      id: 3,
      name: "CA Sakshi Shrivastava",
      role: "Partner",
    //   membershipNo: "427741",
      qualifications: ["B.Com", "FCA", "CCAB"],
      experience: "Expert in Income Tax Advisory, GST Compliance, and Corporate Law",
      image: sakshiImage
    },
    {
      id: 4,
      name: "CA Anuj Shrivastava",
      role: "Partner",
    //   membershipNo: "457485",
      qualifications: ["B.Com", "ACA", "DISA (ICA)", "AICA Level-1"],
      experience: "Specialist in Tax Planning, Compliance, and Financial Advisory Services",
      image: anujImage
    },
    {
      id: 5,
      name: "CA Vinamra Shrivastava",
      role: "Partner",
    //   membershipNo: "457411",
      qualifications: ["B.Com", "ACA", "AICA Level-1"],
      experience: "Focused on Audit Services, Corporate Compliance, and Business Advisory",
      image: vinamraImage
    },
    {
      id: 6,
      name: "CA Archit Saxena",
      role: "Partner",
    //   membershipNo: "457412",
      qualifications: ["B.Com", "ACA"],
      experience: "Expert in due diligence, corporate restructuring, and M&A advisory",
      image: architImage
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#023E60' }}>
            Meet Our Team
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#ec812f' }}>
            Talented professionals dedicated to your success
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-xl" style={{ borderColor: '#023E60' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Experience Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <FaBriefcase className="text-xs" />
                    {member.experience.split(' ')[0]}
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold mb-1 text-center" style={{ color: '#023E60' }}>
                {member.name}
              </h3>

              {/* Membership Number */}
              {/* <p className="text-xs text-center text-gray-500 mb-2">
                Membership No: {member.membershipNo}
              </p> */}

              {/* Role */}
              <p className="text-base font-semibold text-center mb-4" style={{ color: '#159645' }}>
                {member.role}
              </p>

              {/* Qualifications */}
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaAward style={{ color: '#023E60' }} />
                  <span className="text-sm font-semibold" style={{ color: '#023E60' }}>Qualifications</span>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {member.qualifications.map((qual, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-full shadow-sm"
                      style={{ 
                        backgroundColor: '#e0f2fe',
                        color: '#023E60',
                        border: '1px solid #bae6fd'
                      }}
                    >
                      {qual}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Description */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  {member.experience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
