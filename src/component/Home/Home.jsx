import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DOMPurify from "dompurify"; // ✅ Import DOMPurify
const Home = () => {
  const [blog, setBlog] = useState([]);

  const blogData = async () => {
    try {
      const response = await axios.get(
        `https://uat-service.ireedindia.com/v1/blog?size=100`
      );
      setBlog(response.data.blogs.slice(0, 4));
      console.log("data", response.data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    blogData();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-[100vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 pt-32 md:px-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            REAL ESTATE KNOWLEDGE BANK
          </h1>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full shadow-lg w-full md:w-1/2 mb-10">
            <input
              type="text"
              placeholder="Search Real Estate"
              className="w-full px-6 py-3 rounded-l-full text-black focus:outline-none"
            />
            <div className="px-4">
              {/* <img src="/search-icon.png" alt="Search" className="h-6" /> */}
            </div>
          </div>

          {/* Featured Card */}
          <div className="bg-[#2a3290] text-white rounded-xl p-6 w-full md:w-1/2">
            <p className="text-sm mb-1">16th March 2025</p>
            <h2 className="text-lg font-bold underline decoration-white mb-1">
              Promising Prospects for Housing Finance
            </h2>
            <p className="font-semibold">IREED Focus</p>
            <p className="text-sm">
              Booming Residential Market Drives Housing Finance
            </p>
          </div>
        </div>

        {/* Live Sidebar */}
        <div className="absolute right-6 top-32 hidden lg:block z-10">
          <div className="bg-white/90 rounded-xl w-80 shadow-lg">
            <div className="bg-[#2a3290] text-white p-4 rounded-t-xl flex justify-between items-center">
              <span className="font-semibold">Discuss Real Estate</span>
              <span className="bg-red-600 text-xs font-bold px-2 py-0.5 rounded">
                LIVE
              </span>
            </div>
            <div className="text-black p-4 space-y-3">
              <p className="border-b pb-2 text-sm">
                What are the best under construction or distress property deals
                in Greater...
              </p>
              <p className="border-b pb-2 text-sm">how to rent property</p>
              <p className="border-b pb-2 text-sm">test</p>
              <button className="bg-[#2a3290] text-white font-semibold w-full py-2 rounded-full mt-2">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IREED Realty Section */}
      <section
        id="ireed-realty"
        className="bg-white text-black py-12 px-6 md:px-20"
      >
        <h2 className="text-2xl font-bold mb-6 text- text-black-800">
          IREED Realty
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Featured Blog */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-full flex flex-col">
              <img
                src="/assets/I1.jpg"
                alt="IREED Realty Featured"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Rental Affordability Crisis Worsens Despite Strong Wage Growth
                </h3>
                <p className="text-gray-700 mb-4">
                  Rental affordability continued to worsen in early 2024,
                  hitting the lowest level since 2009...
                </p>
                <a
                  href="/Idem"
                  className="mt-auto text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Articles */}
          <div className="space-y-4">
            {[
              {
                date: "22 DEC",
                title: "Rising Realty Amidst Affordability Concerns",
                link: "assets/IREDD_02.pdf",
              },
              {
                date: "08 DEC",
                title: "Robust Realty & Outlook For 2025",
                link: "assets/IREDD_02.pdf",
              },
              {
                date: "24 NOV",
                title: "Magic Mantra for Urban Planning",
                link: "/",
              },
              {
                date: "09 NOV",
                title: "Festive Demand May Elude Housing Finance Companies",
                link: "/",
              },
              {
                date: "26 OCT",
                title: "Of Festive Hype & Ground Realty",
                link: "/magazines/festive-hype-oct-26.pdf",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-100 rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <p className="text-sm font-semibold text-[#2a3290] mb-1">
                  {item.title}
                </p>
                <span className="text-xs bg-[#2a3290] text-white px-2 py-0.5 rounded">
                  {item.date}
                </span>
                <span className="ml-2 text-[#2a3290] text-xs font-semibold hover:underline">
                  VIEW MORE
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION (TORBIT-STYLE) */}
      <section className="bg-white text-black py-12 px-6 md:px-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Blogs</h2>
          <a
            href="/content/BlogPage"
            className="text-[#2a3290] font-semibold text-sm hover:underline"
          >
            SEE ALL BLOGS →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blog.map((product) => (
            <Link
              to={`/read/${product.altTag?.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <img
                src={`https://uat-service.ireedindia.com/image/${product.image}`}
                alt={product.altTag}
                className="w-full h-48 object-cover rounded-md shadow group-hover:shadow-lg transition"
              />
              <br />
              <h3 className="text-sm font-bold leading-snug group-hover:underline">
                {product.altTag}
              </h3>
              <br />
              <p className="text-xs font-semibold uppercase text-gray-500">
                ${product.description.toLowerCase()}
              </p>

              <p className="text-xs text-gray-500 ">
                {`${new Date(product.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}`}
              </p>
            </Link>
          ))}
        </div>
      </section>
      {/* OUR EXPERTS SECTION */}
      <section className="bg-white text-black py-12 px-6 md:px-20 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Experts</h2>
          <a
            href="/experts"
            className="text-[#2a3290] font-semibold text-sm hover:underline"
          >
            SEE ALL EXPERTS →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Bhaswar Paul",
              image: "/assets/3.jpg",
            },
            {
              name: "Kunal Behrani",
              image: "/assets/1.jpg",
            },
            {
              name: "Suneet Singh",
              image: "/assets/2.1.jpg",
            },
          ].map((expert, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold drop-shadow">
                {expert.name}
              </div>
              <div className="absolute inset-0 border border-transparent group-hover: transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR VIDEOS SECTION */}
      <section className="bg-white text-black py-12 px-6 md:px-20 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Videos</h2>
          <a
            href="/videos"
            className="text-[#2a3290] font-semibold text-sm underline underline-offset-4 hover:text-blue-600 flex items-center gap-1"
          >
            VIEW ALL →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {[
            {
              title: "",
              embedUrl: "https://www.youtube.com/embed/9UyoxLtItDg",
            },
            {
              title: "",
              embedUrl: "https://www.youtube.com/embed/oLfuidzn2mw",
            },
            {
              title: "",
              embedUrl: "https://www.youtube.com/embed/n3lfxuttzwY",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-md"
            >
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-3 font-semibold text-center">{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
              <span className="text-gray-800">
                IREED is your real estate Genie.
              </span>
              <br />
              <span className="text-gray-800">
                Think Real Estate,{" "}
                <span className="text-gray-800">Think TORBIT</span>
              </span>
            </h2>

            <h3 className="mt-6 text-xl font-bold text-gray-900">About Us</h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Ireed is consolidating the best of knowledge in real estate from
              the very accomplished people in the industry and creating a pool
              of credible content. IREED is your mascot to help you navigate
              through the roads of investment to making your real estate
              purchase. IREED is like a torch that shows the clear path for the
              developer to the financial institution to the customer and the
              intermediates.
            </p>

            <button className="mt-6 bg-[#2a3290] hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transition duration-300 w-fit">
              KNOW MORE
            </button>
          </div>

          {/* Embedded Video */}
          {/* Embedded Video */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/G5P7hUiiZfc"
              title="About Torbit"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6 md:px-20 border-t">
        <div className="flex flex-col lg:flex-row bg-gray-100 rounded-xl overflow-hidden shadow-lg">
          <div className="lg:w-1/2 w-full">
            <img
              src="assets/ireed blog image (1).png"
              alt="Featured Blog"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center">
            <p className="text-sm uppercase text-gray-500 mb-2">
              INVESTMENT, MARKET INSIGHTS
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
              How Buisness Analytics is Reshaping the future of Real Estate
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              By Bhaswar Paul | May 22, 2025
            </p>
            <a
              href="http://localhost:3000/read/business-analytics-is-shaping-real-estate-marketing"
              className="mt-6 bg-[#2a3290] hover:bg-blue-500 text-black  px-6 py-2 rounded-full text-sm tracking-wide transition duration-300 w-fit"
            >
              READ MORE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
