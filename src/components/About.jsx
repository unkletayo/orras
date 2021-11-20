import Img from 'next/image'
import OrrasWhite from '../assets/images/OrassWhite.png'
import ArrowRight from '../assets/images/arrow-right.png'
const About = () => {
  return (
    <div className="About">
      <div className="About-top">
        <Img className="about-image" src={OrrasWhite} alt="..." />
        <div className="straight"></div>
      </div>

      <div className="About-desc">
        <div className="first-set set">
          <div className="description">
            <h2>Who we are</h2>
            <p>
              Orras is a music promotion brand dedicated to promoting ambitious
              talents to a larger audience across the world by focusing on
              credible promotion strategies that are effective for both up and
              coming artists and established acts.
            </p>
          </div>
          <div className="description">
            <h2>Our Ethos</h2>
            <p>
              Beyond providing artists around the world the structure to share
              their sounds past their boundaries and locality. We strongly
              believe in the talent, determination and a versatility of every
              individual we choose to work with; and that is why we ensure that
              for every client we promote, lasting results are a must.
              <p className="more">
                Learn more <Img src={ArrowRight} alt="..." />
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
