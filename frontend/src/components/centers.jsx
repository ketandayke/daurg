import React from 'react';

export default function Centers() {
  return (
    <div
      className="w-full flex flex-col pt-8 items-center bg-gray-100"
      style={{ height: "calc(100vh - 5rem)" }}
    >
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center mb-4">
        D&G Academy Centers
      </h1>

      {/* Center Description */}
      <p className="text-lg text-gray-700 text-center max-w-xl px-4">
        Currently, we are operating from our primary center located in Jambara. 
        We are committed to providing excellent education and fostering growth 
        for all our students.
      </p>

      {/* Address Section */}
      <div className="w-full h-2/3 flex flex-col sm:flex-row justify-center items-center gap-8 mt-6">
      <div className="bg-white shadow-md rounded-lg p-4 w-60 h-40">
        <h2 className="text-xl font-semibold text-gray-800">Center Address</h2>
        <address className="mt-2 text-gray-600 italic">
          D&G Academy<br />
          Behind Ram Mandir, Jambara<br />
          Contact: +91-8305868010
        </address>
      </div>

      
      <div className="w-[90%] h-full sm:w-1/2 flex justify-center ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473706.24678898416!2d77.61881538906253!3d21.9410839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5ec46f7b0b8af%3A0xef5e4ac460e113a1!2zRCZHIOCkj-CkleClh-CkoeCkruClgA!5e0!3m2!1sen!2sin!4v1737698395615!5m2!1sen!2sin" width="500" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      title="D&G Academy Location"
      className="w-full h-full"
      ></iframe>
      </div>
      </div>
      
    </div>
  );
}

// import React from 'react';

// export default function Centers() {
//   return (
//     <div
//       className="w-full flex flex-col pt-8 items-center bg-gray-100"
//       style={{ height: "calc(100vh - 5rem)" }}
//     >
//       {/* Heading */}
//       <h1 className="text-2xl font-bold text-center mb-4">
//         D&G Academy Centers
//       </h1>

//       {/* Center Description */}
//       <p className="text-lg text-gray-700 text-center max-w-xl px-4">
//         Currently, we are operating from our primary center located in Jambara. 
//         We are committed to providing excellent education and fostering growth 
//         for all our students.
//       </p>

//       {/* Address Section */}
//       <div className="bg-white shadow-md rounded-lg p-4 mt-6 max-w-sm">
//         <h2 className="text-xl font-semibold text-gray-800">Center Address</h2>
//         <address className="mt-2 text-gray-600 italic">
//           D&G Academy<br />
//           Behind Ram Mandir, Jambara<br />
//           Contact: +91-8305868010
//         </address>
//       </div>

//       {/* Embedded Google Map */}
//       <div className="mt-6 w-full flex justify-center">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473706.24678898416!2d77.61881538906253!3d21.9410839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5ec46f7b0b8af%3A0xef5e4ac460e113a1!2zRCZHIOCkj-CkleClh-CkoeCkruClgA!5e0!3m2!1sen!2sin!4v1737698395615!5m2!1sen!2sin"
//           width="400"
//           height="300"
//           style={{ border: "0" }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="D&G Academy Location"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

