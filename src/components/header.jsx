import React from 'react'
import logo from '../assets/Weblogo.jpeg'
import { useTheme } from '../context/ThemeContext'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Link to="/centerpage">
            <img src={logo} alt="MatchMe Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">MatchMe</span>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link 
                to="/centerpage" 
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  location.pathname === '/centerpage' ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/thirdsec" 
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  location.pathname === '/thirdsec' ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none px-2 w-48 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button type="button" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">🔍</button>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? '🌞' : '🌙'}
        </button>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header