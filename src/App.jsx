import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Main from './components/Main'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
     {loading ? (
  <Loading />
) : (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <Hero />
    <Main />
    <Footer />
  </motion.div>
)}
    </>
  )
}

export default App
