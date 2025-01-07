import React from 'react'
import EduBox from './eduBox'

export default function EduResource() {
  return (
    <div className="bg-white w-full min-h-screen">
      <h2 className="text-2xl font-semibold text-center font-heading my-8">Explore Educational Resources</h2>
      <p className="text-lg font-body text-start font-medium my-8 mx-2 sm:mx-12 md:mx-24">At D&G Academy, we believe in giving students every possible resource to succeed. Our carefully curated content is designed to support students at every stage of their academic journey.</p>
      <div className="w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-5 ">
        <EduBox playlistURL="https://www.youtube.com/watch?v=UHUNCMUcMPY&list=PLdqh0bQEwGq-WpmDNfXIvDwGoPzOV16f9"
                ImageSrc="../../Images/playlist_maths_12.png"
                className="" 
                />
        <EduBox playlistURL="https://www.youtube.com/watch?v=4zq4IksMqRo&list=PLdqh0bQEwGq83QtAPIOWO6AsdI4QR55rN"
                ImageSrc="../../Images/playlist_maths_10.png"
                className="" 
                />
        <EduBox playlistURL="https://www.youtube.com/watch?v=U3xkTC1IqIo&list=PLdqh0bQEwGq-N_I5vTlYPUP2XO9aqWebd"
                ImageSrc="../../Images/playlist_hindi_vyakaran.png"
                className="" 
                />
        <EduBox playlistURL="https://www.youtube.com/watch?v=hGPfVSyYcH4&list=PLdqh0bQEwGq9X1oDkDOL6_83CW3liOPs"
                ImageSrc="../../Images/playlist_maths_9.png"
                className="" 
                />
        <EduBox playlistURL="https://www.youtube.com/watch?v=fj46gGe9cwI&list=PLdqh0bQEwGq9h94Mp3ndLXu9E0g2iZfB0"
                ImageSrc="../../Images/playlist_gs.png"
                className="" 
                />
        <EduBox playlistURL="https://www.youtube.com/watch?v=92qariU1ggo&list=PLdqh0bQEwGq9MgB_4nE213nv4w74IjPQw"
                ImageSrc="../../Images/playlist_science.png"
                className="" 
                />

      </div>
      <div className=" mt-6 ml-2 sm:ml-24 ">
        <h2 className="text-xl font-heading font-semibold  ">Download previous years question papers</h2>
         <div><a href="#" className="ml-4 font-body font-medium hover:underline">class 10th papers</a></div>       
         <div><a href="#" className="ml-4 font-body font-medium hover:underline ">class 12th papers</a></div>      
        
      </div>
     
    </div>
  )
}
