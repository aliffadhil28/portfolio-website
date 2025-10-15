import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="App bg-gray-900 text-gray-100 min-h-screen w-[100%] transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Profile />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App