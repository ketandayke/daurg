import React from 'react';

export default function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-60 h-60 rounded-full border-4 border-t-blue-500 loader"></div>
    </div>
  );
}
