import React from 'react';

export default function Youtube() {
  const playlists = [
    {
      title: "Class 12 Mathematics",
      playlistURL: "https://www.youtube.com/watch?v=UHUNCMUcMPY&list=PLdqh0bQEwGq-WpmDNfXIvDwGoPzOV16f9",
      ImageSrc: "../../Images/playlist_maths_12.png",
      topics: ["Integration", "Differentiation", "Probability", "Vectors"],
    },
    {
      title: "Class 10 Mathematics",
      playlistURL: "https://www.youtube.com/watch?v=4zq4IksMqRo&list=PLdqh0bQEwGq83QtAPIOWO6AsdI4QR55rN",
      ImageSrc: "../../Images/playlist_maths_10.png",
      topics: ["Trigonometry", "Polynomials", "Statistics", "Quadratic Equations"],
    },
    {
      title: "Hindi Vyakaran",
      playlistURL: "https://www.youtube.com/watch?v=U3xkTC1IqIo&list=PLdqh0bQEwGq-N_I5vTlYPUP2XO9aqWebd",
      ImageSrc: "../../Images/playlist_hindi_vyakaran.png",
      topics: ["Sandhi", "Samas", "Alankar", "Visheshan"],
    },
    {
      title: "Class 9 Mathematics",
      playlistURL: "https://www.youtube.com/watch?v=hGPfVSyYcH4&list=PLdqh0bQEwGq9X1oDkDOL6_83CW3liOPs",
      ImageSrc: "../../Images/playlist_maths_9.png",
      topics: ["Linear Equations", "Area and Volume", "Probability", "Surface Areas"],
    },
    {
      title: "General Science",
      playlistURL: "https://www.youtube.com/watch?v=fj46gGe9cwI&list=PLdqh0bQEwGq9h94Mp3ndLXu9E0g2iZfB0",
      ImageSrc: "../../Images/playlist_gs.png",
      topics: ["Physics Basics", "Chemical Reactions", "Biology Fundamentals", "Environmental Science"],
    },
    {
      title: "Class 10 Science",
      playlistURL: "https://www.youtube.com/watch?v=92qariU1ggo&list=PLdqh0bQEwGq9MgB_4nE213nv4w74IjPQw",
      ImageSrc: "../../Images/playlist_science.png",
      topics: ["Light and Optics", "Electricity", "Acids and Bases", "Life Processes"],
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center font-heading my-8">
        Explore Educational YouTube Playlists
      </h2>

      <p className="text-lg font-body text-start font-medium my-8 mx-2 sm:mx-12 md:mx-24">
        Our curated playlists on YouTube cover a wide range of topics that help students grasp essential concepts and prepare effectively. Explore the playlists to find the perfect match for your academic needs.
      </p>

      {/* Playlist Section */}
      <div className="w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-8">
        {playlists.map((playlist, index) => (
          <div key={index} className="bg-gray-50 shadow-md rounded-lg overflow-hidden w-full max-w-sm">
            <a href={playlist.playlistURL} target="_blank" rel="noopener noreferrer">
              <img src={playlist.ImageSrc} alt={playlist.title} className="w-full h-56 object-cover rounded-t-lg" />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{playlist.title}</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {playlist.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Channel Links */}
      <div className="mt-12 mx-2 sm:mx-12 md:mx-24">
        <h2 className="text-xl font-heading font-semibold mb-4">
          Explore More on Our YouTube Channels
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-700">
          <li>
            <a
              href="https://www.youtube.com/@DandGAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              D&G Academy Main Channel
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@abondofsucces"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              D&G Academy Subject Tutorials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
