import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import How from '../components/How'
import Illustration from '../components/Illustration'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Slides from '../components/Slides'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import useSticky from '../hooks/useSticky'

export default function Home() {
  const { isSticky, element } = useSticky()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation sticky={isSticky} />
      <Hero />
      <About element={element} />
      <How />
      <Illustration />
      <Testimonial />
      <Slides />
      <Contact />
      <Footer />
    </div>
  )
}