import React from "react";
import { Icon, CarouselBox, InfiniteSlider, Button } from "./index";
import { useLoginForm } from "./loginFormContext";

export default function Footer() {
  const { setShowLoginForm } = useLoginForm();

  return (
    <div id="contactus" className="w-full max-h-screen ">
      <h2 className="font-heading font-semibold text-2xl text-center my-8">
        Get in Touch with D&G Academy
      </h2>
      <div className="flex gap-4 md:gap-8 justify-center">
        <Icon
          imageSrc="../../Images/fb_icon.jpg"
          iconName="facebook"
          link="https://www.facebook.com/DandGacademyJambada/"
          className="w-12 h-12  sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
        <Icon
          imageSrc="../../Images/insta_icon.jpg"
          iconName="instagram"
          link="https://www.instagram.com/dandgacademy/"
          className=" w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
        <Icon
          imageSrc="../../Images/linkedin_icon.webp"
          iconName="linkedin"
          link=""
          className=" w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
        <Icon
          imageSrc="../../Images/whatsapp_icon.jpg"
          iconName="whatsapp"
          link="https://whatsapp.com/channel/0029VaDr1xRFHWq5hwyAmQ1B"
          className=" w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
        <Icon
          imageSrc="../../Images/x_icon.png"
          iconName="twitter"
          link="https://whatsapp.com/channel/0029VaDr1xRFHWq5hwyAmQ1B"
          className=" w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
      </div>
      <InfiniteSlider />
      <div className="flex items-center justify-center">
        <Button
          type="button"
          content="Get Started"
          className="text-[1.2rem] font-semibold bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded-xl   lg:ml-0"
          onClick={() => setShowLoginForm(true)}
        />
      </div>


      <div className="px-2 sm:px-6 md:px-12 lg:px-20 py-2 mt-9 bg-blue-500 flex flex-col  justify-center md:flex-row text-white">
        <div className="md:w-1/2 flex md:flex-col gap-2 ">
          <div className="flex flex-col md:flex-row items-center  gap-2">
            <img
              src="../../Images/dandg_logo.png"
              alt="logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
            ></img>
            <h2 className="font-heading text-center font-semibold text-sm ">D&G Academy</h2>
          </div>
          <div className="text-sm md:text-base  ">
              <p className="font-body font-medium">Contact Number: 8305868010</p>
              <p className="font-body font-medium">Email:d&gacademy@gmail.com</p>
              <p className="font-body font-medium">
                Address:D&G academy behind ram mandir Jambada
              </p>

          </div>
          
        </div>
        <div className="flex justify-between gap-2 md:gap-10 md:w-1/2 font-medium font-body text-white">
          {/* Academy Section */}
          <ul className="gap-3">
            <li className="md:text-lg  font-semibold">Academy</li>
            <li>
              <a
                href="/about-us"
                className="hover:text-gray-300 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-gray-300 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/centers"
                className="hover:text-gray-300 transition-colors"
              >
                Centers
              </a>
            </li>
          </ul>

          {/* Terms & Conditions Section */}
          <ul>
            <li className="md:text-lg font-semibold">T&C</li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy-Policy
              </a>
            </li>
            <li>
              <a
                href="/ownership"
                className="hover:text-gray-300 transition-colors"
              >
                Ownership
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-300 transition-colors">
                FAQ's
              </a>
            </li>
          </ul>

          {/* Support and Resources Section */}
          <ul>
            <li className="md:text-lg font-semibold">Support And Resources</li>
            <li>
              <a
                href="/previous-year-papers"
                className="hover:text-gray-300 transition-colors"
              >
                Previous Year Papers
              </a>
            </li>
            <li>
              <a
                href="/youtube-playlist"
                className="hover:text-gray-300 transition-colors"
              >
                YouTube Playlist
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-gray-300 transition-colors "
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-gray-300 transition-colors"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-12 bg-custom-gradient flex items-center justify-center text-white">
            <h2 className="text-center text-body text-semibold">copyright @ D&G academy 2025</h2>

      </div>
    </div>
  );
}
