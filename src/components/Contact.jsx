import Image from 'next/image'
import RightArrow from '../../public/img/arrow-right.png'

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-header">
        <h2>Are You Ready For the World?</h2>
      </div>
      <p className="Contact-info">
        The world is ready for you, you must and cannot be silenced, Lets get
        you out there today.
      </p>

      <div className="Contact-button">
        <button>
          <span>Let’s Begin!</span>
          <Image src={RightArrow} alt="..." />{' '}
        </button>
      </div>
    </div>
  )
}

export default Contact
