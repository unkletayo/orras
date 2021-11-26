// import {  } from 'framer-motion/types/animation/use-animated-state'
import Image from 'next/image'
import { useState } from 'react'
import RightArrow from '../../public/img/arrow-right.png'
import Logo from '../../public/img/orass-logo.png'
import Modal from './Modal'

const Contact = () => {
  const [show, setShow] = useState(false)

  return (
    <div id="contact-section" className="Contact">
      <div className="Contact-header">
        <h2>Are You Ready For the World?</h2>
      </div>
      <p className="Contact-info">
        The world is ready for you, you must and cannot be silenced, Lets get
        you out there today.
      </p>

      <div className="Contact-button">
        <button onClick={() => setShow((prev) => !prev)}>
          <span>Let’s Begin!</span>
          <Image src={RightArrow} alt="..." />{' '}
        </button>
      </div>
      <Modal show={show} showIcon={false} setShow={setShow}>
        <div className="content">
          <div className="content-items">
            <div className="logo-icon">
              <Image src={Logo} alt="logo" />
            </div>

            <div className="content-cta">
              <span>Start Your</span>
              <span>Journey with us</span>
              <span>
                <a href="tel:+23400000000000">Call</a> or{' '}
                <a href="mailto:mail@mail.com">email</a>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Contact
