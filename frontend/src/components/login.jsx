import React, { useState } from 'react'
import {Button,Loader} from './index'
import { useToast } from './toastContext';
import { useLoginForm } from './loginFormContext';
import { useAuth } from './index';
export default function Login({className="",onClose}) {

  
  const {showToast}=useToast();
  const {setShowLoginForm} =useLoginForm();
  const [showForm1,setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false)
  const {user,loading,setUser,setLoading} =useAuth();
  const api_base_url=import.meta.env.VITE_APP_API_URL

  const [formData,setFormData] = useState({
    fullName:"",
    email:"",
    password:"",
    userType:""
  });

  const handleFormSubmit =(e)=>{
    const{name,value}=e.target;
    setFormData((prev)=>({...prev,[name]:value}));

  }
 
  
  const submitSignUpForm= async(e)=>{
    try {
      // setLoading(true);
      // console.log("this is loading",loading,<Loader/>)
      // {loading&& <Loader/>}
      
      const {fullName,email,password,userType}=formData;
      console.log("submit signup button clicked");
      if(!fullName||!email||!password||!userType){
        return showToast("All fields are required ","error");
      }
      const responce=await fetch(`${api_base_url}/users/register`,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({fullName,email,password,userType}),
      });
      const data=await responce.json();
      // console.log("this id data",data);
      if(responce.ok){
        showToast("signup successfull","success");
        onClose();
        // setLoading(false);
        setShowLoginForm(true);
        setShowForm1(false);
        setShowForm2(true);

      }else{
        showToast(data.message||"user already exist","error");
        // setLoading(false);
      }
    } catch (error) {
      console.log("Error",error);
      showToast("An error occured ,please try again later","error");  
      setLoading(false);
    }

  }


  const submitLoginForm = async (e) => {
    try {
      setLoading(true);
      {loading&& <Loader/>}
      const { email, password } = formData;
  
      if (!email || !password) {
        return showToast("All fields are required", "error");
      }
  
      const response = await fetch(`${api_base_url}/users/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include", // Include cookies with the request
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("this is data",data);
      if (response.ok) {
        const user = data?.data?.user;
        showToast("Login successful", "success");
        setUser(user); // Save user in context
        // console.log("this is user",user);
        setLoading(false);
        onClose(); // Close the login modal
        
      } else {
        showToast(data.message || "Something went wrong");
        setLoading(false);
      }
    } catch (error) {
      showToast("An error occurred, please try again later", "error");
      setLoading(false);
    }
  };
  
  
  return (
    <div className={`w-[18rem] sm:w-80 md:w-96 h-[32rem] p-4 sm:p-8 bg-slate-200 text-black rounded-lg relative ${className}`}>
      <div className="flex gap-10 mb-8 relative">
        <Button type="" 
                content="SignUp" 
                className={`hover:text-gray-500 text-black font-semibold text-2xl  ${showForm1?"form-link":""} `}
                onClick={()=>{
                  if(!showForm1){
                    setShowForm1(true);
                    setShowForm2(false);
                  }
                 }}
                  />
        <Button type="" 
                content="Login" 
                className={`hover:text-gray-500 text-black font-semibold text-2xl ${showForm2?"form-link":""}`}
                onClick={()=>{
                  if(!showForm2)
                  setShowForm1(false);
                  setShowForm2(true)}}
                  />
        </div> 
       <Button type="" 
               content="X" 
               className="absolute top-2 right-8 hover:text-gray-500 text-black text-3xl"
               onClick={onClose}
                />
        
        {/* <h2 className="text-2xl font-bold mb-4 text-center my-2">Sign Up</h2> */}
        {
          showForm1 && (
            <form onSubmit={(e)=>{
              e.preventDefault();
              submitSignUpForm();
              
              }} className="gap-5 flex flex-col">
              <div>
                <label htmlFor="input-email"className="text-lg font-semibold"  >Full Name</label>
                <input  id="input-fullName"
                        type="text" 
                        placeholder="fullName"
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleFormSubmit}
                        // className="w-full bg-slate-300 rounded-sm px-2 py-1 outline-none" 
                        className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                        >
                
                </input>
              </div>
              <div>
                <label htmlFor="input-email"className="text-lg font-semibold"  >Email</label>
                <input  id="input-email"
                        type="email" 
                        placeholder="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleFormSubmit}
                        // className="w-full bg-slate-300 rounded-sm px-2 py-1 outline-none"
                        className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                         >
                
                </input>
              </div>
  
              <div>
                <label htmlFor="input-password"className="text-lg font-semibold" >Password</label>
                <input id="input-password"
                       type="password"
                       placeholder="password"
                       name="password" 
                       value={formData.password}
                       onChange={handleFormSubmit} 
                      //  className="w-full bg-slate-300 rounded-sm outline-none px-2 py-1 "
                      className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                       >
  
                </input>
              </div>
              <div>
                <label htmlFor="input-password"className="text-lg font-semibold" >Select</label>
                <select name="userType"
                        onChange={handleFormSubmit}
                        value={formData.userType}
                        // className="rounded-sm outline-none px-2 py-1"
                        className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  >
                  <option value="">select user type</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
              </div>
  
              <Button type="submit"
                      content="Sign Up"
                      className="px-4 text-lg py-2 font-semibold bg-blue-400 hover:bg-blue-500 rounded-lg" 
                       />
  
          </form>
          )
            }

          {showForm2 && (

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
                        value={formData.email}
                        onChange={handleFormSubmit}
                        // className="w-full bg-slate-300 rounded-sm px-2 py-1 outline-none"
                        className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                         >
                
                </input>
              </div>
  
              <div>
                <label htmlFor="input-password"className="text-lg font-semibold" >Password</label>
                <input id="input-password"
                       type="password"
                       placeholder="password"
                       name="password" 
                       value={formData.password}
                       onChange={handleFormSubmit} 
                      //  className="w-full bg-slate-300 rounded-sm outline-none px-2 py-1 "
                      className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                       >
  
                </input>
              </div>
              
  
              <Button type="submit"
                      content="Login"
                      className="px-4 text-lg py-2 font-semibold bg-blue-400 hover:bg-blue-500 rounded-lg" 
                       />
  
          </form>

          )
        }
        

       
    </div>
  );
};
