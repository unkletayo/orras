import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-links">
        <a href="!#">
          <AiFillFacebook />
        </a>
        <a href="!#">
          <AiFillTwitterCircle />
        </a>{' '}
        <a href="!#">
          <AiFillInstagram />
        </a>
      </div>
      <div className="created-b">Copyright 2021 © Orras Entertainment</div>
    </div>
  )
}

export default Footer
