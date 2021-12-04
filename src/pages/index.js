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
import SEO from '../components/seo';



export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <SEO title="Orras.com"/>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonial />
      <Slides />
      <Contact />
      <Footer />
    </div>
  )
}
