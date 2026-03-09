// Team and firm data - exact content from PDF

// Import team images
import anupImage from '../images/about us images/CA ANUP SHRIVASTAVA.jpeg';
import vinamraImage from '../images/about us images/CA VINARMA SHRIVASTAVA.jpeg';
import architImage from '../images/about us images/CA ARCHIT SAXENA.jpeg';
import anujImage from '../images/about us images/CA ANUJ JAIN.jpeg';
import sakshiImage from '../images/about us images/CA SAKSHI AGRAWAL.jpeg';

export const firmInfo = {
  name: "AVMS & Associates",
  type: "Chartered Accountants",
  location: "Bhopal, Madhya Pradesh, India",
  yearsOfExperience: "30+",
  industriesServed: "22+",
  description: "AVMS & Associates is a professional chartered accountancy firm based in Bhopal, Madhya Pradesh, with more than thirty years of experience across audit, taxation, compliance, and financial advisory services.",
  approach: "Our approach is straightforward: do the work properly, document it thoroughly, communicate findings clearly, and stand behind what we certify. We do not issue qualified audit reports to please a client, and we do not look the other way when something does not reconcile.",
  specialization: "We are not a generalist practice trying to do everything. We have depth in specific areas — statutory audit for scheduled commercial banks, government and public sector audit, forensic investigations, GST compliance and litigation, income tax advisory, and corporate compliance under the Companies Act, 2013."
};

// Team Members
export const teamMembers = [
  {
    id: 1,
    name: "CA Anup Shrivastava",
    designation: "Founding Partner",
    membershipNo: "075270",
    qualifications: ["B.Sc.", "FCA", "DISA (ICA)", "CISA (USA)", "FAFD", "CCAB", "AICA Level-1", "Social Auditor"],
    experienceYears: "30+",
    contact: "+91-9827210226",
    linkedin: null,
    certifications: ["CISA", "FAFD"],
    certificationsFull: [
      {
        abbr: "CISA",
        full: "Certified Information Systems Auditor",
        description: "Global certification for IT audit and cybersecurity professionals"
      },
      {
        abbr: "FAFD",
        full: "Fellow in Anti-Fraud and Forensics from ICAI",
        description: "Advanced certification in forensic accounting and fraud detection"
      }
    ],
    specializations: [
      "Information Systems Audit",
      "Forensic Audit",
      "Banking Audit"
    ],
    experience: "Leading statutory bank audits, concurrent audits, IS audits for RBI-empaneled assignments",
    expertise: [
      "Fraud detection and investigation",
      "Fund diversion investigations",
      "Forensic accounting for banking clients",
      "Forensic accounting for corporate clients",
      "Information systems audit for banks",
      "Statutory branch audit for scheduled commercial banks"
    ],
    image: anupImage
  },
  {
    id: 2,
    name: "CA Sudeep Moitra",
    designation: "Senior Partner",
    membershipNo: "400340",
    qualifications: ["B.Com", "FCA", "DISA (ICA)", "CCAB"],
    experienceYears: "21+",
    contact: "+91-9827016895",
    linkedin: null,
    specializations: [
      "Statutory Audit",
      "System Audit",
      "Bank Audit"
    ],
    experience: "Statutory audit, system audit, and bank audit assignments for public sector banks",
    expertise: [
      "Primary domain in banking with statutory and concurrent audit assignments",
      "Expert in examining lending decisions, KYC compliance, bank-wide MIS systems",
      "Deep understanding of RBI's Master Directions on Statutory Central Auditors",
      "Specialized in Long-Form Audit Report (LFAR) for credit, investment, treasury operations",
      "Focus on internal controls to prevent errors, fraud, and regulatory lapses"
    ],
    image: null
  },
  {
    id: 3,
    name: "CA Sakshi Agrawal",
    designation: "Partner, Corporate Law, GST & Assurance",
    membershipNo: "427741",
    qualifications: ["B.Com", "FCA", "CCAB"],
    experienceYears: "11+",
    contact: "+91-8770044885",
    linkedin: null,
    specializations: [
      "Corporate Law",
      "GST Advisory",
      "Audit Assurance"
    ],
    experience: "Corporate law, GST advisory, audit assurance, and financial reporting",
    expertise: [
      "Complete lifecycle of company compliance: incorporation, MCA21 filings, board documentation",
      "Expert in Companies Act, 2013 compliance including Form AOC-4 and Form MGT-7",
      "Full GST compliance cycle under CGST Act, 2017: registration, monthly returns (GSTR-1, GSTR-3B)",
      "Handles GSTR-9, GSTR-9C reconciliation, ITC reconciliation against GSTR-2B",
      "Represents clients in GST appeals before GST Appellate Authority"
    ],
    image: sakshiImage
  },
  {
    id: 4,
    name: "CA Archit Saxena",
    designation: "Partner, Internal Audit & Project Evaluation",
    membershipNo: "471369",
    qualifications: ["B.Com", "ACA", "AICA Level-1"],
    experienceYears: "3+",
    contact: "+91-9806414224",
    linkedin: null,
    specializations: [
      "Internal Audit",
      "Statutory Audit",
      "Project Evaluation"
    ],
    experience: "Internal audits, statutory audits, and project evaluations with risk-based approach",
    expertise: [
      "Internal audit (government and private sector)",
      "Statutory audit",
      "Project evaluation and monitoring",
      "Risk-based audit framework",
      "Government audit (GFR, CAG standards, CVC/CPPP compliance)",
      "Deviation analysis and management reporting",
      "Public procurement guidelines compliance",
      "Scheme-specific monitoring frameworks"
    ],
    bio: "CA Archit Saxena focuses on internal audits, statutory audits, and project evaluations - assignments that require both technical audit discipline and a genuine understanding of how real organizations work. He brings a risk-based approach to every engagement: before designing the audit scope, he spends time understanding the client's specific risk landscape. That way, audit work is concentrated where the real exposures are, rather than spread thinly across everything.\n\nHis experience covers both government assignments and private sector work. Government audit assignments operate under a distinct framework - General Financial Rules (GFR), CAG audit standards, public procurement guidelines (CVC and CPPP requirements), and scheme-specific monitoring frameworks. Private sector assignments focus more on commercial risk, profitability drivers, internal controls over financial reporting, and operational efficiency.\n\nCA Archit's strength in deviation analysis - finding where actual outcomes differ from plans, targets, or budgets - makes his audit reports genuinely useful for management, not just for compliance. The best internal audit report is one that management reads, discusses, and acts on. That is the standard he aims for.",
    image: architImage
  },
  {
    id: 5,
    name: "CA Anuj Jain",
    designation: "Partner, Income Tax, GST Audit & IT Systems",
    membershipNo: "457485",
    qualifications: ["B.Com", "ACA", "DISA (ICA)", "AICA Level-1"],
    experienceYears: "4+",
    contact: "+91-6266395486",
    linkedin: "https://www.linkedin.com/in/ca-anuj-jain-182591225?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    specializations: [
      "Income Tax",
      "GST Audit",
      "IT Systems"
    ],
    experience: "Income tax expertise with technology-oriented approach to audit",
    expertise: [
      "Income tax advisory for individuals, HUFs, partnership firms, LLPs, and companies",
      "ITR preparation and filing, advance tax scheduling, TDS compliance",
      "Capital gains tax planning and tax audit under Section 44AB",
      "Represents clients before ITO, ACIT, DCIT, and CIT(A) in assessment proceedings",
      "Uses data analysis to evaluate large transaction datasets with DISA and AICA Level-1"
    ],
    image: anujImage
  },
  {
    id: 6,
    name: "CA Vinamra Shrivastava",
    designation: "Partner, Management Audit & Risk",
    membershipNo: "457411",
    qualifications: ["B.Com", "ACA", "AICA Level-1"],
    experienceYears: "4+",
    contact: "+91-7987914958",
    linkedin: "https://www.linkedin.com/in/ca-vinamra-shrivastava-422ab6165",
    specializations: [
      "Management Audit",
      "Enterprise Risk",
      "Stock Audit"
    ],
    experience: "Management audit and enterprise risk practice with focus on operational reality",
    expertise: [
      "Specializes in stock audits for bank lending against inventory",
      "Independent verification of pledged stock existence, valuation, and condition",
      "Stock audits under RBI guidelines for manufacturing, trading, and agribusiness clients",
      "Management audit examining operational processes and control effectiveness",
      "Enterprise risk assessment and control gap analysis"
    ],
    image: vinamraImage
  }
  
];

export const leadPartner = teamMembers[0];

export const empanelments = [
  {
    id: 1,
    name: "RBI Category-I Empanelment",
    authority: "Reserve Bank of India",
    description: "Authorized to conduct statutory branch audits, concurrent audits, and IS audits for scheduled commercial banks",
    scope: [
      "Statutory branch audits for scheduled commercial banks",
      "Concurrent audits",
      "Revenue audits",
      "Information Systems (IS) audits",
      "Stock audits for banking institutions"
    ],
    icon: "FaUniversity",
    badge: "/images/icons/rbi-badge.png"
  },
  {
    id: 2,
    name: "C&AG Registration",
    authority: "Comptroller and Auditor General of India",
    description: "Qualified for government audit assignments, PSU audits, autonomous bodies",
    scope: [
      "Central government department audits",
      "State government department audits",
      "Public Sector Undertaking (PSU) audits",
      "Autonomous body audits",
      "Grant-funded project audits",
      "Compliance with GFR 2017 and CAG audit standards"
    ],
    icon: "FaLandmark",
    badge: "/images/icons/cag-badge.png"
  },
  {
    id: 3,
    name: "ICAI Membership",
    authority: "Institute of Chartered Accountants of India",
    description: "All partners are members in good standing with the Institute of Chartered Accountants of India",
    scope: [
      "Professional practice standards",
      "Code of ethics compliance",
      "Continuing professional education",
      "Peer review compliance"
    ],
    icon: "FaCertificate",
    badge: "/images/icons/icai-badge.png"
  }
];

export const teamData = {
  firmInfo,
  leadPartner,
  empanelments
};

export default teamData;
