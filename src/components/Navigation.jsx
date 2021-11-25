import Link from 'next/link'
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
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  }
  return (
    <div className={'Navigation'}>
      <nav className="desktop-nav">
        <li>
          <Link href="#idf">
            <a className="nav-link">Who we are</a>
          </Link>
        </li>
        <li>
          <Link href="#idf">
            <a className="nav-link">Who we are</a>
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
          <Link href="#idf">
            <a className="nav-link">Who we are</a>
          </Link>
        </li>{' '}
        <li>
          <Link href="#idf">
            <a className="nav-link">Who we are</a>
          </Link>
        </li>
      </nav>

      {!show && (
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
      )}

      <Modal className show={show} showIcon setShow={setShow}>
        <div className="mobile-modal">
          <div className="navigation">
            <li>
              <Link onClick={() => setShow((prev) => !prev)} href="#idf">
                <a className="nav-link">Who we are</a>
              </Link>
            </li>
            <li>
              <Link href="#idf">
                <a className="nav-link">Who we are</a>
              </Link>
            </li>
            <li>
              <Link href="#idf">
                <a className="nav-link">Who we are</a>
              </Link>
            </li>{' '}
            <li>
              <Link href="#idf">
                <a className="nav-link">Who we are</a>
              </Link>
            </li>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Navigation
