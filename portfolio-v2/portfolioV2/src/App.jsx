import React from 'react'
import Background from './Sections/background'
import Stack from './Sections/Stack'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Hero from './Sections/Hero'
import Nav from './Sections/Nav'
import RightBar from './Sections/RightBar'
import LeftBar from './Sections/LeftBar'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import Sec from './Sec'

const App = () => {
  return (
    <div className="font-inst px-10 py-5 sm:py-10 bg-gradient-to-b from-indigo-950 via-indigo-900 to-slate-950">
      <Nav />
      <LeftBar />
      <Hero />
      <Sec />
      <Contact />
      <RightBar />
      <Footer />
    </div>
  )
}

export default App