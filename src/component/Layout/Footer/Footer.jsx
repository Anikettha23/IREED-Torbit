import React, { useRef, useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";

export default function Foot() {
  const [capVal, setCapVal] = useState("");
  const recaptcha = useRef();
  return (
    <div className="bg-blue-700 w-full h-auto">

      <div className="w-[90%] mx-auto py-5 flex flex-wrap justify-center">
        {/* Address Section */}
        <div className="w-full md:w-1/3 p-4">
          <img
            src="/assets/logo-darkq.png"
            alt="logo"
            className="h-12 mb-7"
          />
          <p className="text-white text-sm font-poppins mb-8 ml-5 w-[18rem]">
            Address: Office Suite 8 & 9, 3rd Floor, Ninex City Mart, Sohna
            Road, Near Radisson Hotel, Sector 49, Gurugram, Haryana 122018
          </p>
          <iframe
            title="IREED Location"
            src="https://www.google.com/maps/embed?..."
            width="270"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="ml-5"
          ></iframe>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/3 p-4 flex flex-col md:flex-row">
          <ul className="text-white text-sm space-y-2 mr-6">
            <li className="font-bold text-base">Company</li>
            <li><a href="/">About</a></li>
            <li><a href="/Parent/Career_Assessment">Courses</a></li>
            <li><a href="/schools">Mentors</a></li>
            <li><a href="/universities/ireed-for-universities">Student Testimonials</a></li>
            <li><a href="/universities/services">Registration</a></li>
            <li><a href="/events/for-students">SiteMap</a></li>
            <li><a href="/events/for-universities">Privacy Policy</a></li>
          </ul>
          <ul className="text-white text-sm space-y-2">
            <li className="font-bold text-base">Links</li>
            <li><a href="/about-us/who-we-are">Contact Us</a></li>
            <li><a href="/about-us/Our_Communities">Gallery</a></li>
            <li><a href="#">News</a></li>
            <li><a href="/about-us/Careers">FAQ's</a></li>
            <li><a href="/about-us/Contact_Us">Terms and Conditions</a></li>
            <li><a href="#">Return and Refund</a></li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-white font-bold text-lg mb-2">Contacts</h3>
          <h4 className="text-white text-sm mb-2">Enter your email address to register</h4>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md border"
            />
            <button className="bg-black text-white py-2 px-4 rounded-md">
              Subscribe ➝
            </button>
            <ReCAPTCHA
              sitekey="6LcjCKIpAAAAALiEXJWSDZaTt6PcbFUnML2j8jYZ"
              onChange={(val) => setCapVal(val)}
              ref={recaptcha}
              className=" "
            />
          </form>
          <div className="flex mt-6 space-x-4">
            <a href="https://x.com/ireed_academy" target="_blank">
              <div className="bg-white p-2 rounded-full hover:bg-blue-800">
                <FaFacebookF />
              </div>
            </a>
            <a href="https://x.com/ireed_academy" target="_blank">
              <div className="bg-white p-2 rounded-full hover:bg-sky-400">
                <FaSquareTwitter />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/ireed-academy/" target="_blank">
              <div className="bg-white p-2 rounded-full hover:bg-blue-600">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://www.youtube.com/@ireedacademy" target="_blank">
              <div className="bg-white p-2 rounded-full hover:bg-red-600">
                <BsYoutube />
              </div>
            </a>
            <a href="https://www.instagram.com/ireedacademy/" target="_blank">
              <div className="bg-white p-2 rounded-full hover:bg-pink-500">
                <FaInstagram />
              </div>
            </a>
          </div>

          <div className="flex mt-6">
            <a href="https://whatsapp.com/channel/0029VapNOtfD38CXcy3Yep27" target="_blank">
              <img
                src="/assets/ireedjob.jpg"
                alt="IREED Jobs"
                className="border-2 border-white w-36 h-36 mr-4"
              />
            </a>
            <div>
              <a href="https://play.google.com/store/apps/details?id=co.learnol.zznse" target="_blank">
                <img
                  src="/assets/googleplay.png"
                  alt="Google Play"
                  className="border-2 border-white w-48 h-16 mb-2"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=co.learnol.zznse" target="_blank">
                <img
                  src="/assets/appstore.png"
                  alt="App Store"
                  className="border-2 border-white w-48 h-16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 text-center py-2">
        <p className="text-blue-900 text-sm">
          Copyright 2025 <a href="/" className="font-semibold">IREED Academy (India) Private Limited</a> | All Rights Reserved
        </p>
      </div>
    </div>
  );
}