import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/orass-logo.png'
const Navigation = ({ sticky }) => {
  return (
    <div className={sticky ? 'Navigation navbar-sticky' : 'Navigation'}>
      <nav>
        <li>
          <Link href="#idf">
            <a>Who we are</a>
          </Link>{' '}
        </li>
        <li>
          <Link href="#idf">
            <a>Who we are</a>
          </Link>{' '}
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
            <a>Who we are</a>
          </Link>{' '}
        </li>{' '}
        <li>
          <Link href="#idf">
            <a>Who we are</a>
          </Link>{' '}
        </li>
      </nav>
    </div>
  )
}

export default Navigation
