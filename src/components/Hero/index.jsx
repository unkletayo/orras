import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import HeroImage from './HeroImage'

const Hero = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const isPageWide = useMediaQuery('(min-width: 760px)')

  const handleAnimation = () => {
    setShowIcon((prev) => !prev)
  }

  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const list = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <div className={`hero`}>
      <>
        <div className={`heroText`}>
          <AnimatePresence>
            {!showIcon ? (
              <motion.div
                initial={{ x: -50, y: 0, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: 50, y: 0, opacity: 0 }}
                key="1"
              >
                <h1>Make The World Listen</h1>
                <p className="hero-description">
                  Your talent should not be hidden or sealed away in uncut
                  videos and unheard songs. It should be enjoyed and celebrated
                  by as many as possible.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ x: 50, y: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, y: 0, opacity: 0 }}
                key="2"
              >
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p className="hero-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis iusto magnam expedita dignissimos consectetur totam
                  maiores atque, ex omnis nulla!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button className="cta-button">Lets get you out there &darr;</button>
        </div>
      </>

      <div className={`heroImage`}>
        <HeroImage
          showIcon={showIcon}
          transition={transition}
          isPageWide={isPageWide}
          isHovered={isHovered}
          setHovered={setHovered}
        />

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
