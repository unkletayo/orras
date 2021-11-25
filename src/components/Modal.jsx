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

  return (
    <div
      // initial={false}
      // animate={show ? 'open' : 'closed'}
      className={showHideClassName}
    >
      <motion.div
        variants={variants}
        animate={show ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}
        className="general-modal-container"
      >
        {showIcon && (
          <nav className="mobile-nav">
            <div>
              <Link href="/">
                <a onClick={() => setShow((prev) => !prev)}>
                  <Image src={Logo} alt="..." />
                </a>
              </Link>
            </div>

            <div onClick={() => setShow((prev) => !prev)}>
              <Image src={Cancel} alt="..." />
            </div>
          </nav>
        )}

        {!showIcon && (
          <div
            className="cancel-button"
            onClick={() => setShow((prev) => !prev)}
          >
            <Image src={Cancel} alt="..." />
          </div>
        )}

        {children}
      </motion.div>
    </div>
  )
}

export default Modal
