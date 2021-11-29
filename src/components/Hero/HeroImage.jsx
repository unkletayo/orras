import { motion, AnimatePresence, whileHover } from 'framer-motion'
import Image from 'next/image'
import Artiste from '../../../public/img/Artiste big.png'
import BigArtiste from '../../../public/img/Artiste big.png'
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
            showIcon={showIcon}
          />
        ) : (
          <HeroLogoComponent />
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeroImage

export function HeroArtiste({ isPageWide, isHovered, setHovered, showIcon }) {
  return (
    <>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        style={{ background: `url(${isPageWide ? BigArtiste : Artiste})` }}
        key="3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="hero-right"
      >
        {showIcon && isPageWide && (
          <div>
            <Image src={isPageWide ? BigArtiste : Artiste} alt="Artiste" />
            <div className="hero-spotlight"></div>
          </div>
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
