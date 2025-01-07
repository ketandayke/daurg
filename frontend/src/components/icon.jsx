import React from 'react'

export default function Icon({imageSrc="",iconName="", link="", className=""}) {
  return (
    <div className={` rounded-full overflow-hidden bg-blue-500 ${className}`}>
        <a href={link}>
          <img src={imageSrc} alt={iconName} className="w-full h-full bg-contain bg-center bg-transparent "></img>
        </a>
    </div>
  )
}
