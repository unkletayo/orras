import Image from 'next/image'
import Testimony1 from '../assets/images/circle1.png'
import Bubble from '../assets/images/bubble.png'
import vector from '../assets/images/Vector 2.png'

const Testimonial = () => {
  return (
    <div className="Testimonials">
      <div className="Testimonials-Header">
        <h2>What People Are Saying About Us</h2>
      </div>

      <div className="Testimonials-feeds">
        <div className="Testimony three">
          <Image src={Testimony1} alt="..." />
          <div className="Testimony-banner">
            <Image src={Bubble} alt="..." />
          </div>

          <div className="Testimony-statement">
            <p>
              My music has touched 10 million + people since i released my E.p
              in 2021.
            </p>
            <div className="vector">
              <Image src={vector} alt="..." />
            </div>
          </div>
        </div>
        <div className="Testimony five">
          <Image src={Testimony1} alt="..." />
          <div className="Testimony-banner">
            <Image src={Bubble} alt="..." />
          </div>
        </div>
        <div className="Testimony seven">
          <Image src={Testimony1} alt="..." />
          <div className="Testimony-banner">
            <Image src={Bubble} alt="..." />
          </div>
        </div>
      </div>

      <div className="Testimonials-feed">
        <div className="Testimony two">
          <Image src={Testimony1} alt="..." />
          <div className="Testimony-banner">
            <Image src={Bubble} alt="..." />
          </div>
        </div>
        <div className="Testimony four">
          <Image src={Testimony1} alt="..." />
          <div className="Testimony-banner">
            <Image src={Bubble} alt="..." />
          </div>
        </div>
        <div className="Testimony six">
          <Image src={Testimony1} alt="..." />
          <div className="Testimony-banner">
            <Image src={Bubble} alt="..." />
          </div>
        </div>
        <div className="Testimony eight">
          <Image src={Testimony1} alt="..." />
          <div className="Testimony-banner">
            <Image src={Bubble} alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
