import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'
import Artiste from '../assets/images/Artiste big.png'
import SpotLight from '../assets/images/spotlight.png'
import HeroLogo from '../assets/images/hero-logo.png'
const Hero = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const handleAnimation = () => {
    setShowIcon((prev) => !prev)
  }

  const transition = {
    y: {
      duration: 0.4,
      // yoyo: Infinity,
      ease: 'easeOut',
    },
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const list = {
    visible: false,
    hidden: { opacity: 0 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  }
  return (
    <div className={`hero`}>
      <AnimatePresence>
        {!showIcon ? (
          <motion.div variants={list} className={`heroText`} key="1">
            <h1>Make The World Listen</h1>
            <p className="hero-description">
              Your talent should not be hidden or sealed away in uncut videos
              and unheard songs. It should be enjoyed and celebrated by as many
              as possible.
            </p>
            <button className="cta-button">
              Lets get you out there &darr;
            </button>
          </motion.div>
        ) : (
          <motion.div variants={list} className={`heroText`} key="2">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p className="hero-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              iusto magnam expedita dignissimos consectetur totam maiores atque,
              ex omnis nulla!
            </p>
            <button className="cta-button">
              Lets get you out there &darr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`heroImage`}>
        <AnimatePresence>
          {!showIcon ? (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ transition }}
              key="3"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Image src={Artiste} alt="Artiste" />
              {isHovered && (
                <motion.div
                  initial={false}
                  transition={{
                    duration: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  className="spotlight"
                >
                  <Image src={SpotLight} alt="Artiste" />
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ ...transition }}
              className="hero-logo"
            >
              <Image src={HeroLogo} alt="orras-big" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="toggles">
          <div onClick={() => setShowIcon(false)} className="toggle">
            <motion.span className={`${!showIcon && 'show'}`}></motion.span>
          </div>
          <div onClick={() => setShowIcon(true)} className="toggle">
            <motion.span className={`${showIcon && 'show'}`}></motion.span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
