import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { carouselParams } from '../shared/carouselData'
import Slide1 from '../../public/img/slide1.png'
import Slide2 from '../../public/img/slide2.png'
import Slide3 from '../../public/img/slide3.png'
import Slide4 from '../../public/img/slide4.png'

const images = [Slide1, Slide2, Slide3, Slide4, Slide2, Slide4]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1337 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1336, min: 769 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 426 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const carouselItem = {
  ...carouselParams,
  responsive,
}

const Slides = () => {
  return (
    <div id="work-section" className="Slides">
      <Carousel {...carouselItem}>
        {images.map((img, idx) => (
          <div key={idx}>
            <Image
              unoptimized={true}
              height="300"
              width="300"
              objectFit={`cover`}
              src={img}
              alt={`slide`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Slides
