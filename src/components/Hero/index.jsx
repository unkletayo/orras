import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import SpotLight from '../../../public/img/spotlight.png'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import DownArrow from '../../../public/img/down-arrow.svg'
import Logo from '../../../public/img/hero-logo.png'
import Artiste from '../../../public/img/Artiste.png'

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '20vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: 'spring', ease: 'easeIn', delay: 0.1 },
  },
  exit: {
    y: '-20vh',
    transition: { ease: 'easeInOut' },
  },
}

const vVariants = {
  hidden: {
    opacity: 0,
    x: '20vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', ease: 'easeIn', delay: 0.1 },
  },
  exit: {
    x: '-20vw',
    x2: '-30vw',
    transition: { ease: 'easeInOut' },
  },
}

const upVariant = {
  ...containerVariants,
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', ease: 'easeIn', delay: 0.1 },
  },
}

const Hero = () => {
  const [showIcon, setShowIcon] = useState(false)
  const router = useRouter()
  const isPageWide = useMediaQuery('(min-width: 768px)')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tick = () => {
    setShowIcon(!showIcon)
  }
  useEffect(() => {
    const timerID = setInterval(() => tick(), 10000)
    return () => {
      clearInterval(timerID)
    }
  }, [tick])

  return (
    <div className={`${showIcon ? 'hero hero-logo' : 'hero hero-artiste'}`}>
      <div className={`heroText`}>
        <AnimatePresence exitBeforeEnter>
          {!showIcon ? (
            <>
              <motion.div
                variants={isPageWide ? containerVariants : vVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="1"
                div
                className="other-hero"
              >
                <div>
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
                </div>
                <div className="other-hero-image pc">
                  <div className="spotlight">
                    <Image src={SpotLight} alt="Artiste" />
                  </div>
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              variants={isPageWide ? upVariant : vVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key="2"
              className="other-hero"
            >
              <div>
                <h1>Welcome to {isPageWide && <br />} Orras Entertainment </h1>
                <p className="hero-description">
                  At Orras, we position ourselves as an entity dedicated to high
                  standards and meticulous attention to details. The future is
                  music and we are creating that future by building a structure
                  that provides artistes the right channel for music promotion
                  and distribution.
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
              </div>

              <div className="other-hero-image pc">
                <Image src={Logo} alt="..." />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {!isPageWide && (
        <div className={`heroImage`}>
          <AnimatePresence>
            {showIcon ? (
              <motion.div className="mobile-artiste set">
                <motion.div
                  showIcon={showIcon}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="other-hero-image"
                >
                  <Image src={Artiste} alt="..." />
                  <div className="spotlight">
                    <Image src={SpotLight} alt="Artiste" />
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div className="mobile-logo set">
                <motion.div
                  showIcon={showIcon}
                  variants={vVariants}
                  initial="hidden"
                  animate="visible"
                  className="other-hero-image"
                >
                  <Image src={Logo} alt="..." />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <div className="toggles">
        <div onClick={() => setShowIcon(false)} className="toggle">
          <motion.span className={`${!showIcon && 'show'}`}></motion.span>
        </div>
        <div onClick={() => setShowIcon(true)} className="toggle">
          <motion.span className={`${showIcon && 'show'}`}></motion.span>
        </div>
      </div>
    </div>
  )
}

export default Hero
