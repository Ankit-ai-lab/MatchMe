import React from 'react';

const ThirdSec = () => {
  return (
    <div className="min-h-screen bg-[#1c2230] text-white">
      <main className="pt-24 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-10">
          Our dating site helps millions find real love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Card 1 */}
          <div className="bg-[#2b3244] rounded-xl overflow-hidden shadow-md p-4 hover:transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1589906690505-1f785d1b0eb6"
              alt="Couple kissing"
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-4 text-sm md:text-base text-center">
              Over 2 million have found love <br />
              <span className="text-pink-400">... could you be next?</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2b3244] rounded-xl overflow-hidden shadow-md p-4 hover:transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Happy couple in field"
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-4 text-sm md:text-base text-center">
              Site most likely to lead to happy relationships <br />
              <span className="text-pink-400">... the right one may be waiting for you!</span>
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2b3244] rounded-xl overflow-hidden shadow-md p-4 hover:transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Smiling person"
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-4 text-sm md:text-base text-center">
              2.3 million messages sent weekly <br />
              <span className="text-pink-400">See who wants to talk to you!</span>
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Join Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default ThirdSec;
