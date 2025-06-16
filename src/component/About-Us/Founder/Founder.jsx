import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Founder = () => {
  return (
    <div className="w-[100%]">
      {/* Hero Section */}
      <div className="">
        <div className="">
          {/* Left Side - Signature */}
          <div className="">
            <h1 className=""></h1>
            <div className="" />
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center"> 
            <img
              src="/assets/Frame 47.jpg" // Replace with actual image path
              alt="Founder"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-10 px-4 text-center">
        <p className="max-w-4xl mx-auto text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
          People make “organization” and “organization” get created by people.
          It's the quality of the people which reflect the character of the “Organization”
        </p>
      </div>
      <section className="w-full bg-white text-center py-12 px-4">
  {/* Founder Image */}
  <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
    <img
      src="/assets/IMG11.jpg" // Replace with your image path
      alt="Bhaswar Paul"
      className="w-full object-cover"
    />
  </div>

  {/* Name and Title */}
  <div className="mt-6">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
      Bhaswar Paul - Real Estate veteran, speaker, mentor and coach
    </h2>
  </div>

  {/* Social/Media Buttons */}
  <div className="mt-6 flex flex-wrap justify-center gap-4">
    <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition">
      <img src="/assets/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
      LinkedIn
    </a>
    <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium hover:bg-orange-200 transition">
      <img src="/assets/blog.webp" alt="Blogs" className="w-5 h-5" />
      Blogs
    </a>
    <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium hover:bg-red-200 transition">
      <img src="/assets/youtube.png" alt="Videos" className="w-5 h-5" />
      Videos
    </a>
    <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium hover:bg-yellow-200 transition">
      <img src="/assets/media.png" alt="Media" className="w-5 h-5" />
      Media
    </a>
    <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium hover:bg-green-200 transition">
      <img src="/assets/journey.png" alt="Journey" className="w-5 h-5" />
      Journey
    </a>
  </div>
</section>
<section className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto leading-relaxed text-justify">
  <p>Sanjeev Kathuria is undoubtedly foremost amongst industry veterans, having over three decades of Real Estate sales and business development experience, with primary focus on NCR market.His supremacy in sales is clearly exhibited in the fact that he has clocked over Rs15-20 thousand crore of (Noida accounting for a lion’s share) inventory sales in the last 15 yrs.His market expertise also includes - Chandigarh Tricity, Tier 2-3 cities of North India.Founder, Author and CEO of Torbit Consulting, he is one amongst few authors in Real Estate who pen down their experiences, thoughts, opinions and timely predictions about the industry. He has delivered and published over 100 insights on different issues in Real Estate like NBFC Crises, Property ka Sahi Daam kya, Sales team motivation, Real estate best practices, and many more.He has done many videos on Real Estate on current problems, including buyers’ issues. One of the videos clocked a viewer base over a million within a month of being posted.Driven by a forward-looking approach to business management, his leadership is rooted in deep financial expertise.He has worked with various industry-leading brands and looked after a range of functions like land buying, liasoning, sales & marketing, construction, and other verticals of Real Estate.He has been a driving force behind a group that aspires to write its own success story in the real estate landscape. His active involvement in various facets of real estate business is now admired by leading industrialists.</p>
</section>

<section className="bg-gray-100 py-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Follow Us</h2>
        <p className="mt-2 text-gray-600">
          Stay up-to-date on our latest news, events, and promotions by following us on social media!
        </p>

        <div className="mt-6 flex justify-center gap-6">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-sky-400 hover:text-sky-600 text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-red-600 hover:text-red-800 text-2xl">
            <FaYoutube />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900 text-2xl">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Founder;
