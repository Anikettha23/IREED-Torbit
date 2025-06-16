import React from "react";
import {FaEye,FaBullseye,FaFacebookF,FaTwitter,FaYoutube,FaInstagram,FaLinkedinIn,} from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-white text-4xl font-bold z-10">About Us</h1>
      </div>

      {/* What is IREED Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-blue-700">What is </span>
            <span className="text-gray-800">IREED</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Real Estate Strategy Partner in Delhi NCR.
            <br /><br />
            IREED is your real estate Genie. Think Real Estate, Think IREED.
            IREED is consolidating the best of knowledge in real estate from 
            the very accomplished people in the industry, and creating a pool of 
            credible content. IREED is your mascot to help you navigate through 
            the roads of investment to making your final real estate purchase. 
            IREED is like a torch that shows the clear path to the developer, 
            from the financial institutions to the customers and the intermediates.
            IREED acts as a service provider for all your real estate needs — be it
            buying/selling, legal paperwork, financing, regulatory and compliance 
            services, RERA services, and the entire gamut.
          </p>
        </div>

        {/* Embedded YouTube video */}
        <div className="w-full h-64 md:h-96 shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oLfuidzn2mw"
            title="IREED Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Why IREED Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-blue-700">Why </span>
              <span className="text-gray-800">IREED</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Working with an aim to provide genuine advice related to the real
              estate industry, IREED offers a full range of real estate consulting
              to home buyers, corporates, and real estate agents.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
              <li>Nearly two decades of rich industry expertise</li>
              <li>Unparalleled depth in the real estate industry</li>
              <li>Result-oriented advice to clients</li>
              <li>Value-centric approach to consulting</li>
              <li>An extensive pool of industry experts</li>
              <li>Multiple channels to learn industry best practices</li>
              <li>Covering residential and commercial construction</li>
            </ul>
          </div>

          {/* Second YouTube video */}
          <div className="w-full h-64 md:h-96 shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oLfuidzn2mw"
              title="Why IREED Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {/* Vision */}
          <div className="bg-white rounded-md shadow-md p-6 text-center">
            <div className="text-blue-400 text-4xl mx-auto mb-4">
              <FaEye />
            </div>
            <h3 className="text-xl font-bold mb-2">OUR VISION</h3>
            <p className="text-gray-600">
              To become a timeless organization that will keep adding credible knowledge and data for consumption of real estate industry & professionals.
              <br />
              To be a part of every home & every home buyer
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-md shadow-md p-6 text-center">
            <div className="text-blue-400 text-4xl mx-auto mb-4">
              <FaBullseye />
            </div>
            <h3 className="text-xl font-bold mb-2">OUR MISSION</h3>
            <p className="text-gray-600">
              IREED is on a mission to provide audited data and knowledge on the table for various stakeholders in the real estate industry.
              IREED is on a mission to be a one-stop solution for your real estate needs.
            </p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="text-center mt-16">
          <h2 className="text-xl font-bold">Follow Us</h2>
          <p className="text-gray-600 mt-2 mb-4">
            Stay up-to-date on our latest news, events, and promotions by following us on social media!
          </p>
          <div className="flex justify-center space-x-4 text-white text-lg">
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"><FaFacebookF /></a>
            <a href="https://x.com/ireed_academy?s=11" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500"><FaTwitter /></a>
            <a href="https://youtube.com/@ireedacademy?si=ebQizIZVVgrJchnP" className="bg-red-600 p-2 rounded-full hover:bg-red-700"><FaYoutube /></a>
            <a href="https://www.instagram.com/ireedacademy?igsh=MTBlbTV2N2JiMG03cA==" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/ireed-academy/" className="bg-blue-800 p-2 rounded-full hover:bg-blue-900"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
