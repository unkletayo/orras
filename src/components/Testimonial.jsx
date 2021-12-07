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
    word: `My music has touched 10 million + people since I released my
           E.p in 2021.`,
    tilt: false,
  },
  {
    class: 'five',
    image: Testimony2,
    word: `After I created my E.P, Orras helped with getting traction and global visibility.`,
    tilt: false,
  },
  {
    class: 'seven',
    image: Testimony3,
    word: `I used to run solo in the past 4 years but things changed when my friend referred Orras in June`,
    tilt: true,
  },
]
const bottomTestimonies = [
  {
    class: 'two',
    image: Testimony4,
    word: `One of the things I love about my experience is that I got what they promised`,
    tilt: false,
  },
  {
    class: 'four',
    image: Testimony5,
    word: `Besides giving me a good promotion. They believed in my music. It felt great and I would definitely recommend them to independent artists.`,
    tilt: false,
  },
  {
    class: 'six',
    image: Testimony6,
    word: `I love how the team are passionate about my project and show genuine concern for my music.`,
    tilt: true,
  },
  {
    class: 'eight',
    image: Testimony7,
    word: `Ran a successful  campaign with Orras! They're extremely communicative and believe in the music they're working to promote.`,
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
            <TestimonyComponent key={index} testimony={testimony} />
          ))}
        </div>
      </AnimatePresence>

      <div className="Testimonials-feed">
        {bottomTestimonies?.map((testimony, index) => (
          <TestimonyComponent key={index} testimony={testimony} />
        ))}
      </div>
    </div>
  )
}

export default Testimonial

const TestimonyComponent = ({ testimony }) => {
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
          className={`Testimony-statement ${testimony.tilt ? 'left' : 'right'}`}
        >
          <div className="vector-cover">
            <div className="vector">
              <p>{testimony.word}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
