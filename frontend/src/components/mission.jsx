import React from 'react';
import { MissionBox } from './index';

export default function Mission() {
  return (
    <div className="w-full min-h-min">
       <div
         className="w-full px-3 flex flex-col md:flex-row gap-5 items-center lg:gap-16 md:justify-center md:items-start "
       >
      <MissionBox
        className=" -mt-24 font-heading"
        imageSrc="/Images/mission1.jpg"
        content="Comprehensive Learning Approach"
      />
      <MissionBox
        className="font-heading"
        imageSrc="/Images/mission2.jpg"
        content="Experienced & Passionate Faculty"
      />
      <MissionBox
        className="font-heading"
        imageSrc="/Images/mission3.jpg"
        content="Proven Results & Excellence"
      />
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold font-heading text-center my-10">Our Mission : Empowering Minds Shaping Future</h2>
        <p className="text-lg font-medium font-body text-start mx-2 sm:mx-12 md:mx-24">At D&G Academy, we are dedicated to providing a nurturing and innovative learning environment that empowers students to achieve academic excellence With over 8 years of trusted experience, our mission is to foster holistic development and prepare students for success in both school and competitive exams.</p> 
      </div>
      
    </div>
    
   
  );
};
