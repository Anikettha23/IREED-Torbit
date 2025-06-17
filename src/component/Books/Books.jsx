import React from "react";

const books = [
  {
    image: "/assets/book-1.jpeg",
    title: "TORBIT 2024 Rising demand, Rising supply and Rising prices.",
    price: "₹499.00",
  },
  {
    image: "/assets/book-2.jpeg",
    title:
      "Torbit 2023: Maintaining Growth Momentum Amid Inflationary Turbulence",
    price: "₹499.00",
  },
  {
    image: "/assets/book-3.jpeg",
    title: "Torbit 2022– Rejuvenated, Responsible & Sustainable Realty",
    price: "₹400.00",
    priceColor: "text-lime-600",
  },
  {
    image: "/assets/book-1.jpeg",
    title: "Torbit 2021 – Realty Reinvigorated",
    price: "₹350.00",   
  },
];

export default function Books() {
  return (
    <>
       <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-white text-4xl font-bold z-10">Books </h1>
      </div>
      </div> 
    <div className="py-10 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="shadow-md border border-gray-200 p-4 rounded-lg text-center"
          >
            <img
              src={book.image}
              alt={book.title}
              className="mx-auto h-56 object-contain mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {book.title}
            </h3>
            <p className={`text-xl font-bold mb-4 ${book.priceColor || "text-red-600"}`}>
              {book.price}
            </p>
            <button className="bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-start gap-8 p-8 bg-white">
      {/* Book Card */}
      <div className="w-full md:w-1/3 p-6 border shadow-lg rounded-lg text-center">
        <img
          src="/assets/book-1.jpeg"
          alt="Torbit 2020"
          className="mx-auto mb-4 h-72 object-contain"
        />
        <h2 className="text-lg font-semibold mb-2">
          IREED 2024 – Will Real Estate Emerge from the Great Global Quarantine?
        </h2>
        <p className="text-red-600 text-xl font-bold mb-4">₹300.00</p>
        <button className="bg-[#2a3290] text-white font-semibold py-2 px-6 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>

      {/* Author Info */}
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold mb-2">Bhaswar Paul</h1>
        <h2 className="text-lg font-semibold mb-4">Editor at IREED</h2>
        <p className="mb-4 text-gray-700">
          Bhaswar Paul is a senior media professional with over two decades of experience in real estate, construction and infrastructure sector and an overall four decades of rich and varied experience in print, digital and television media.
        </p>
        <p className="mb-4 text-gray-700">
          Founder Editor of Realty Plus and PropToq real estate monthly, he has been writing on real estate and infrastructure for leading publications - Gulf News, ET Realty, Property Times, Business Standard, Business World, The Week and Outlook among others.
        </p>
        {/* <a href="#" className="text-black font-semibold underline hover:text-gray-700">
          READ MORE
        </a> */}
      </div>
    </div>
</>
  );
}
