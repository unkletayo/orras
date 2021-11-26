import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Artiste from '../../../public/img/Artiste big.png'
import BigArtiste from '../../../public/img/Artiste big.png'
import SpotLight from '../../../public/img/spotlight.png'
import HeroLogo from '../../../public/img/hero-logo.png'

const HeroImage = ({
  showIcon,
  transition,
  isPageWide,
  isHovered,
  setHovered,
}) => {
  return (
    <div>
      <AnimatePresence>
        {!showIcon ? (
          <HeroArtiste
            isPageWide={isPageWide}
            isHovered={isHovered}
            setHovered={setHovered}
          />
        ) : (
          <HeroLogoComponent />
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeroImage

export function HeroArtiste({ isPageWide, isHovered, setHovered }) {
  return (
    <>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        // transition={{ transition }}
        style={{ background: `url(${isPageWide ? BigArtiste : Artiste})` }}
        key="3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="hero-right"
      >
        <Image src={isPageWide ? BigArtiste : Artiste} alt="Artiste" />
        <div className="hero-spotlight"></div>

        {isHovered && (
          <motion.div
            initial={false}
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
      </motion.div>
    </>
  )
}

export const HeroLogoComponent = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      className="hero-logo"
    >
      <Image src={HeroLogo} alt="orras-big" />
    </motion.div>
  )
}
