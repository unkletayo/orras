import Img from 'next/image'
import Artiste from '../assets/images/Artiste.png'
import SpotLight from '../assets/images/spotlight.png'
const Hero = () => {
  return (
    <div className={`hero`}>
      <div className={`heroText`}>
        <h1>Make The World Listen</h1>
        <p className="hero-description">
          Your talent should not be hidden or sealed away in uncut videos and
          unheard songs. It should be enjoyed and celebrated by as many as
          possible.
        </p>

        <button className="cta-button">Lets get you out there &darr;</button>
      </div>

      <div className={`heroImage`}>
        <Img src={Artiste} alt="Artiste" />
        <div className="spotlight">
          <Img src={SpotLight} alt="Artiste" />
        </div>
      </div>
    </div>
  )
}

export default Hero
