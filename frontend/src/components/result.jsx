import React,{useEffect, useState} from 'react'
import {Button} from './index'
import {motion} from 'framer-motion'
export default function Result() {
  const urlArray =[
     '../../Images/results_24.png',
     '../../Images/mission1.jpg'
  ]
  const [index,setIndex]= useState(0);
  const [url,setUrl]= useState(urlArray[index])
  useEffect(()=>{
    if(index>1){
      setIndex(0);
    }
    else if(index<0){
      setIndex(1);
    }
    const changeImage=()=>{
      setUrl(urlArray[index]);

    }
    changeImage();
  },[index])
  return (
    <motion.div id="result"
      className="w-full min-h-min md:h-screen"
      initial={{scale:0.8,opacity:0}}
      whileInView={{scale:1,opacity:1}}
      transition={{duration:0.8,ease:"easeInOut"}}
      viewport={{once:false,amount:0.1}}
      >
       <h2 className="font-heading font-semibold text-2xl text-center my-8">Our Students’ Success: Results That Speak for Themselves</h2>
       <div className="bg-red-400 w-full h-2/3 md:w-[80%] md:h-[80%] bg-contain mx-auto relative  ">
         <img src={url} alt="result" className="w-full h-full"></img>
         <Button type="button" content="<" className="absolute text-5xl font-semibold left-0 md:-left-10 lg:-left-16 top-[50%] hover:shadow-lg hover:shadow-blue-500 " onClick={()=>setIndex(index-1)} />
         <Button type="button" content=">" className="absolute text-5xl font-semibold right-0 md:-right-10 lg:-right-16 top-[50%] hover:shadow-lg hover:shadow-blue-500" onClick={()=>setIndex(index+1)} />

       </div>

    </motion.div>
  )
}
