import About from '../components/About'
import Hero from '../components/Hero'
import Services from '../components/How'
import Work from '../components/Illustration'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Slides from '../components/Slides'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'

const HomePage = () => (
  <div className="page-container">
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
