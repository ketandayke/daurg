import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ cursorActive }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorActive) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        console.log("cursor position ",cursorPosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorActive]);

  if (!cursorActive) return null; // Hide cursor when not active

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
      style={{
        top: cursorPosition.y,
        left: cursorPosition.x ,
      }}
      animate={{
        x: cursorPosition.x - 15,
        y: cursorPosition.y - 15,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};


export default CustomCursor;
