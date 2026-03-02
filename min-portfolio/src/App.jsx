import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import TimelinePage from './pages/TimelinePage'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
