import React, { useState } from "react";
import {Button} from "./index.js";
import { useAuth } from "./index.js";
export default function UserProfile() {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const {user,setUser}=useAuth()

  const handleToggleProfile = () => {
    setShowUserProfile((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/logout", {
        method: "POST",
        credentials: "include", // Include cookies if applicable
      });
  
      if (response.ok) {
        setUser(null); // Clear the user state
        window.location.href = "/login"; // Redirect to the login page
      } else {
        const errorData = await response.json();
        console.error("Logout failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  
  // console.log("this is user in profile",user.data);
  return (
    <div className="relative">
      {/* Profile Picture */}
      <div
        className="w-[3.5rem] h-[3.5rem] sm:w-16 sm:h-16 rounded-full bg-cover cursor-pointer"
        onClick={handleToggleProfile}
      >
        <img
          src={user.image ? user.image : "../../Images/user_icon.png"}
          alt="User Profile"
          className="w-full h-full object-cover rounded-full"
          onError={(e) => (e.target.src = "user_icon.png")}
        />
      </div>

      {/* Profile Details */}
      {showUserProfile && (
        <div
          className="absolute top-14 -right-10 sm:right-0 w-64 h-64 bg-white shadow-lg rounded-lg p-4 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-1 right-2 text-4xl text-gray-600 hover:text-gray-800"
            onClick={handleToggleProfile}
          >
            &times;
          </button>
          <p className="text-lg font-semibold text-gray-600 my-2">
          <strong>Name:</strong> {user.fullName || "Unknown User"}
          </p>
          <p className=" text-gray-600 mb-1">
            <strong>Email:</strong> {user.email || "N/A"}
          </p>
          <p className=" text-gray-600">
            <strong>User Type:</strong> {user.userType || "N/A"}
          </p>
          <div className="flex gap-5 text-gray-600 my-2">
            <Button 
            type="button"
            content="Edit profile"
            className="px-2  py-1 font-semibold bg-blue-400 hover:bg-blue-500 rounded-lg"             onClick={()=>window.location.href("api/v1/users/profile")} />
            <Button  
              type="button" 
              content="Logout" 
              className="px-2  py-1 font-semibold bg-blue-400 hover:bg-blue-500 rounded-lg"               onClick={handleLogout}/>

          </div>
        </div>
      )}
    </div>
  );
}
