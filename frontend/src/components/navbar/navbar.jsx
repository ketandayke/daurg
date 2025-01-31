
import React, { useEffect, useState } from "react";
import { Button, Login, UserProfile } from "../index.js";
import { Link } from "react-scroll";
import { useLoginForm } from "../loginFormContext.jsx";
import { useAuth } from "../index.js";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { showLoginForm, setShowLoginForm } = useLoginForm();
  const { user, setUser } = useAuth();
  const navigate =useNavigate();

  // Lock/unlock body scroll when login form is shown
  useEffect(() => {
    document.body.style.overflow = showLoginForm ? "hidden" : "auto";
  }, [showLoginForm]);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure mobile menu resets on resizing to larger screens
  useEffect(() => {
    const handleResize = () => window.innerWidth > 768 && setIsMobile(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  return (
    <>
      <nav
        className={`w-full h-20 font-heading ${
          isScrolled ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-custom-gradient"
        } sticky top-0 z-40`}
      >
        <div className="flex justify-between items-center gap-4 mx-7 sm:mx-12 md:mx-24 ">
          <a href="#home">
            <img
              src="../../Images/dandg_logo.png"
              alt="D&G Logo"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </a>
          <div className="profile gap-2 lg:gap-8">
          <div className="ml-4">
          {user ? (
                <UserProfile />
              ) : (
                <Button
                  type="button"
                  content="Login/Signup"
                  className="text-[1.2rem] font-semibold bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded-xl lg:ml-0"
                  onClick={() => setShowLoginForm(true)}
                />
              )}
           </div>
          <ul
            className={` text-white font-bold gap-6 lg:gap-10 ${
              isMobile ? "nav-links-mobile" : "nav-links"
            }`}
          >
            <li>
              <Link to="home" smooth={true} duration={500} offset={-80} className="nav-link cursor-pointer"
               onClick={()=>navigate("/")} >
                Home
              </Link>
            </li>
            <li>
              <Link to="faculties" smooth={true} duration={500} offset={-80} className="nav-link cursor-pointer">
                Faculties
              </Link>
            </li>
            <li>
              <Link to="result" smooth={true} duration={500} offset={-80} className="nav-link cursor-pointer">
                Result
              </Link>
            </li>
            <li>
              <Link to="contactus" smooth={true} duration={500} offset={-80} className="nav-link cursor-pointer">
                Contact Us
              </Link>
            </li>
            
          </ul>

          
          <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            <div
              className={`hamburger w-10 h-6 relative flex flex-col justify-between z-50 ${
                isMobile ? "active" : ""
              }`}
            >
              <span className="w-full h-1 bg-white rounded-sm transition-all"></span>
              <span className="w-full h-1 bg-white rounded-sm transition-all"></span>
              <span className="w-full h-1 bg-white rounded-sm transition-all"></span>
            </div>
          </div>
          </div>
        </div>
      </nav>
      {showLoginForm && (
        <div className="fixed bg-opacity-50 flex bg-black inset-0 items-center justify-center z-[51]">
          <Login
            className="bg-white rounded-lg p-5"
            onClose={() => setShowLoginForm(false)}
          />
        </div>
      )}
    </>
  );
}
