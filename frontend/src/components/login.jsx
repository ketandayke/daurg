import React, { useState } from 'react'
import {Button} from './index'
import { useToast } from './toastContext';
export default function Login({className="",onClose}) {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {showToast}=useToast();

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);

  }

  const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
  }

  const submitLoginForm= async(e)=>{
    try {
      console.log("submit button clicked");
      if(!email||!password){
        return showToast("All fields are required ","error");
      }
      const responce=await fetch('api/login',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({email,password}),
      });
      const data=await responce.json();
      if(responce.ok){
        // alert("login successfull");
        showToast("Login successfull","success");
        onClose();
      }else{
        // alert(data.message||"login failed");
        showToast(data.message||"Login failed","error");
      }
    } catch (error) {
      console.error("Error",error);
      // alert("error occured, please try again later");
      showToast("An error occured ,please try again later","error");  
    }

  }
  return (
    <div className={`w-80 md:w-96 h-96 p-8 bg-slate-200 text-black rounded-lg relative ${className}`}>
       <Button type="" 
               content="X" 
               className="absolute top-2 right-8 hover:text-gray-500 text-black text-3xl"
               onClick={onClose}
                />
        
        <h2 className="text-2xl font-bold mb-4 text-center my-2">Login</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            submitLoginForm();
            
            }} className="gap-8 flex flex-col">
            <div>
              <label htmlFor="input-email"className="text-lg font-semibold"  >Email</label>
              <input  id="input-email"
                      type="email" 
                      placeholder="email"
                      name="email" 
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full bg-slate-300 rounded-sm px-2 py-1 outline-none" >
              
              </input>
            </div>

            <div>
              <label htmlFor="input-password"className="text-lg font-semibold" >Password</label>
              <input id="input-password"
                     type="password"
                     placeholder="password"
                     name="password" 
                     value={password}
                     onChange={handlePasswordChange} 
                     className="w-full bg-slate-300 rounded-sm outline-none px-2 py-1 ">

              </input>
            </div>

            <Button type="submit"
                    content="Sign in"
                    className="px-4 text-lg py-2 font-semibold bg-blue-400 hover:bg-blue-500 rounded-lg" 
                    onClick={submitLoginForm}
                     />

        </form>
    </div>
  );
};
