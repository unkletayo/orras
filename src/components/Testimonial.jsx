import Image from 'next/image'
import Testimony1 from '../../public/img/circle1.png'
import Bubble from '../../public/img/bubble.png'
import vector from '../../public/img/Vector 2.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Testimonial = () => {
  const [show, setShow] = useState(false)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }
  return (
    <div className="Testimonials">
      <div className="Testimonials-Header">
        <h2>What People Are Saying About Us</h2>
      </div>

      <AnimatePresence>
        <div className="Testimonials-feeds">
          <div onMouseLeave={() => setShow(false)} className="Testimony three">
            <Image src={Testimony1} alt="..." />
            <div
              onClick={() => setShow((prev) => !prev)}
              className="Testimony-banner"
            >
              <Image src={Bubble} alt="..." />
            </div>
            {show && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="Testimony-statement"
              >
                <p>
                  My music has touched 10 million + people since i released my
                  E.p in 2021.
                </p>
                <div className="vector">
                  <Image src={vector} alt="..." />
                </div>
              </motion.div>
            )}
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
      </AnimatePresence>

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
