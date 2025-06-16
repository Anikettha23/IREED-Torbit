import React from "react";
import Home from "./component/Home/Home";
import Header from "./component/Layout/Header/Header";
import Footer from "./component/Layout/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About-Us/About/About"; 
import Faqs from "./component/About-Us/Faqs/Faqs"; 
import Founder from "./component/About-Us/Founder/Founder"
import Testmonials from "./component/About-Us/Testmonials/Testmonials";
import Forum from "./component/Forum/Forum";
import Ireedreality from "./component/ireed_reality/Ireedreality";
import BlogPage from "./component/Content/BlogPage/BlogPage";
import Experts from "./component/Experts/Experts";
import Contact from "./component/Contact/Contact";
import VideoGallery from "./component/Content/Videos/VideoGallery";
import Poadcast from "./component/Content/Poadcast/Poadcast";
import Books from "./component/Books/Books";
import Idem from "./component/Idem/Idem";
import Read from "./component/Read/Read";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-Us/About" element={<About />} />
        <Route path="/About-Us/Faqs" element={<Faqs />} />
        <Route path="/About-Us/Founder" element={<Founder />} />
        <Route path="/About-Us/Testmonials" element={<Testmonials />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/Ireedreality" element={<Ireedreality />} />
        <Route path="/Books/Books" element={<Books />} />
        <Route path="/Content/Blogs" element={<BlogPage />} />
        <Route path="/Content/Videos" element={<VideoGallery />} />
        <Route path="/Content/poadcast" element={<Poadcast />} />
        <Route path="/Experts" element={<Experts />} />
        <Route path="/Idem" element={<Idem />} />
        <Route path="/Contact/Contact" element={<Contact />} />
        <Route path="/Idem" element={<Idem />} />
        <Route path="/read/:altTag" element={<Read />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
