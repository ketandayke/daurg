import React, { useState } from "react";
import { Button } from "./index.js";
import { useAuth } from "./index.js";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const { user, setUser } = useAuth();
  const api_base_url=import.meta.env.VITE_APP_API_URL
  const navigate = useNavigate(); // Hook for navigation

  
  const handleToggleProfile = () => {
    setShowUserProfile((prev) => !prev);
    // console.log("this is user to be updated",user);
    

    // setUser(user);
  };
  // console.log("this is user currently",user);

  const handleLogout = async () => {
    try {
        const response = await fetch(`${api_base_url}/users/logout`, {
            method: "POST",
            credentials: "include", // Send cookies with the request
        });

        if (response.ok) {
            setUser(null); // Clear React state
            window.location.reload(); // Force a reload to clear auth state
        } else {
            const errorData = await response.json();
            console.error("Logout failed:", errorData.message);
        }
    } catch (error) {
        console.error("Error during logout:", error);
    }
};


  return (
    <div className="relative">
      {/* Profile Picture */}
      <div
        className="w-[3.5rem] h-[3.5rem] sm:w-16 sm:h-16 rounded-full border-red-200 bg-cover bg-center cursor-pointer"
        onClick={handleToggleProfile}
      >
        <img
          src={"../../Images/user_icon.png"}
          alt="User Profile"
          className="w-full h-full object-cover rounded-full"
          onError={(e) => (e.target.src = "user_icon.png")}
        />
      </div>

      {/* Profile Details */}
      {showUserProfile && (
        <div
          className="absolute top-14 -right-10 sm:right-0 w-64 h-72 bg-white shadow-lg rounded-lg p-4 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-1 right-2 text-4xl text-gray-600 hover:text-gray-800"
            onClick={handleToggleProfile}
          >
            &times;
          </button>
          <div className="flex flex-col gap-3">
            <div
              className="w-[3.5rem] h-[3.5rem] sm:w-16 sm:h-16 rounded-full mx-auto border-red-200 bg-cover bg-center cursor-pointer"
              onClick={handleToggleProfile}
            >
                  <img
                    src={user?.image||"../../Images/user_icon.png"}
                    alt="User Profile"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => (e.target.src = "user_icon.png")}
                  />
            </div>

            <p className="text-lg text-gray-600 ">
              <strong>Name:</strong> {user?.fullName || "Unknown User"}
              {/* <strong>Name:</strong> {name|| "Unknown User"} */}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Email:</strong> {user?.email || "N/A"}
              {/* <strong>Email:</strong> {email|| "N/A"} */}
            </p>
            <p className="text-gray-600">
              <strong>User Type:</strong> {user?.userType || "N/A"}
              {/* <strong>User Type:</strong> {ut || "N/A"} */}
            </p>
          </div>

          <div className="flex gap-5 text-gray-600 my-2">
            <Button
              type="button"
              content="Edit profile"
              className="px-2 py-1 font-semibold bg-blue-400 hover:bg-blue-500 rounded-lg"
              onClick={() => {navigate("/edit-profile");handleToggleProfile}} // Navigate to edit profile page
            />
            <Button
              type="button"
              content="Logout"
              className="px-2 py-1 font-semibold bg-blue-400 hover:bg-blue-500 rounded-lg"
              onClick={handleLogout} // Logout logic
            />
          </div>
        </div>
      )}
    </div>
  );
}
