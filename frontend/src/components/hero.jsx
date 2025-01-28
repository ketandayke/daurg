import React from 'react'
import {Button,Loader} from './index'
import {useLoginForm} from './loginFormContext';
import { useAuth } from './index';

export default function Hero() {
  const {setShowLoginForm} =useLoginForm();
  const{loading,setLoading}=useAuth();
  setLoading(true);
      console.log("this is loading",loading,<Loader/>)
      {loading&& <Loader/>}
  return (
    <div id="home" className="max-w-screen h-screen text-white" style={{
        background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 40%, rgba(0, 212, 255, 1) 100%) "
        // background:"linear-gradient(90deg,#A1DBF1 25%,#B5E2FA 60%,#C6E8F9 100%"
      }}
      
      >
        
        <div className="container w-full h-[80%] mx-auto flex px-5 pt-8 md:pt-12 items-center justify-center flex-col md:flex-row-reverse md:gap-10">
          <img className="lg:w-2/6 md:w-3/6 w-2/3 mb-10 object-cover object-center" alt="hero" src="../../Images/dandg_hero.png" style={{backgroundColor:"transparent"}}  />
          <div className="text-center lg:w-5/12 w-full">
            <h1 className="my-4 text-3xl md:text-5xl font-bold font-heading leading-tight">
              Empowering Minds, Shaping Futures
            </h1>
            <p className="text-lg md:text-2xl font-body sm:mb-8">
              Your Pathway to Excellence in Schooling and Coaching at D&G Academy
            </p>
            <div className="flex justify-center gap-16 mx-auto my-2">
              
              <Button type="" content="Explore"  className="min-w-min px-3 py-1 text-lg font-semibold rounded-lg bg-yellow-400 hover:bg-yellow-500" onClick={()=>document.getElementById("gallery").scrollIntoView({behavior:"smooth",offset:"-180px"}) }/>
              <Button type="" content="Register"  className="min-w-min px-3 py-1 text-lg font-semibold rounded-lg bg-yellow-400 hover:bg-yellow-500" onClick={()=>setShowLoginForm(true)} />
              
            </div>
          </div>
        </div>
      </div >
  );
}
