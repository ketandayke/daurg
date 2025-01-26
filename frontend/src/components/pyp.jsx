import React from 'react';

export default function PYP() {
  const links = [
    {
      title: "MP Board Class 10 Previous Year Papers",
      url: "https://mpbse.nic.in",
    },
    {
      title: "MP Board Class 12 Previous Year Papers",
      url: "https://mpbse.nic.in",
    },
    {
      title: "MP Board Official Website for Resources",
      url: "https://mpbse.nic.in",
    },
  ];

  return (
    <div className="w-full px-6 md:px-24 py-8 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-6">
        Previous Year Questions (PYP)
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        Access previous year question papers for MP Board exams. These resources 
        are essential for students preparing for their Class 10 and Class 12 
        examinations. Click on the links below to visit the official MP Board 
        website and explore the available papers.
      </p>

      {/* Links Section */}
      <div className="space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-md rounded-lg px-6 py-4 hover:shadow-lg hover:bg-gray-50 transition"
          >
            <h2 className="text-lg font-semibold text-blue-600">
              {link.title}
            </h2>
            <p className="text-gray-600">Visit {link.url}</p>
          </a>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Stay tuned! We are working on adding downloadable question papers and 
        solutions directly on this page.
      </p>
    </div>
  );
}
