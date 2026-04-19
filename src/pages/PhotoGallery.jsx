import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    title: 'AVMS Team at Office',
    description: 'Our dedicated professionals working together to deliver excellence.',
    src: '/images/gallery-1.jpeg'
  },
  {
    id: 2,
    title: 'Professional Collaboration',
    description: 'Brainstorming and strategizing for our clients.',
    src: '/images/gallery-2.jpeg'
  }
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-accent-100 pt-24 pb-20">
      {/* Header Section */}
      <div className="container-custom relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-[#3FAFBF]"></span>
            <span className="text-[#3FAFBF] uppercase tracking-widest text-sm font-semibold">Moments</span>
            <span className="h-px w-8 bg-[#3FAFBF]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B6575]">
            Photo Gallery
          </h1>
          <p className="text-gray-600 text-lg">
            A visual journey showcasing our vibrant team culture, professional environment, and the people behind AVMS & ASSOCIATES LLP.
          </p>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="container-custom max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-1/2 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-3 md:p-4 border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-[#1B6575]/0 group-hover:bg-[#1B6575]/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      View Full Image
                    </span>
                  </div>
                </div>
                {/* Text below image */}
                <div className="pt-5 pb-2 px-2 text-center">
                  <h3 className="text-xl font-bold text-[#1B6575] mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-500">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-sm shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
