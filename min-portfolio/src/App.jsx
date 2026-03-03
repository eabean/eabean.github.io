import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import TimelinePage from './pages/TimelinePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className='App flex flex-col min-h-screen'>
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-5xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
