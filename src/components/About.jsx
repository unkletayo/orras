import Img from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import OrrasWhite from '../../public/img/OrassWhite.png'
import ArrowRight from '../../public/img/arrow-right.png'
import ArrowLeft from '../../public/img/arrow-left.svg'
import Cranium from '../../public/img/cranium.png'
import Emoji from '../../public/img/emoji.svg'
import { carouselParams } from '../shared/carouselData'
import Carousel from 'react-multi-carousel'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1337 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1336, min: 769 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 426 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}


const carouselItem = {
  ...carouselParams,
  responsive,
}

const transition = {
  duration: 0.6,
  transition: {
    delay: 1,
    duration: 2,
    ease: [0.075, 0.82, 0.165, 1],
    repeat: Infinity,
    repeatType: 'reverse',
  },
}

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '50vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.1 },
  },
  exit: {
    x: '-50vh',
    opacity: 1,
    transition: { ease: 'easeInOut' },
  },
}
// 921665
const About = () => {
  const [animateAbout, setAnimateAbout] = useState(true)
  const isPageWide = useMediaQuery('(min-width: 769px)')

  return (
    <div id="about-section" className="About">
      <div className="About-top">
        <Img className="about-image" src={OrrasWhite} alt="..." />
        <div className="straight"></div>
      </div>

      <div className="About-desc">
        {isPageWide ? (
          <AnimatePresence exitBeforeEnter>
            {animateAbout ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="1"
                className="first-set set"
              >
                <motion.div key="2" className="description">
                  <h2>Who we are</h2>
                  <p>
                    Orras is a music promotion brand dedicated to promoting
                    ambitious talents to a larger audience across the world by
                    focusing on credible promotion strategies that are effective
                    for both up and coming artists and established acts.
                  </p>
                </motion.div>
                <motion.div key="11" className="description">
                  <h2>Our Ethos</h2>
                  <p>
                    Beyond providing artists around the world the structure to
                    share their sounds past their boundaries and locality. We
                    strongly believe in the talent, determination and a
                    versatility of every individual we choose to work with; and
                    that is why we ensure that for every client we promote,
                    lasting results are a must.
                    <span
                      onClick={() => setAnimateAbout(false)}
                      className="more"
                    >
                      Learn more{' '}
                      <Img           quality="1"
          unoptimized={true}
          objectFit="contain" className="img" src={ArrowRight} alt="..." />
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="2"
                className="second-set set"
              >
                <div>
                  <div className="description">
                    <h2>Leadership</h2>
                  </div>
                  <div className="images">
                    <div className="image">
                      <Img           quality="1"
          unoptimized={true}
          objectFit="contain" src={Emoji} alt="..." />
                      <span className="ray">George Ogundeko</span>
                      <span>Creative Director</span>
                    </div>
                    <div className="image">
                      <Img           quality="1"
          unoptimized={true}
          objectFit="contain" src={Cranium} alt="..." />
                      <span className="ray">Cranium X</span>
                      <span>Comms Manager</span>
                    </div>
                  </div>
                </div>
                <div className="description about">
                  {/* <h2>Our Ethos</h2> */}
                  <p>
                    Orras is a music promotion brand dedicated to promoting
                    ambitious talents to a larger audience across the world by
                    focusing on credible promotion strategies that are effective
                    for both up and coming artists and established acts.
                    <span
                      onClick={() => setAnimateAbout(true)}
                      className="more"
                    >
                      See Less
                      <Img           quality="1"
          unoptimized={true}
          objectFit="contain" className="img" src={ArrowLeft} alt="..." />
                    </span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <MobileAbout />
        )}
      </div>
    </div>
  )
}

export default About

export const MobileAbout = (params) => {
  return (
    <Carousel {...carouselItem}>
      <motion.div key="2" className="description">
        <h2>Who we are</h2>
        <p>
          Orras is a music promotion brand dedicated to promoting ambitious
          talents to a larger audience across the world by focusing on credible
          promotion strategies that are effective for both up and coming artists
          and established acts.
        </p>
      </motion.div>
      <motion.div key="11" className="description">
        <h2>Our Ethos</h2>
        <p>
          Beyond providing artists around the world the structure to share their
          sounds past their boundaries and locality. We strongly believe in the
          talent, determination and a versatility of every individual we choose
          to work with; and that is why we ensure that for every client we
          promote, lasting results are a must.
        </p>
      </motion.div>
      <div className="image">
        <Img src={Emoji} alt="..." />
        <p>George Ray</p>
      </div>
      <div className="image">
        <Img src={Cranium} alt="..." />
        <p>Cranium</p>
      </div>

      <div className="description">
        {/* <h2>Our Ethos</h2> */}
        <p>
          Orras is a music promotion brand dedicated to promoting ambitious
          talents to a larger audience across the world by focusing on credible
          promotion strategies that are effective for both up and coming artists
          and established acts.
        </p>
      </div>
    </Carousel>
  )
}
