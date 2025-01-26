
import React, { useState, useEffect } from "react";
import { useAuth } from "./authContext";
import { useToast } from './toastContext';
import { useNavigate } from "react-router-dom";
import {Loader} from "./index";
export default function EditProfile() {
  const { user, setUser,fetchCurrentUser,loading,setLoading } = useAuth();
  const {showToast} = useToast();
  const api_base_url=process.env.REACT_APP_API_URL

  const [formData, setFormData] = useState({
    image: null, // For file input, use null instead of an empty string
    fullName: "",
    email: "",
    password: "",
    userType: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        image: null,
        fullName: user.fullName || "",
        email: user.email || "",
        password: "",
        userType: user.userType || "",
      });
    }
  }, [user]);
 
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, [name]: files[0] || null })); // Handle file input
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true);
     {loading&& <Loader/>}
     // FormData for handling file upload
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("userType", formData.userType);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await fetch(`${api_base_url}/users/profile`, {
        method: "PUT",
        credentials: "include",
        body: data, // FormData automatically sets the content-type
      });

      const result = await response.json();
      console.log("this is result of edit profile route",result);
      if (response.ok) {
        setUser(result);
        showToast("User details Updated Successfully","success");
        setLoading(false);
        await fetchCurrentUser();
        console.log("User details updated successfully");
        // navigate("/");
        
      } else {
        console.error("Failed to update profile:", result.message);
        showToast("User details failed to update","error");
        setLoading(false);

      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setLoading(false);
    }
  };

  if (!user) {
    return <Loader/>
  }

  return (
    <div className="max-w-md  mx-auto pt-8 px-4"
         style={{height:"calc(100vh - 80px)"}}>
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium text-gray-600">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="w-full px-4 py-2 border rounded bg-gray-200"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-semibold">User Type</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
            className="rounded-sm outline-none px-2 py-1 w-full"
            required
          >
            <option value="" disabled>
              Select user type
            </option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

