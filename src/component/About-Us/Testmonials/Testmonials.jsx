import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';


const Testmonials = () => {
  return (
    <section className="bg-gray-100">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <h1 className="text-4xl font-bold text-white z-10">Testimonials</h1>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        {((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-xl relative overflow-hidden"
          >
            <div className="absolute -top-6 left-6 bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl">
              <FaQuoteLeft />
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="flex text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{item.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testmonials;
