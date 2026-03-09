// Contact data - exact content from PDF

export const contactIntro = {
  heading: "Get in Touch With AVMS & Associates",
  description: "We work with clients across Bhopal, Madhya Pradesh, and Central India - and for specialized assignments, across India. Whether you have a question about a tax notice, need help with a GST filing, want to discuss a statutory audit, or are starting a new business and need to get the structure right from day one - reach out. A real person will respond.",
  responseTime: "We typically respond to email inquiries within one business day. For time-sensitive matters - a GST notice deadline, an upcoming audit, or an urgent compliance requirement - please call directly."
};

export const contactDetails = {
  firmName: "AVMS & Associates",
  type: "Chartered Accountants",
  address: {
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India",
    full: "Bhopal, Madhya Pradesh, India"
  },
  phone: {
    landline: "0755-2555642",
    mobile: "+91-7222909440",
    displayLandline: "0755-2555642",
    displayMobile: "+91-7222909440"
  },
  email: {
    primary: "ca.avms@gmail.com",
    display: "ca.avms@gmail.com"
  },
  social: {
    linkedin: {
      url: "https://linkedin.com/company/a-v-m-s-associates",
      handle: "a-v-m-s-associates",
      display: "linkedin.com/company/a-v-m-s-associates"
    }
  },
  officeHours: {
    days: "Monday to Saturday",
    time: "10:00 AM – 6:00 PM",
    full: "Monday to Saturday, 10:00 AM – 6:00 PM",
    closed: "Sunday"
  }
};

export const contactMethods = [
  {
    id: 1,
    type: "Telephone",
    value: "0755-2555642",
    icon: "FaPhone",
    link: "tel:07552555642",
    description: "Main office number"
  },
  {
    id: 2,
    type: "Mobile",
    value: "+91-7222909440",
    icon: "FaMobileAlt",
    link: "tel:+917222909440",
    description: "Mobile number for urgent matters"
  },
  {
    id: 3,
    type: "Email",
    value: "ca.avms@gmail.com",
    icon: "FaEnvelope",
    link: "mailto:ca.avms@gmail.com",
    description: "Primary email for inquiries"
  },
  {
    id: 4,
    type: "LinkedIn",
    value: "linkedin.com/company/a-v-m-s-associates",
    icon: "FaLinkedin",
    link: "https://linkedin.com/company/a-v-m-s-associates",
    description: "Professional network profile"
  },
  {
    id: 5,
    type: "Office Hours",
    value: "Monday to Saturday, 10:00 AM – 6:00 PM",
    icon: "FaClock",
    link: null,
    description: "We are available during these hours"
  },
  {
    id: 6,
    type: "Location",
    value: "Bhopal, Madhya Pradesh, India",
    icon: "FaMapMarkerAlt",
    link: "https://www.google.com/maps/place/AVMS+%26+ASSOCIATES,+CHARTERED+ACCOUNTANTS/@23.2357873,77.4338487,17z/data=!3m1!4b1!4m6!3m5!1s0x397c43b7187d17cb:0xf3ca4f54d11cdd88!8m2!3d23.2357873!4d77.4338487!16s%2Fg%2F11rhnscqw4?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",
    description: "Headquartered in Bhopal"
  }
];

export const contactData = {
  contactIntro,
  contactDetails,
  contactMethods
};

export default contactData;
