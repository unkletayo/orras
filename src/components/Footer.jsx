import Image from 'next/image'
import Facebook from '../../public/img/facebook.svg'
import Twitter from '../../public/img/twitter.svg'
import Instagram from '../../public/img/instagram.svg'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://facebook.com/orras_ent"
        >
          <Image src={Facebook} alt="..." />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/orras_ent"
        >
          <Image src={Twitter} alt="..." />
        </a>{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/orras_ent"
        >
          <Image src={Instagram} alt="..." />
        </a>
      </div>
      <div className="created-by">Copyright 2021 © Orras Entertainment</div>
    </div>
  )
}

export default Footer
