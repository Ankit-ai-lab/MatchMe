import React from "react";
import ThirdSec from "./ThirdSec";

const Landing = () => {
  return (
    <> 
    <div className="min-h-screen bg-pink-50 dark:bg-gray-800 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-pink-700 dark:text-pink-400 text-center mb-12">
        Our dating site helps millions find real love
      </h1>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Section 1 */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg">
            <img
              src="https://www.eharmony.com/wplp/wp-content/uploads/sites/5/2023/11/1-over-2-million-have-found-love.jpg"
              alt="Over 2 million found love"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Over 2 million have found love
              <br />
              <span className="text-pink-600 dark:text-pink-400">… could you be next?</span>
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg">
            <img
              src="https://www.eharmony.com/wplp/wp-content/uploads/sites/5/2023/11/3-site-most-likely-to-lead-to-happy-relationships.jpg"
              alt="Happy relationships"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Site most likely to lead to happy relationships
              <br />
              <span className="text-pink-600 dark:text-pink-400">… the right one may be waiting for you!</span>
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg">
            <img
              src="https://www.eharmony.com/wplp/wp-content/uploads/sites/5/2023/11/4-messages-sent-weekly.jpg"
              alt="Messages sent"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
              2.3 million messages sent weekly
              <br />
              <span className="text-pink-600 dark:text-pink-400">See who wants to talk to you!</span>
            </p>
          </div>
        </div>
      </div>
    
    </div>
    <ThirdSec/>
</>
  );
};

export default Landing;
