import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/img/orass-logo.png'
import { AiOutlineMenu } from 'react-icons/ai'
const Navigation = ({ sticky }) => {
  return (
    <div className={sticky ? 'Navigation navbar-sticky' : 'Navigation'}>
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
      <nav className="mobile-nav">
        <div>
          <Link href="/">
            <a>
              <Image src={Logo} alt="..." />
            </a>
          </Link>
        </div>

        <div>
          <AiOutlineMenu className="burger" />
        </div>
      </nav>
    </div>
  )
}

export default Navigation
