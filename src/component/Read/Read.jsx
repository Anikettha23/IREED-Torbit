import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

export default function Read() {
  const { altTag } = useParams(); // getting altTag from URL
  const [product, setProduct] = useState(null);
  const [blog, setBlog] = useState([]);

  // Fetch blog list
  const blogData = async () => {
    try {
      const response = await axios.get("https://uat-service.ireedindia.com/v1/blog?size=100");
      setBlog(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Fetch blog data on component mount
  useEffect(() => {
    blogData();
  }, []);

  // Find the matching product by altTag when blogs are loaded
  useEffect(() => {
    if (blog.length && altTag) {
      const matchedProduct = blog.find(
        (item) => item.altTag?.toLowerCase().replace(/\s+/g, "-") === altTag.toLowerCase()
      );
      setProduct(matchedProduct || null);
    }
  }, [blog, altTag]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product_style pt-32 max-w-3xl mx-auto">
      <img
        src={`https://uat-service.ireedindia.com/image/${product.image}`}
        alt={product.altTag}
        className="w-full h-64 object-cover rounded-md shadow mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.altTag}</h1>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(product.content, {
            FORBID_TAGS: ['style', 'script'],
          }),
        }}
      />
    </div>
  );
}

