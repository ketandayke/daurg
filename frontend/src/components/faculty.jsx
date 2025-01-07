// import React from 'react'
// import {FacultyBox} from './index';
// import {motion} from 'framer-motion'

// export default function Faculty() {
//   const leftVariant = {
//     hidden: { x: "-25vw", opacity: 0.8 },
//     visible: { x: 0, opacity: 1 },
//   };
//   const middelVariant={
//     hidden:{scale:0.8 ,opacity:0},
//     visible:{scale:1 ,opacity:1},
//   };
//   const rightVariant={
//     hidden:{x:"25vw" ,opacity:0},
//     visible:{x:0 ,opacity:1},
//   };
//   const transitionProps={
//     duration:0.8,
//     ease:"easeInOut",
//   }
//   return (
//     <div id="faculties" className="w-full min-h-screen">
//       <h2 className="text-2xl font-bold text-center my-8">Meet Our Exceptional Teachers</h2>
//       <div className=" w-[90%] mx-auto  grid lg:grid-cols-3 md:grid-cols-2 sm:px-8 gap-y-8  justify-items-center  ">
//       <motion.div
//           variants={leftVariant}
//           initial="hidden"
//           whileInView="visible"
//           transition={transitionProps}
//           viewport={{once:false,amount:0.1}}
//           >
//             <FacultyBox imageSrc="../../Images/mahesh.jpg" name="Mahesh Dongre" education="Msc Chemistry" about=" I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students. " className=""/>
    
//       </motion.div>

//       <motion.div
//           variants={`${window.innerWidth<=768}? ${rightVariant}:${middelVariant}`}
//           initial="hidden"
//           whileInView="visible"
//           transition={transitionProps}
//           viewport={{once:false,amount:0.1}}
//       >
//         <FacultyBox imageSrc="../../Images/mahesh.jpg" name="Mahesh Dongre" education="Msc Chemistry" about=" I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students. " className=""/>

//       </motion.div>

//       <motion.div
//           variants={`${window.innerWidth<=768}? {leftVariant}:{rightVariant}`}
//           initial="hidden"
//           whileInView="visible"
//           transition={transitionProps}
//           viewport={{once:false,amount:0.1}}
//       >
//         <FacultyBox imageSrc="../../Images/mahesh.jpg" name="Mahesh Dongre" education="Msc Chemistry" about=" I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students. " className=""/>

//       </motion.div>
//       <motion.div
//           variants={`${window.innerWidth<=768}? ${rightVariant}:${leftVariant}`}
//           initial="hidden"
//           whileInView="visible"
//           transition={transitionProps}
//           viewport={{once:false,amount:0.1}}
//           >
//             <FacultyBox imageSrc="../../Images/mahesh.jpg" name="Mahesh Dongre" education="Msc Chemistry" about=" I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students. " className=""/>
    
//       </motion.div>

//       <motion.div
//           variants={`${window.innerWidth<=768}? {leftVariant}:{middelVariant}`}
//           initial="hidden"
//           whileInView="visible"
//           transition={transitionProps}
//           viewport={{once:false,amount:0.1}}
//       >
//         <FacultyBox imageSrc="../../Images/mahesh.jpg" name="Mahesh Dongre" education="Msc Chemistry" about=" I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students. " className=""/>

//       </motion.div>

//       <motion.div
//           variants={rightVariant}
//           initial="hidden"
//           whileInView="visible"
//           transition={transitionProps}
//           viewport={{once:false,amount:0.1}}
//       >
//         <FacultyBox imageSrc="../../Images/mahesh.jpg" name="Mahesh Dongre" education="Msc Chemistry" about=" I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students. " className=""/>

//       </motion.div>

      
      

//       </div>

//     </div>
//   );
// };


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
    { imageSrc: "../../Images/mahesh.jpg",
      name: "Mahesh Dongre",
      education: "Msc Chemistry",
      about: "I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students.",
     },
    { imageSrc: "../../Images/mahesh.jpg",
      name: "Mahesh Dongre",
      education: "Msc Chemistry",
      about: "I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students.",
     },
    { imageSrc: "../../Images/mahesh.jpg",
      name: "Mahesh Dongre",
      education: "Msc Chemistry",
      about: "I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students.",
     },
    { imageSrc: "../../Images/mahesh.jpg",
      name: "Mahesh Dongre",
      education: "Msc Chemistry",
      about: "I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students.",
     },
    { imageSrc: "../../Images/mahesh.jpg",
      name: "Mahesh Dongre",
      education: "Msc Chemistry",
      about: "I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students.",
     },
    { imageSrc: "../../Images/mahesh.jpg",
      name: "Mahesh Dongre",
      education: "Msc Chemistry",
      about: "I am a passionate and dedicated educator with over 8 years of teaching experience, specializing in Chemistry. Holding an MSc in Chemistry, I have a deep understanding of the subject and a commitment to simplifying complex concepts for students.",
     },
    ]

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
