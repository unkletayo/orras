import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/img/orass-logo.png'
import Cancel from '../../public/img/cancel.svg'

const Modal = ({ setShow, showIcon, show, children }) => {
  const showHideClassName = show ? 'general-modal' : 'general-modal hide'
  return (
    <div className={showHideClassName}>
      <div className="general-modal-container">
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
      </div>
    </div>
  )
}

export default Modal
