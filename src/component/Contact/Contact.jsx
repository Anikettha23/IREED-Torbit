import React from "react";

export default function Contact() {
  return (
    <>
      <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-white text-4xl font-bold z-10"> Contact Us </h1>
      </div>
      </div>
    <div>
      {/* Spacer */}
      {/* <div className="w-full bg-[whitesmoke]"></div> */}

      {/* Header Text */}
      {/* <div className="h-[250px] w-full bg-[whitesmoke] text-center text-[#2A3290] text-[50px] mt-[50px] flex items-center justify-center font-spartan">
        <h1 className="text-[50px] m-0">Contact Us</h1>
      </div> */}

      {/* Main Container */}
      <div className="flex flex-wrap justify-between gap-0 px-[132px] py-[95px] bg-white box-border max-[992px]:flex-col max-[992px]:px-[30px] max-[576px]:px-[15px]">
        {/* Left Section */}
        <div className="flex-1 min-w-[300px] max-[992px]:w-full">
          <h1 className="text-[32px] text-[#2a3290] mb-[20px] font-spartan">
            We're Always Eager to <br /> Hear From You!
          </h1>

          {/* Contact Info Blocks */}
          <div className="mb-[20px]">
            <h2 className="text-[18px] font-semibold text-[#181818] font-spartan">Campus Address</h2>
            <p className="text-[15px] text-black font-poppins">
              D.P.G. Degree College 70A, Delhi-Jaipur Expy,<br />Block A, Sector 34<br />Gurugram, Haryana 122001
            </p>
          </div>

          <div className="mb-[20px]">
            <h2 className="text-[18px] font-semibold text-[#181818] font-spartan">Gurgaon Address</h2>
            <p className="text-[15px] text-black font-poppins">
              Office Suite 8 & 9, 3rd Floor, Ninex City Mart,<br />Sohna Road, Near Radisson Hotel, Sector 49,<br />Gurugram - 122018 Haryana
            </p>
          </div>

          <div className="mb-[20px]">
            <h2 className="text-[18px] font-semibold text-[#181818] font-spartan">Ranchi Address</h2>
            <p className="text-[15px] text-black font-poppins">
              Unit No. I-2, 2nd Floor, Ashish Plaza Phase-2,<br />Lalpur, Ranchi - 834001 Jharkhand
            </p>
          </div>

          <div className="mb-[20px]">
            <h2 className="text-[18px] font-semibold text-[#181818] font-spartan">Email</h2>
            <p className="text-[15px] text-black font-poppins">info@ireedindia.com</p>
          </div>

          <div className="mb-[20px]">
            <h2 className="text-[18px] font-semibold text-[#181818] font-spartan">Phone</h2>
            <p className="text-[15px] text-black font-poppins">+91 90906 04013</p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 min-w-[300px] mt-0 max-[992px]:mt-[155px] max-[992px]:w-full">
          <div className="bg-[#f9f9f9] p-8 rounded-[10px] shadow-md hover:shadow-[#2a3290]">
            <h2 className="mb-2 text-[#2a3290] font-spartan">Get in touch</h2>
            <p className="mb-5 font-poppins">Fill out this form for booking a consultant advising session.</p>
            <form>
              <input type="text" placeholder="Your name*" required className="w-full p-3 mb-4 text-sm border border-gray-300 rounded-md font-poppins" />
              <input type="email" placeholder="Enter your email*" required className="w-full p-3 mb-4 text-sm border border-gray-300 rounded-md font-poppins" />
              <input type="tel" placeholder="Phone number*" required className="w-full p-3 mb-4 text-sm border border-gray-300 rounded-md font-poppins" />
              <textarea placeholder="Your Query" rows="4" className="w-full p-3 mb-4 text-sm border border-gray-300 rounded-md font-poppins"></textarea>
              <button type="submit" className="w-full p-3 bg-[#2a3290] text-white rounded-md text-base font-semibold hover:bg-[#162e6c]">
                Submit query →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}