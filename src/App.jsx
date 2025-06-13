import { useState } from 'react'
import './App.css'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* Your other components will go here */}
    </>
  )
}

export default App
