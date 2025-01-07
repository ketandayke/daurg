import React, { useState } from "react";
import { motion } from "framer-motion";

const InfiniteSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const carouselItems = [
    {
      imageSrc: "/Images/youtube-icon.png",
      link: "https://www.youtube.com/@abondofsuccess",
      content: "D&G Academy School",
    },
    {
      imageSrc: "/Images/youtube-icon.png",
      link: "https://www.youtube.com/@DandGAcademy",
      content: "D&G Academy Coaching",
    },
    {
      imageSrc: "/Images/youtube-icon.png",
      link: "https://www.youtube.com/@grammarhindi123/featured",
      content: "Kapil Sir Hindi",
    },
    {
      imageSrc: "/Images/insta_icon.jpg",
      link: "https://www.instagram.com/kapil_sir_hindi/",
      content: "Kapil Sir Hindi",
    },
    {
      imageSrc: "/Images/whatsapp_icon.jpg",
      link: "https://whatsapp.com/channel/0029VaATmqR35fM27RFxBx2b",
      content: "Kapil Sir Hindi",
    },
  ];

  const totalItems = carouselItems.length;

  return (
    <div
      className="relative overflow-hidden w-full h-48 my-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center gap-8"
        animate={{
          // x: isHovered ? 0 : `-${100 / totalItems}%`,
          x: window.innerWidth<640 ? `-${1000 / totalItems}%` :`-${100 / totalItems}%`,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration:10,
          ease: "linear",
        }}
      >
        {/* Original Items */}
        {carouselItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex flex-col items-center justify-center w-48 h-36 bg-white rounded-lg shadow-md hover:shadow-xl"
          >
            <img
              src={item.imageSrc}
              alt={item.content}
              className="w-20 h-20 object-contain rounded-md"
            />
            <p className="text-sm font-medium mt-2 text-center">{item.content}</p>
          </a>
        ))}

        {/* Duplicated Items */}
        {carouselItems.map((item, index) => (
          <a
            key={index + totalItems}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex flex-col items-center justify-center w-48 h-36 bg-white rounded-lg shadow-md hover:shadow-xl"
          >
            <img
              src={item.imageSrc}
              alt={item.content}
              className="w-20 h-20 object-contain rounded-md"
            />
            <p className="text-sm font-medium mt-2 text-center">{item.content}</p>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
