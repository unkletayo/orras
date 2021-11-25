import Image from 'next/image'
import Facebook from '../../public/img/facebook.svg'
import Twitter from '../../public/img/twitter.svg'
import Instagram from '../../public/img/instagram.svg'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-links">
        <a href="!#">
          <Image src={Facebook} alt="..." />
        </a>
        <a href="!#">
          <Image src={Twitter} alt="..." />
        </a>{' '}
        <a href="!#">
          <Image src={Instagram} alt="..." />
        </a>
      </div>
      <div className="created-by">Copyright 2021 © Orras Entertainment</div>
    </div>
  )
}

export default Footer
