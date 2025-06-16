import React, { useState } from "react";

const faqData = [
  {
    question:
      "Plots, flats or floors - where do you think the customer can get the maximum gains in the next six months?",
    answer:
      "There is no better investment than land (plots) because the construction cost for a particular specification remains the same - the multiple comes on the basis of quality, delivery, brand etc. In the current scenario, prices of plots in Tier 2 cities have increased substantially and the percentage on the return beats the return on apartments or floors. In the metros, floors are drawing a lack of traction and since the supply of floors versus apartments is limited, there is a huge appreciation in the price of floors. The apartment prices have seen minimum appreciation because there are lots of unsold inventory of under construction apartments available in the market.",
  },
  {
    question:
      "With work from home gaining ground, do you think smaller cities will grow more?",
    answer:
      "Yes, the flexibility of work from home has allowed many professionals to relocate to smaller cities, which has increased demand for real estate in those areas due to affordability and better quality of life.",
  },
  {
    question:
      "What are the important things to review prior to investing in real estate?",
    answer:
      "Key things to review include title clearance, builder reputation, RERA registration, project approvals, location potential, and return on investment metrics.",
  },
  {
    question: "Is 2021 a buyer’s or seller’s market?",
    answer:
      "2021 was primarily a buyer's market due to low interest rates and the push from developers to clear inventory post-pandemic, offering good deals and discounts.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-white text-4xl font-bold z-10">FAQs</h1>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          End-User Demand is an Investment Opportunity
        </h2>
        <p className="text-center font-semibold text-gray-700 mb-6 uppercase">
          By: Mr. Bhaswar Paul
        </p>
        <div className="flex justify-center mb-10">
          <img
            src="assets/IMG11.jpg" // Make sure this path is correct
            alt="Mr. Bhaswar Paul"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border rounded-md overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full text-left px-6 py-4 font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex justify-between items-center`}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
