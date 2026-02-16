import React from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

function App() {

  return (
    <div className='App'>
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
