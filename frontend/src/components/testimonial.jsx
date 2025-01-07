import React from 'react'
import {ReviewBox,Button} from './index'


export default function Testimonial() {
  return (
    <div className="w-full relative h-[24rem]">
      <h2 className="font-heading text-2xl font-semibold text-center my-8">What Our Students and Parents Say</h2>
      <div className="w-[90%] grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mx-auto ">
       <ReviewBox 
            imageSrc="../../Images/user_icon.png"
            className=""
            name="ketan dayke"
            student="true"
            review="This is best coaching ,best teachers and unique and interesting teaching techniqe" 
            />
       <ReviewBox 
            imageSrc="../../Images/user_icon.png"
            className="hidden md:block"
            name="komal dongre"
            student="true"
            review="This is best coaching ,best teachers and unique and interesting teaching techniqe" 
            />
       <ReviewBox 
            imageSrc="../../Images/user_icon.png"
            className="hidden lg:block"
            name="devendra dongre"
            student="true"
            review="This is best coaching ,best teachers and unique and interesting teaching techniqe" 
            />
         
      </div>
      {/* <Button type="button" content="<" className="absolute text-5xl font-semibold left-0 md:left-5 lg:left-10  top-[50%] hover:shadow-lg hover:shadow-blue-500 " onClick={()=>setIndex(index-1)} />
      <Button type="button" content=">" className="absolute text-5xl font-semibold right-0 md:right-5 top-[50%] hover:shadow-lg hover:shadow-blue-500" onClick={()=>setIndex(index+1)} /> */}

    </div>
  )
}
