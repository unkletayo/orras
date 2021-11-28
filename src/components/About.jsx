import Img from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import OrrasWhite from '../../public/img/OrassWhite.png'
import ArrowRight from '../../public/img/arrow-right.png'
import Test from '../../public/img/gmb-boss.png'
import { useState } from 'react'

const variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

const About = () => {
  const [animateAbout, setAnimateAbout] = useState(true)
  return (
    <div id="about-section" className="About">
      <div className="About-top">
        <Img className="about-image" src={OrrasWhite} alt="..." />
        <div className="straight"></div>
      </div>

      <div className="About-desc">
        <AnimatePresence>
          {animateAbout && (
            <motion.div className="first-set set">
              <motion.div variants={variants} key="2" className="description">
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
                  <span onClick={() => setAnimateAbout(false)} className="more">
                    Learn more{' '}
                    <Img className="img" src={ArrowRight} alt="..." />
                  </span>
                </p>
              </motion.div>
            </motion.div>
          )}

          {!animateAbout && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              className="second-set set"
            >
              <div className="images">
                <div className="image">
                  <Img src={Test} alt="..." />
                </div>
                <div className="image">
                  <Img src={Test} alt="..." />
                </div>
              </div>
              <div className="description">
                <h2>Our Ethos</h2>
                <p>
                  Beyond providing artists around the world the structure to
                  share their sounds past their boundaries and locality. We
                  strongly believe in the talent, determination and a
                  versatility of every individual we choose to work with; and
                  that is why we ensure that for every client we promote,
                  lasting results are a must.
                  <span onClick={() => setAnimateAbout(true)} className="more">
                    Learn more{' '}
                    <Img className="img" src={ArrowRight} alt="..." />
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default About
