import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import Services from '../components/How'
import Work from '../components/Illustration'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Slides from '../components/Slides'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import useSticky from '../hooks/useSticky'
import Modal from '../components/Modal'
import SEO from '../components/seo'
import Preloader from '../components/Preloader'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
  },
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [loading])
  return (
    <div style={{ position: 'relative' }}>
      <SEO title="Orras.com" />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Work />
          <Testimonial />
          <Slides />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}
