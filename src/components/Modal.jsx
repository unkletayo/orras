import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Logo from '../../public/img/orass-logo.png'
import Cancel from '../../public/img/cancel.svg'

const Modal = ({ setShow, showIcon, show, children }) => {
  const showHideClassName = show ? 'general-modal' : 'general-modal hide'
  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', delay: 0.5 },
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' },
      clipPath: 'circle(30px at 40px 40px)',
    },
  }

  return (
    <div className={showHideClassName}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="general-modal-container"
      >
        <div className="okay">{children}</div>
        {/* <nav className={showIcon ? 'mobile-nav' : 'mobile-nav contact'}>
          <div className="logo">
            <Link href="/">
              <a onClick={() => setShow((prev) => !prev)}>
                <Image src={Logo} alt="..." />
              </a>
            </Link>
          </div>

          <div onClick={() => setShow((prev) => !prev)}>
            <Image src={Cancel} alt="..." />
          </div>
        </nav> */}
      </motion.div>
    </div>
  )
}

export default Modal
