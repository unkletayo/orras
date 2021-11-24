import Image from 'next/image'

import Slide1 from '../../public/img/slide1.png'
import Slide2 from '../../public/img/slide2.png'
import Slide3 from '../../public/img/slide3.png'
import Slide4 from '../../public/img/slide4.png'

const images = [Slide1, Slide2, Slide3, Slide4]

const Slides = () => {
  return (
    <div className="Slides">
      {images.map((img, idx) => (
        <div key={idx}>
          <Image src={img} alt={`slide`} />
        </div>
      ))}
    </div>
  )
}

export default Slides
