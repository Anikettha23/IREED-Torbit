import React from 'react';

const latestEdition = {
  title: 'Rising Realty Amidst Affordability Concerns',
  date: 'December 22, 2024',
  image: '/assets/8aff1b3f-379c-468a-8053-68c477ded2fe.png',
  link: '#',
};

const previousEditions = [
  {
    title: 'A Promising Year of Resilient & Resurgent Realty',
    date: 'December 24, 2023',
    link: '#',
  },
  {
    title: 'Realty Trends 2023',
    date: 'December 10, 2023',
    link: '#',
  },
  {
    title: 'Senior Living: A Multi Billion Opportunity',
    date: 'November 26, 2023',
    link: '#',
  },
  {
    title: 'I Don’t See Any Property Bubble in the Making',
    date: 'November 12, 2023',
    link: '#',
  },
];

const Ireedrealty = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[520px]  bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-white text-4xl font-bold z-10">IREED Reality</h1>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {/* Trending News (Left Column) */}
        <aside className="md:col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4">Trending News</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="text-blue-700 hover:underline font-medium">
                Developers Must Cater to Middle-Class...
              </a>
              <p className="text-gray-500 text-xs">15 views | posted on May 25, 2025</p>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline font-medium">
                Speculative Selling is a Sure Recipe for Disaster
              </a>
              <p className="text-gray-500 text-xs">14 views | posted on May 10, 2025</p>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline font-medium">
                Flattening Sales & Price Worry
              </a>
              <p className="text-gray-500 text-xs">4 views | posted on Apr 12, 2025</p>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline font-medium">
                Rising Realty Amidst Affordability Concerns
              </a>
              <p className="text-gray-500 text-xs">3 views | Dec 22, 2024</p>
            </li>
          </ul>
        </aside>

        {/* Latest Edition (Middle Column) */}
        <section className="md:col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4">Latest Edition</h2>
          <h3 className="text-lg font-bold text-gray-800">{latestEdition.title}</h3>
          <p className="text-sm text-blue-600 font-semibold mt-1">Torbit Reality</p>
          <p className="text-gray-500 text-sm mb-2">{latestEdition.date}</p>
          <img
            src={latestEdition.image}
            alt={latestEdition.title}
            className="w-full mt-4 rounded"
          />
          <a
            href={latestEdition.link}
            className="text-blue-600 hover:underline mt-2 inline-block text-sm font-medium"
          >
            Read More
          </a>
        </section>

        {/* Torbit Realty Sidebar (Right Column) */}
        <aside className="md:col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4">IREED Reality</h2>
          <div className="flex gap-2 mb-4 text-sm">
            {['2025', '2024', '2023', '2022'].map((year, index) => (
              <button
                key={year}
                className={`px-3 py-1 border rounded ${
                  year === ''
                     ? ''
                    : 'bg-blue-200 hover:bg-blue-500'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline text-blue-700">VOICES: Realty Outlook 2025</a></li>
            <li><a href="#" className="hover:underline text-blue-700">Budget For Real(ty) Growth!</a></li>
            <li><a href="#" className="hover:underline text-blue-700">Budget Bytes</a></li>
            <li><a href="#" className="hover:underline text-blue-700">Post Rate-Cut Path</a></li>
            <li><a href="#" className="hover:underline text-blue-700">Need Reliable Real Estate Data</a></li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Ireedrealty;
