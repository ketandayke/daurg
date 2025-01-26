import React from 'react';

export default function About({ imageSrc = "" }) {
  return (
    <div
      className="bg-fixed w-full h-screen bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: "url('../../Images/dandg_about_back.avif')" }}
    >
      <div className=" mx-4 md:w-2/3 h-auto bg-black bg-opacity-50 text-white rounded-md sm:p-6">
        <h2 className="text-center my-2 font-bold text-2xl">
          D&G Academy: Since 2015
        </h2>
        <p className="text-lg">
          Founded in 2015 as a small coaching center with just 20 students, D&G Coaching has grown into a thriving educational institution committed to excellence. Today, we are proud to offer comprehensive coaching for all classes and a full-fledged school curriculum from Nursery to Class 10. Our mission is to make quality education accessible to all, especially in rural areas, where we not only provide learning opportunities but also create meaningful employment for talented teachers. At D&G Academy, we believe education is the key to transformation, and we are dedicated to nurturing young minds, fostering growth, and empowering communities to build a brighter future. Join us on our journey to make education the cornerstone of success for every child.
        </p>
      </div>
    </div>
  );
}
