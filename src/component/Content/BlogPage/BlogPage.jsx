import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("2025");
  const blogsPerPage = 4;

  const blogData = async () => {
    try {
      const response = await axios.get(
        "https://uat-service.ireedindia.com/v1/blog?size=100"
      );
      setBlogs(response.data.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    blogData();
  }, []);

  // Filter blogs based on selected year
  const filteredBlogs = blogs.filter((blog) =>
    blog.date?.includes(selectedYear)
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1); // Reset to page 1 when year changes
  };

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <div
          className="relative w-full h-[520px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/assets/background.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <h1 className="relative text-white text-4xl font-bold z-10">Blogs</h1>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-60 lg:px-20 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 bg-white">
          {/* Left Column - Blog Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:flex-1">
            {currentBlogs.map((product) => (
           <Link
              to={`/read/${product.altTag?.toLowerCase().replace(/\s+/g, "-")}`}
            >
                <img
                  src={`https://uat-service.ireedindia.com/image/${product.image}`}
                  alt={product.altTag}
                  className="w-full h-48 object-cover rounded-md shadow group-hover:shadow-lg transition"
                />

                <h3 className="text-l font-bold leading-snug group-hover:underline pt-3 ">
                  {product.altTag}
                </h3>
                <p className="text-s font-semibold uppercase text-gray-500 pt-2">
                  {product.description}
                </p>
                
                {/* <p className="text-xs text-gray-500">
                  {`${product.author} - ${product.date}`}
                </p> */}
              </Link>
            ))}
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-80 bg-white shadow rounded-lg p-4 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Torbit Realty</h2>

            {/* Year Filters */}
            <div className="flex flex-wrap gap-2">
              {["2025", "2024", "2023", "2022", "2021"].map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearFilter(year)}
                  className={`px-3 py-1 rounded text-sm ${
                    year === selectedYear
                      ? "bg-[#2a3290] text-gray-900 font-semibold"
                      : "bg-[#2a3290]-100 text-gray-600"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Links */}
  <ul className="space-y-2 text-blue-900 text-sm font-medium">
   <a href="http://localhost:3000/read/best-mba-in-real-estate"> <li>Best MBA in Real Estate</li></a>
    <a href="http://localhost:3000/read/real-estate-advance-program-for-professional-growth"><li>Real Estate Advance Program for Professional</li></a>
    <a href="http://localhost:3000/read/how-to-calculate-property-tax"><li>How to Calculate Property Tax</li></a>
    <a href="http://localhost:3000/read/indian-real-estate-industry"><li>Indian Real Estate Industry</li></a>
    <a href="http://localhost:3000/read/tdr-in-real-estate"><li>TDR in Real Estate</li></a>
  </ul>

  {/* YouTube Section */}
 <div>
  <h3 className="text-lg font-bold text-gray-800 mb-2">Watch on YouTube</h3>
  <a
    href="https://youtu.be/oLfuidzn2mw?si=8Y2Le6j47IhD2yit"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://img.youtube.com/vi/oLfuidzn2mw/0.jpg"
      alt="YouTube Preview"
      className="rounded-md w-full"
    />
  </a>
</div>

</aside>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-[#2a3290] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;