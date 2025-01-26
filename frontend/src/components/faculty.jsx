
import React from "react";
import { motion } from "framer-motion";
import {FacultyBox} from "./index";
import useScreenSize from "../hooks/screenSize";

export default function Faculty() {
  const isMobile = useScreenSize();

  const leftVariant = {
    hidden: { x: "-25vw", opacity: 0.8 },
    visible: { x: 0, opacity: 1 },
  };

  const middleVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const rightVariant = {
    hidden: { x: "25vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const transitionProps = {
    duration: 0.8,
    ease: "easeInOut",
  };

  const getVariant = (index) => {
    if (isMobile) {
      return [leftVariant,rightVariant][index % 2];
    }
    return [leftVariant, middleVariant, rightVariant][index % 3];
  };

  
  const facultyData = [
    {
      imageSrc: "../../Images/mahesh.jpg",
      name: "Mahesh Dongre",
      education: "MSc Chemistry",
      about: "With over 8 years of experience in teaching Chemistry and Mathematics, I excel at breaking down complex theories into simple, digestible concepts to help students achieve academic success.",
    },
    {
      imageSrc: "../../Images/user_icon.png",
      name: "Umesh Geete",
      education: "MSc Physics",
      about: "A passionate Physics and Mathematics educator with 10 years of experience, I focus on fostering critical thinking and problem-solving skills among students through engaging lessons.",
    },
    {
      imageSrc: "../../Images/user_icon.png",
      name: "Manish Geete",
      education: "MSc Mathematics",
      about: "As an expert in Mathematics and General Knowledge, I bring over 7 years of teaching experience, delivering practical learning approaches to enhance student understanding and retention.",
    },
    {
      imageSrc: "../../Images/kapil.jpg",
      name: "Kapil Geete",
      education: "MA Hindi and Sanskrit",
      about: "With a decade of teaching Hindi, Grammar, and Sanskrit, I strive to connect students with the cultural and linguistic richness of these languages, ensuring a strong foundational understanding.",
    },
    {
      imageSrc: "../../Images/user_icon.png",
      name: "Jyoti Dongre",
      education: "MSc Biology",
      about: "Specializing in Biology and Science education, I have 6 years of teaching experience dedicated to making science relatable and exciting for young learners, fostering curiosity and exploration.",
    },
    {
      imageSrc: "../../Images/user_icon.png",
      name: "Varsha Deshmukh",
      education: "MA Sanskrit",
      about: "A devoted Sanskrit educator with over 8 years of experience, I am committed to simplifying this ancient language for students, helping them appreciate its historical and linguistic significance.",
    },
  ];
  

  return (
    <div id="faculties" className="w-full min-h-screen overflow-hidden">
      <h2 className="text-2xl font-bold text-center my-8">
        Meet Our Exceptional Teachers
      </h2>
      <div className="w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:px-8 gap-y-8 justify-items-center">
        {facultyData.map((faculty, index) => (
          <motion.div
            key={index}
            variants={getVariant(index)}
            initial="hidden"
            whileInView="visible"
            transition={transitionProps}
            viewport={{ once: false, amount: 0.1 }}
          >
            <FacultyBox
              imageSrc={faculty.imageSrc}
              name={faculty.name}
              education={faculty.education}
              about={faculty.about}
              className=""
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
