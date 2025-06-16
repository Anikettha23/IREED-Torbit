import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const [showWhiteBg, setShowWhiteBg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [contentDropdownOpen, setContentDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowWhiteBg(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setAboutDropdownOpen(false);
    setContentDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleContentDropdown = () => {
    setContentDropdownOpen(!contentDropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        showWhiteBg ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      } flex items-center h-20 px-4 md:px-10`}
    >
      {/* Logo */}
      <div className="absolute left-4 md:left-7 top-1/2 transform -translate-y-1/2">
        <Link to="/">
          <img src="/assets/logooo.png" alt="logo" className="h-10" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="ml-auto md:hidden z-50">
        <button onClick={toggleMobileMenu} className="text-3xl">
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex mx-auto space-x-10">
        <li><Link to="/">Home</Link></li>

        <li className="relative group cursor-pointer">
          <span>About Us</span>
          <ul className="absolute top-full left-0 mt-1 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-10">
            <li>
              <Link to="/About-Us/About" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/About-Us/Founder" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Founder</Link>
            </li>
            {/* <li>
              <Link to="/About-Us/Testmonial" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Testimonials</Link>
            </li> */}
            <li>
              <Link to="/About-Us/Faqs" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">FAQs</Link>
            </li>
          </ul>
        </li>

        <li className="relative group cursor-pointer">
          <span>Content</span>
          <ul className="absolute top-full left-0 mt-1 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-10">
            <li>
              <Link to="/content/Blogs" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Blogs</Link>
            </li>
            <li>
              <Link to="/content/videos" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Video Gallery</Link>
            </li>
            <li>
              <Link to="/content/Poadcast" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Podcasts</Link>
            </li>
          </ul>
        </li>

        <li><Link to="/Experts">Experts</Link></li>
        <li><Link to="/Ireedreality">IREED Realty</Link></li>
        <li><Link to="/Books/Books">Books</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/Contact/Contact">Contact</Link></li>
      </ul>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white text-black flex flex-col space-y-4 py-4 px-6 md:hidden shadow-lg z-40">
          <li><Link to="/">Home</Link></li>

          <li>
            <span onClick={toggleAboutDropdown} className="flex justify-between items-center cursor-pointer">
              About Us <span>{aboutDropdownOpen ? "−" : "+"}</span>
            </span>
            {aboutDropdownOpen && (
              <ul className="pl-4 pt-2 space-y-2">
                <li>
                  <Link to="/about-us/about-ireed" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">About IREED</Link>
                </li>
                <li>
                  <Link to="/about-us/founder" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Founder</Link>
                </li>
                <li>
                  <Link to="/about-us/testimonial" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Testimonials</Link>
                </li>
                <li>
                  <Link to="/about-us/faq" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">FAQs</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <span onClick={toggleContentDropdown} className="flex justify-between items-center cursor-pointer">
              Content <span>{contentDropdownOpen ? "−" : "+"}</span>
            </span>
            {contentDropdownOpen && (
              <ul className="pl-4 pt-2 space-y-2">
                <li>
                  <Link to="/content/BlogPage" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Blogs</Link>
                </li>
                <li>
                  <Link to="/content/videos" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Videos</Link>
                </li>
                <li>
                  <Link to="/content/Poadcast" className="block px-4 py-2 hover:bg-[#2a3290] hover:text-white">Podcasts</Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link to="/Experts">Experts</Link></li>
          <li><Link to="/Ireedreality">IREED Realty</Link></li>
          <li><Link to="/Books">Books</Link></li>
          <li><Link to="/forum">Forum</Link></li>
          <li><Link to="/Contact-us">contact</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Header;
