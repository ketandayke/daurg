import React from 'react'

export default function CarouselBox({imageSrc="",link="", content="",className=""}) {
  return (
    <>
    <div className={`w-48 h-32 rounded-lg px-2 bg-slate-200 ${className}`}>
        <a href={link}>
            <div >
                <img src={imageSrc} alt={content} className="w-20 h-20 mx-auto rounded-md" >
                </img>
                <h2 className="text-center font-body font-medium">{content}</h2>
            </div>
        </a>

    </div>
      
    </>
  )
}
