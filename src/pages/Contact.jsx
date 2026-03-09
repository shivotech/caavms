import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import BackgroundPattern from '../components/common/BackgroundPattern';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { contactIntro } from '../data/contactData';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24 overflow-hidden">
        <BackgroundPattern variant="diagonal" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {contactIntro.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-blue-100 leading-relaxed"
            >
              Whether you have questions about tax, GST, audit, or need business advisory - we're here to help
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative">
        <BackgroundPattern variant="dots" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right Side - Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Headquartered in Bhopal, Madhya Pradesh, serving clients across Central India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0894715847245!2d77.43164857531944!3d23.235787379046893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43b7187d17cb%3A0xf3ca4f54d11cdd88!2sAVMS%20%26%20ASSOCIATES%2C%20CHARTERED%20ACCOUNTANTS!5e0!3m2!1sen!2sin!4v1709985234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AVMS & Associates Location - Bhopal, Madhya Pradesh"
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Map Link */}
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/Senaf2XzVCVeAvSL8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                <FaMapMarkerAlt />
                View on Google Maps
              </a>
            </div>

            {/* Location Details */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">City</h4>
                  <p className="text-gray-600">Bhopal</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">State</h4>
                  <p className="text-gray-600">Madhya Pradesh</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Coverage</h4>
                  <p className="text-gray-600">Central India & Beyond</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
