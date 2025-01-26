
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FacultyBox({
  imageSrc = "",
  name = "",
  education = "",
  about = "",
  className = "",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`w-72 h-72  rounded-lg overflow-hidden relative cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        perspective: "1000px", // Enables the 3D flipping effect
      }}
    >
      {/* Front Side */}
      <motion.div
        className={`absolute w-full h-full bg-slate-100 rounded-lg flex flex-col items-center`}
        style={{
          backfaceVisibility: "hidden", // Hide the back face when flipped
          transformStyle: "preserve-3d", // Enables 3D transformation
        }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="bg-custom-gradient w-full h-20"></div>
        <div className="w-28 h-28 -mt-10 flex justify-center rounded-full overflow-hidden">
          <img src={imageSrc} alt={name} />
        </div>
        <h1 className="text-xl text-center font-medium font-heading">{name}</h1>
        <p className="pl-4  font-body"><strong> Education:</strong> {education}</p>
      </motion.div>

      {/* Back Side */}
      <motion.div
        className={`absolute w-full h-full bg-custom-gradient rounded-lg flex justify-center items-center text-white`}
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
        initial={{ rotateY: -180 }}
        animate={{ rotateY: hovered ? 0 : -180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <p className="p-4 font-body">
          <span className="font-heading text-xl font-semibold">About:</span> {about}
        </p>
      </motion.div>
    </motion.div>
  );
}
