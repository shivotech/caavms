import React, { useState } from 'react';
import { motion } from 'framer-motion';
import anupImage from '../../images/about us images/CA ANUP SHRIVASTAVA.jpeg';
import vinamraImage from '../../images/about us images/CA VINARMA SHRIVASTAVA.jpeg';
import architImage from '../../images/about us images/CA ARCHIT SAXENA.jpeg';
import anujImage from '../../images/about us images/CA ANUJ JAIN.jpeg';
import sakshiImage from '../../images/about us images/CA SAKSHI AGRAWAL.jpeg';
import sudeepImage from '../../images/about us images/CA Sudeep Moitra.png';

const TeamPreview = () => {
  const [activeCard, setActiveCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "CA Anup Shrivastava",
      role: "Founding Partner",
      qualifications: ["B.Sc.", "FCA", "DISA (ICA)", "CISA (USA)", "FAFD", "CCAB", "Social Auditor"],
      experience: "30+ years of experience in Information Systems Audit, Forensic Audit, and Banking Audit",
      image: anupImage,
      linkedin: "#",
      briefProfile: [
        "Founded the firm in 1993 and built one of Central India's most credential-rich audit practices.",
        "CISA (ISACA, USA) and FAFD certified with deep expertise in IT controls and forensic investigations.",
        "Led statutory bank audits, high-stakes forensic assignments, and governance advisory over three decades."
      ]
    },
    {
      id: 2,
      name: "CA Sudeep Moitra",
      role: "Senior Partner",
      qualifications: ["B.Com", "FCA", "DISA (ICA)", "CCAB"],
      experience: "21+ years specializing in Statutory Audit, System Audit, and Bank Audit",
      image: sudeepImage,
      linkedin: "#",
      briefProfile: [
        "Fellow of ICAI with 21+ years in statutory, system, and bank audit assignments.",
        "DISA qualified with extensive public sector banking exposure across branch and enterprise levels.",
        "Strong command over LFAR expectations, RBI compliance frameworks, and control reviews."
      ]
    },
    {
      id: 3,
      name: "CA Sakshi Shrivastava",
      role: "Partner",
      qualifications: ["B.Com", "FCA", "CCAB"],
      experience: "Expert in Income Tax Advisory, GST Compliance, and Corporate Law",
      image: sakshiImage,
      linkedin: "#",
      briefProfile: [
        "Fellow of ICAI with over 11 years in corporate law, GST advisory, and assurance.",
        "Leads end-to-end compliance under the Companies Act, including MCA filings and governance documentation.",
        "Advises across GST lifecycle including returns, reconciliations, notices, and appellate matters."
      ]
    },
    {
      id: 4,
      name: "CA Archit Saxena",
      role: "Partner",
      qualifications: ["B.Com", "ACA"],
      experience: "Expert in due diligence, corporate restructuring, and M&A advisory",
      image: architImage,
      linkedin: "#",
      briefProfile: [
        "Focuses on internal audit, statutory audit, and project evaluation with a risk-based approach.",
        "Aligns audit scope to real client risk and works across frameworks like GFR, CAG, and procurement norms.",
        "Delivers practical management-focused reports through strong deviation and control analysis."
      ]
    },
    {
      id: 5,
      name: "CA Anuj Shrivastava",
      role: "Partner",
      qualifications: ["B.Com", "ACA", "DISA (ICA)", "AICA Level-1"],
      experience: "Specialist in Tax Planning, Compliance, and Financial Advisory Services",
      image: anujImage,
      linkedin: "https://www.linkedin.com/in/ca-anuj-jain-182591225",
      briefProfile: [
        "Combines income tax expertise with a technology-oriented audit and analytics approach.",
        "Advises individuals, HUFs, firms, LLPs, and companies under Income Tax Act obligations.",
        "Supports ITR, TDS, advance tax, Section 44AB tax audits, and representation before tax authorities."
      ]
    },
    {
      id: 6,
      name: "CA Vinamra Shrivastava",
      role: "Partner",
      qualifications: ["B.Com", "ACA", "AICA Level-1"],
      experience: "Focused on Audit Services, Corporate Compliance, and Business Advisory",
      image: vinamraImage,
      linkedin: "https://www.linkedin.com/in/ca-vinamra-shrivastava-422ab6165",
      briefProfile: [
        "Leads management audit and enterprise risk reviews with focus on operational reality.",
        "Tests whether controls work in practice and identifies policy-vs-execution gaps.",
        "Core strength in stock audits, including verification of inventory existence, valuation, and condition."
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B6575' }}>
            Meet Our Team
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#3FAFBF' }}>
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
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onHoverStart={() => setActiveCard(member.id)}
              onHoverEnd={() => setActiveCard(null)}
              className="relative h-[480px] md:h-[500px]"
              style={{ perspective: '1800px' }}
            >
              <motion.div
                className="relative w-full h-full rounded-3xl"
                animate={{ rotateY: activeCard === member.id ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 115, damping: 18, mass: 0.8 }}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => setActiveCard(activeCard === member.id ? null : member.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setActiveCard(activeCard === member.id ? null : member.id);
                  }
                }}
                aria-label={`Flip card for ${member.name}`}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden border border-white/70 bg-gradient-to-br from-white via-slate-50 to-sky-50 shadow-[0_20px_50px_rgba(2,62,96,0.16)]"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#1B6575] via-[#3FAFBF] to-[#3FAFBF]" />
                  <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className="h-1/2 aspect-square rounded-2xl overflow-hidden border-[3px] shadow-xl mb-4" style={{ borderColor: '#1B6575' }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-[1.52rem] leading-tight font-extrabold mb-1.5" style={{ color: '#1B6575' }}>
                      {member.name}
                    </h3>

                    <p className="text-[1.03rem] font-semibold mb-3" style={{ color: '#3FAFBF' }}>
                      {member.role}
                    </p>

                    <p className="text-sm text-slate-700 leading-7">
                      {member.qualifications.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden border border-[#3FAFBF]/30 bg-gradient-to-br from-[#0C4A56] via-[#1B6575] to-[#3FAFBF] shadow-[0_24px_55px_rgba(2,62,96,0.3)]"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="p-6 h-full text-white flex flex-col items-center justify-center text-center">
                    <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/90 mb-3">
                      Partner Profile
                    </p>
                    <h3 className="text-2xl font-bold leading-tight mb-2 text-white">{member.name}</h3>
                    <p className="text-sm font-semibold text-white/90 mb-3">{member.role}</p>

                    <div className="space-y-2 text-[13px] leading-relaxed max-w-[92%]">
                      {member.briefProfile.map((line, idx) => (
                        <p key={idx} className="text-white">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
