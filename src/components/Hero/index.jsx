import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import SpotLight from '../../../public/img/spotlight.png'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import DownArrow from '../../../public/img/down-arrow.svg'
// import Artiste from '../../../public/img/Artiste big.png'

const Hero = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const isPageWide = useMediaQuery('(min-width: 768px)')

  const handleAnimation = () => {
    setShowIcon((prev) => !prev)
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

  const inRef = useRef(null)
  const outRef = useRef(null)
  return (
    <div className={`${showIcon ? 'hero hero-logo' : 'hero hero-artiste'}`}>
      <div className={`heroText`}>
        <AnimatePresence exitBeforeEnter>
          {!showIcon ? (
            <>
              <>
                <motion.div
                  ref={inRef}
                  initial={{ y: -inRef?.current?.height, x: 0, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  exit={{
                    y: inRef?.current?.height,
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{ ...transition }}
                  key="1"
                >
                  <h1>Make The {isPageWide && <br />} World Listen</h1>
                  <p className="hero-description">
                    Your talent should not be hidden or sealed away in uncut
                    videos and unheard songs. It should be enjoyed and
                    celebrated by as many as possible.
                  </p>
                  <button
                    onClick={() => router.push('/#contact-section')}
                    className="cta-button"
                  >
                    Lets get you out there{' '}
                    <span>
                      <Image src={DownArrow} alt="..." />
                    </span>
                  </button>
                </motion.div>
              </>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="hover-area"
              ></div>
            </>
          ) : (
            <motion.div
              ref={outRef}
              initial={{ y: outRef?.current?.height, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{
                y: outRef?.current?.height,
                height: 0,
                opacity: 0,
              }}
              transition={{ ...transition }}
              key="2"
            >
              <h1>Welcome to {isPageWide && <br />} Orras Entertainment </h1>
              <p className="hero-description">
                At Orras, we position ourselves as an entity dedicated to high
                standards and meticulous attention to details. The future is
                music and we are creating that future by building a structure
                that provides artistes the right channel for music promotion and
                distribution.
              </p>
              <button
                onClick={() => router.push('/#contact-section')}
                className="cta-button"
              >
                Lets get you out there{' '}
                <span>
                  <Image src={DownArrow} alt="..." />
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={`heroImage`}>
        <AnimatePresence exitBeforeEnter>
          {showIcon ? (
            <motion.div
              showIcon={showIcon}
              transition={transition}
              isPageWide={isPageWide}
              onMouseEnter={() => setIsHovered(false)}
              onMouseLeave={() => setIsHovered(false)}
              className="mobile-artiste set"
            >
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="hover-area"
              ></div>
            </motion.div>
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

      {isHovered && !showIcon && (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          className="spotlight"
        >
          <Image src={SpotLight} alt="Artiste" />
        </motion.div>
      )}
    </div>
  )
}

export default Hero
