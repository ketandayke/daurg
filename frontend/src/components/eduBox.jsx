import React from "react";

export default function EduBox({
  playlistURL = "",
  ImageSrc = "",
  className = "",
}) {
  return (
    <div className={`edu-box w-72 h-72 relative ${className}`}>
      <a href={playlistURL} className="edu-link">
        <img
          src={ImageSrc}
          alt="resource"
          className="w-full h-full rounded-md shadow-lg hover:shadow-blue-500"
        />
      </a>
    </div>
  );
}
