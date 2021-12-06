import Link from 'next/link'
import Sticky from 'react-stickynode'
import Image from 'next/image'
import Logo from '../../public/img/orass-logo.png'
import Menu from '../../public/img/menu.svg'
import Cancel from '../../public/img/cancel.svg'

// import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Modal from './Modal'
const Navigation = () => {
  const [show, setShow] = useState(false)

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
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  }

  return (
    <div className={'Navigation'}>
      <nav className="desktop-nav">
        <li>
          <Link href={`#about-section`}>
            <a className="nav-link">Who we are</a>
          </Link>
        </li>
        <li>
          <Link href="#services-section">
            <a className="nav-link">Our Services</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Image src={Logo} alt="..." />
            </a>
          </Link>{' '}
        </li>
        <li>
          <Link href="#work-section">
            <a className="nav-link">Our Work</a>
          </Link>
        </li>{' '}
        <li>
          <Link href="#contact-section">
            <a className="nav-link">Contact Us</a>
          </Link>
        </li>
      </nav>

      {!show && (
        // <Sticky enabled={true} top={500}>
        <nav className="mobile-nav">
          <div>
            <Link href="/">
              <a>
                <Image src={Logo} alt="..." />
              </a>
            </Link>
          </div>

          <div onClick={() => setShow((prev) => !prev)}>
            <Image src={Menu} alt="..." />
          </div>
        </nav>
        // </Sticky>
      )}

      <Modal className show={show} showIcon setShow={setShow}>
        <nav className={'mobile-nav'}>
          <div className="logo">
            <Link href="/">
              <a onClick={() => setShow((prev) => !prev)}>
                <Image unoptimized src={Logo} alt="..." />
              </a>
            </Link>
          </div>

          <div onClick={() => setShow((prev) => !prev)}>
            <Image src={Cancel} alt="..." />
          </div>
        </nav>
        <div className="mobile-modal">
          <nav className="navigation">
            <li onClick={() => setShow((prev) => !prev)}>
              <Link href={`#about-section`}>
                <a className="nav-link">Who we are</a>
              </Link>
            </li>
            <li onClick={() => setShow((prev) => !prev)}>
              <Link href="#services-section">
                <a className="nav-link">Our Services</a>
              </Link>
            </li>
            <li onClick={() => setShow((prev) => !prev)} i>
              <Link href="#work-section">
                <a className="nav-link">Our Work</a>
              </Link>
            </li>{' '}
            <li onClick={() => setShow((prev) => !prev)}>
              <Link href="#contact-section">
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
          </nav>
        </div>
      </Modal>
    </div>
  )
}

export default Navigation
