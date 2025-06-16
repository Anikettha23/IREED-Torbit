
import React from 'react';

const Forum = () => {
  return (
    
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 text-center relative h-[520px]">
        <h1 className="text-4xl font-bold justify-center mt-[130px]">India’s Largest Real Estate Forum</h1>
        <p className="mt-2 text-lg">Ask all your Real estate questions, help others answer theirs</p>
        <button className="mt-6 bg-[#2a3290] text-black font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition">
          ASK A QUESTION
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
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
                <div className="flex gap-6 text-sm text-gray-600 mt-2">
                  <span>👁️ 167 Views</span>
                  <span>👍 Like</span>
                  <span>💬 Add a comment</span>
                  <span>🔗 Share</span>
                  <button className="mt-2 bg-[#2a3290] text-black font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition">
                  ASK A QUESTION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending News */}
        <aside>
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="font-semibold border-b border-blue-400 pb-2 mb-4 text-lg">Trending News</h3>
            <div className="space-y-4">
              <div>
                <div className="flex gap-2">
                  <span className="font-bold text-[#2a3290]">1</span>
                  <div>
                    <p className="font-semibold leading-tight">
                      Why Bengaluru Reigns Supreme as a Residential Hub
                    </p>
                    <p className="text-sm text-gray-500">KIRAN VENUGOPAL - MAY 17, 2025</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-2">
                  <span className="font-bold text-[#2a3290]">2</span>
                  <div>
                    <p className="font-semibold leading-tight">
                      The Rise of A-Grade Office Spaces: Redefining Work Environments
                    </p>
                    <p className="text-sm text-gray-500">SAMEER SHARMA - MAY 15, 2025</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                  <span className="font-bold text-[#2a3290]">3</span>
                  <div>
                    <p className="font-semibold leading-tight">
                      The Rise of A-Grade Office Spaces: Redefining Work Environments
                    </p>
                    <p className="text-sm text-gray-500">SAMEER SHARMA - MAY 15, 2025</p>
                  </div>
                </div>
              <div className="flex gap-2">
                  <span className="font-bold text-[#2a3290]">4</span>
                  <div>
                    <p className="font-semibold leading-tight">
                      The Rise of A-Grade Office Spaces: Redefining Work Environments
                    </p>
                    <p className="text-sm text-gray-500">SAMEER SHARMA - MAY 15, 2025</p>
                  </div>
                </div>
            <div className="flex gap-2">
                  <span className="font-bold text-[#2a3290]">5</span>
                  <div>
                    <p className="font-semibold leading-tight">
                      The Rise of A-Grade Office Spaces: Redefining Work Environments
                    </p>
                    <p className="text-sm text-gray-500">SAMEER SHARMA - MAY 15, 2025</p>
                  </div>
                </div>
            <div className="flex gap-2">
                  <span className="font-bold text-[#2a3290]">6</span>
                  <div>
                    <p className="font-semibold leading-tight">
                      The Rise of A-Grade Office Spaces: Redefining Work Environments
                    </p>
                    <p className="text-sm text-gray-500">SAMEER SHARMA - MAY 15, 2025</p>
                  </div>
                </div>
            <div className="flex gap-2">
                  <span className="font-bold text-[#2a3290]">7</span>
                  <div>
                    <p className="font-semibold leading-tight">
                      The Rise of A-Grade Office Spaces: Redefining Work Environments
                    </p>
                    <p className="text-sm text-gray-500">SAMEER SHARMA - MAY 15, 2025</p>
                  </div>
                </div>
            <div className="flex gap-2">
                  <span className="font-bold text-[#2a3290]">8</span>
                  <div>
                    <p className="font-semibold leading-tight">
                      The Rise of A-Grade Office Spaces: Redefining Work Environments
                    </p>
                    <p className="text-sm text-gray-500">SAMEER SHARMA - MAY 15, 2025</p>
                  </div>
                </div>
            
            
              {/* Add more items as needed */}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Forum;
