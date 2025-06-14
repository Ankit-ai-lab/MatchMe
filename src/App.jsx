import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './components/Landing'
import ThirdSec from './components/thirdsec'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/thirdsec" element={<ThirdSec />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
