import React from 'react';

export default function Ownership() {
  return (
    <div className="w-full px-6 md:px-24 py-8 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-6">Ownership & Founding Members</h1>

      {/* Introduction Section */}
      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="text-lg text-center mb-4">
          At <strong>D&G Academy</strong>, our journey began with a vision to provide quality education to students in even the most remote areas. The foundation of this institution is built on the unwavering dedication and passion of our founding members, Mahesh Dongre and Umesh Geete.
        </p>
      </div>

      {/* Founding Members Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8">
        {/* Mahesh Dongre */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-1/2">
          <h2 className="text-xl font-medium text-gray-800 mb-2">Mahesh Dongre</h2>
          <p className="text-gray-600 leading-relaxed">
            Mahesh Dongre, a visionary educator and mentor, played a pivotal role in the inception of D&G Academy. His passion for empowering students through education has been the driving force behind the academy's growth. With years of experience in the field of teaching, he believes in fostering a supportive and engaging learning environment for all students.
          </p>
        </div>

        {/* Umesh Geete */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-1/2">
          <h2 className="text-xl font-medium text-gray-800 mb-2">Umesh Geete</h2>
          <p className="text-gray-600 leading-relaxed">
            Umesh Geete, a dynamic educator and co-founder, brings his expertise and dedication to shaping the future of D&G Academy. With a strong commitment to making education accessible to rural communities, he has worked tirelessly to ensure the academy's success and its mission of transforming lives through learning.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Together, Mahesh Dongre and Umesh Geete have laid the foundation of an institution that not only provides education but also empowers communities. Their commitment to excellence continues to inspire students and educators alike, making D&G Academy a beacon of hope and learning.
        </p>
      </div>
    </div>
  );
}
