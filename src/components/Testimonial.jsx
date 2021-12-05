import Image from 'next/image'
import Testimony1 from '../../public/img/testimonial-1.png'
import Testimony2 from '../../public/img/testimonial-2.png'
import Testimony3 from '../../public/img/testimonial-3.png'
import Testimony4 from '../../public/img/testimonial-4.png'
import Testimony5 from '../../public/img/testimonial-5.png'
import Testimony6 from '../../public/img/testimonial-6.png'
import Testimony7 from '../../public/img/testimonial-7.png'
import Bubble from '../../public/img/bubble.png'
import vector from '../../public/img/bubble.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const topTestimonies = [
  {
    class: 'three',
    image: Testimony1,
    word: `My music has touched 10 million + people since i released my
           E.p in 2021.`,
  tilt: false,
  },
  {
    class: 'five',
    image: Testimony2,
    word: `My music has touched 10 million + people since i released my
           E.p in 2021.`,
    tilt: false,
  },
  {
    class: 'seven',
    image: Testimony3,
    word: `My music has touched 10 million + people since i released my
           E.p in 2021.`,
    tilt: true,
  },
]
const bottomTestimonies = [
  {
    class: 'two',
    image: Testimony4,
    word: `My music has touched 10 million + people since i released my
           E.p in 2021.`,
    tilt: false,
  },
  {
    class: 'four',
    image: Testimony5,
    word: `My music has touched 10 million + people since i released my
           E.p in 2021.`,
    tilt: false,
    

  },
  {
    class: 'six',
    image: Testimony6,
    word: `My music has touched 10 million + people since i released my
           E.p in 2021.`,
    tilt: true,

  },
  {
    class: 'eight',
    image: Testimony7,
    word: `My music has touched 10 million + people since i released my
           E.p in 2021.`,
    tilt: false,

  },
]

const Testimonial = () => {
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
          {topTestimonies?.map((testimony, index) => (
          <TestimonyComponent key={index} testimony={testimony}/>
        ))}
        </div>
      </AnimatePresence>

      <div className="Testimonials-feed">
        {bottomTestimonies?.map((testimony, index) => (
          <TestimonyComponent key={index} testimony={testimony}/>
        ))}
      </div>
    </div>
  )
}

export default Testimonial


const TestimonyComponent = ({testimony})=> {
  const [show, setShow] = useState(false)

  return (         
<div
            key={testimony.class}
            onMouseLeave={() => setShow(false)}
            className={`Testimony ${testimony.class}`}
          >
            <Image src={testimony.image} alt="..." />
            <div
              onClick={() => setShow((prev) => !prev)}
              className="Testimony-banner"
            >
              {!show && <Image src={Bubble} alt="..." />}
            </div>
            {show && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`Testimony-statement ${testimony.tilt ? "left" : "right" }`}
              >
                <div className="vector-cover">
                  <div className="vector">
                    <p>{testimony.word}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>)
}