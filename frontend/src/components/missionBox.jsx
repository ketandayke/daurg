import React from 'react'

export default function MissionBox({className="",imageSrc="",content=""}) {
  return (
    <div className={`w-72 h-64 bg-slate-50 rounded-md shadow-sm hover:shadow-xl hover:shadow-blue-500 flex flex-col items-center px-6 py-4 gap-4 md:-mt-44 ${className}`}>
        <div className="rounded-full bg-blue-500 w-24 h-24 overflow-hidden "><img src={`${imageSrc}`}      alt="mission" ></img></div>
        <h2 className="text-2xl text-start ml-4 font-semibold">{content}</h2>
    </div>
  );
};
