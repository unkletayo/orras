import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SpotLight from '../../../public/img/spotlight.png'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import HeroImage, { HeroArtiste } from './HeroImage'
import Artiste from '../../../public/img/Artiste big.png'

const Hero = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const isPageWide = useMediaQuery('(min-width: 768px)')

  const handleAnimation = () => {
    setShowIcon((prev) => !prev)
  }

  const transition = {
    duration: 0.2,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const list = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const inRef = useRef(null)
  const outRef = useRef(null)
  return (
    <div className={`${showIcon ? 'hero hero-logo' : 'hero hero-artiste'}`}>
      <div className={`heroText`}>
        <AnimatePresence>
          {!showIcon ? (
            <motion.div
              ref={inRef}
              initial={{ y: inRef?.current?.height, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: inRef?.current?.height, opacity: 0 }}
              transition={{ ...transition }}
              key="1"
            >
              <h1>Make The World Listen</h1>
              <p className="hero-description">
                Your talent should not be hidden or sealed away in uncut videos
                and unheard songs. It should be enjoyed and celebrated by as
                many as possible.
              </p>
            </motion.div>
          ) : (
            <motion.div
              ref={outRef}
              initial={{ y: outRef?.current?.height, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ y: outRef?.current?.height, opacity: 0 }}
              transition={{ ...transition }}
              key="2"
            >
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p className="hero-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                iusto magnam expedita dignissimos consectetur totam maiores
                atque, ex omnis nulla!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <button className="cta-button">Lets get you out there &darr;</button>
      </div>

      <div className={`heroImage`}>
        {/* <HeroImage
          showIcon={showIcon}
          transition={transition}
          isPageWide={isPageWide}
          isHovered={isHovered}
          setHovered={setHovered}
        /> */}
        <AnimatePresence>
          {showIcon ? (
            <motion.div
              showIcon={showIcon}
              transition={transition}
              isPageWide={isPageWide}
              isHovered={isHovered}
              setHovered={setHovered}
              className="mobile-artiste set"
            ></motion.div>
          ) : (
            <motion.div className="mobile-logo set"></motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="toggles">
        <div onClick={() => setShowIcon(false)} className="toggle">
          <motion.span className={`${!showIcon && 'show'}`}></motion.span>
        </div>
        <div onClick={() => setShowIcon(true)} className="toggle">
          <motion.span className={`${showIcon && 'show'}`}></motion.span>
        </div>
      </div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="spotlight"
        >
          <Image src={SpotLight} alt="Artiste" />
        </motion.div>
      )}
    </div>
  )
}

export default Hero
