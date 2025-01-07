import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

// Set up accessibility for Modal
Modal.setAppElement('#root');

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "../../Images/gallery/group_1.jpg",
    "../../Images/gallery/pahadi_1.jpg",
    "../../Images/gallery/pahadi_2.jpg",
    "../../Images/gallery/patalcot-d&g.jpg",
    "../../Images/gallery/patalcot-dinner.jpg",
    "../../Images/gallery/patalcot-gufa.jpg",
    "../../Images/gallery/patalcot-nature.jpg",
    "../../Images/gallery/patalcot-tracking.jpg",
    "../../Images/gallery/river_1.jpg",
    "../../Images/gallery/river_2.jpg",
  ];
  

  const openModal = (image) => {
    console.log("modal is opened");
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="w-full min-h-screen py-8">
      <h2 className="font-heading font-semibold text-2xl text-center text-black my-8">
        Experience D&G Academy in Action
      </h2>

      {/* Asymmetrical Grid */}
      <div className="w-[90%] mx-auto grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              (index % 5 === 0)||(index % 6 ===0) ? "col-span-2 row-span-2" : ""
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(src)} // Open modal on click

          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover"
              loading="lazy" // Lazy Loading
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer">
              <p className="text-white font-bold text-lg">View Image</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      >
        <div className="relative top-10 max-w-3xl w-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            ✖
          </button>
          <img
            src={currentImage}
            alt="Current"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
}  