import React from 'react'

export default function ReviewBox({imageSrc="", className="", name="xyz",student="",review=""}) {
  return (
    <div className={`w-72 h-72 ${className} bg-slate-100 rounded-md overflow-hidden `}>
        <div className="h-20 bg-custom-gradient"></div>
        <div className="w-28 h-28 mx-auto -mt-10 flex justify-center rounded-full overflow-hidden">
            <img src={imageSrc} alt="review" className="w-full h-full" ></img>
        </div>
        
        <h2 className="text-center">{name}</h2>
        {
            student?(<p className="mx-6">Student at D&G Academy</p>):(<p className="mx-6">Parent</p>)
        }
        <p className="mx-6">"{review}"</p>

    
        
    </div>
  )
}
