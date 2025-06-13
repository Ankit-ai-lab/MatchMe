import React from 'react'
import logo from '../assets/Weblogo.jpeg'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="MatchMe Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-gray-800">MatchMe</span>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">Home</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">Features</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">About</li>
          </ul>
        </nav>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none px-2 w-48"
          />
          <button type="button" className="text-gray-500 hover:text-blue-600 transition-colors">🔍</button>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header