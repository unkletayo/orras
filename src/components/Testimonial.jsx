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
    word: `They believed in my music. I would recommend them to independent artists.`,
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
    word: `They're extremely communicative and believe in the music they're working to promote.`,
    tilt: false,
  },
]

const Testimonial = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }

  const h = topTestimonies.map(item=> {
    return{...item, bub:Bubble, show:false}
  })

  const y = bottomTestimonies.map(item=> {
    return{...item, bub:Bubble, show:false}
  })

  const handleShow1 = (tes) => {
    setLowerArr(y)
    setUpperArr(prev => (
      prev.map(item => {
      if(item.class === tes.class){
        return {...item, show:true}
      } else{
        return {...item, show:false}
      }
    })
    ))
  }

    const handleShow2 = (tes) => {
      setUpperArr(h)
    setLowerArr(prev => (
      prev.map(item => {
      if(item.class===tes.class){
        return {...item, show:true}
      } else{
        return {...item, show:false}
      }
    })
    ))
  }

  const resetArr = () => {
      setUpperArr(h)
       setLowerArr(y)    
  }

  const [upperArr, setUpperArr] = useState(h)
  const [lowerArr, setLowerArr] = useState(y)


  return (
    <div className="Testimonials">
      <div className="Testimonials-Header">
        <h2>What People Are Saying About Us</h2>
      </div>

      <AnimatePresence>
        <div className="Testimonials-feeds">
          {upperArr?.map((testimony, index) => (
            <TestimonyComponent reset={resetArr} key={index} handleShow={handleShow1} testimony={testimony} />
          ))}
        </div>
      </AnimatePresence>

      <div className="Testimonials-feed">
        {lowerArr?.map((testimony, index) => (
          <TestimonyComponent reset={resetArr} key={index} handleShow={handleShow2} testimony={testimony} />
        ))}
      </div>
    </div>
  )
}

export default Testimonial

const TestimonyComponent = ({ testimony, reset, handleShow }) => {
  const [item, setItem] = useState(testimony)

  return (
    <div
      key={testimony.class}
      onMouseLeave={reset}
      className={`Testimony ${testimony.class}`}
    >
      <Image src={testimony.image} alt="..." />
      <div
        onClick={() => handleShow(testimony)}
        className="Testimony-banner"
      >
        {!testimony.show && <Image src={testimony.bub} alt="..." />}
      </div>
      {testimony.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1, x: 5, y: 7 }}
          exit={{ opacity: 0, scale: 0.4, x: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className={`Testimony-statement ${testimony.tilt ? 'left' : 'right'}`}
        >
          <div className="vector-cover">
            <div className="vector">
              <p className={`${testimony.tilt ? 'left' : 'right'}`}>{testimony.word}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

const UpperTes = () => {
   const h = topTestimonies.map(item=> {
    return{...item, bub:Bubble, show:false}
  })

  const y = bottomTestimonies.map(item=> {
    return{...item, bub:Bubble, show:false}
  })

  const handleShow = (tes) => {
   return arr = arr.map(item => {
      if(item.class===tes.class){
        return {...item, show:true}
      } else{
        return item
      }
    })
  }
  
  return
  (  <div className="Testimonials-feeds">
          {h?.map((testimony, index) => (
            <TestimonyComponent arr={h} key={index} handleShow={handleShow} testimony={testimony} />
          ))}
  </div>
)  
}
