import React from 'react';

const Forum = () => {
  return (
    <div className="bg-gray-100 min-h-screen  sm:px-0">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-16 px-4 relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-12">India’s Largest Real Estate Forum</h1>
        <p className="mt-2 text-base sm:text-lg">Ask all your Real estate questions, help others answer theirs</p>
        <button className="mt-6 bg-[#2a3290] text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition">
          ASK A QUESTION
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Forum Posts */}
        <div className="md:col-span-2 space-y-6">
          {/* Forum Card */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="flex items-start gap-4">
              <div className="text-[#2a3290] text-2xl">💬</div>
              <div>
                <p className="text-sm text-gray-500">New Project</p>
                <h2 className="font-bold text-lg leading-tight">
                  What are the best under construction or distress property deals in Greater Noida West right now?
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Posted by <span className="text-blue-600">Hansla Realty Group</span> on May 17, 2025
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                  <span>👁️ 167 Views</span>
                  <span>👍 Like</span>
                  <span>💬 Add a comment</span>
                  <span>🔗 Share</span>
                </div>
                <button className="mt-4 bg-[#2a3290] text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition w-full sm:w-auto">
                  ASK A QUESTION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trending News */}
        <aside>
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="font-semibold border-b border-blue-400 pb-2 mb-4 text-lg">Trending News</h3>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: 'Why Bengaluru Reigns Supreme as a Residential Hub',
                  author: 'KIRAN VENUGOPAL',
                  date: 'MAY 17, 2025'
                },
                ...Array(7).fill({
                  id: null,
                  title: 'The Rise of A-Grade Office Spaces: Redefining Work Environments',
                  author: 'SAMEER SHARMA',
                  date: 'MAY 15, 2025'
                })
              ].map((news, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2">
                  <span className="font-bold text-[#2a3290]">{index + 1}</span>
                  <div>
                    <p className="font-semibold leading-tight">{news.title}</p>
                    <p className="text-sm text-gray-500">{news.author} - {news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Forum;
