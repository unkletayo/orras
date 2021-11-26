import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import Slide1 from '../../public/img/slide1.png'
import Slide2 from '../../public/img/slide2.png'
import Slide3 from '../../public/img/slide3.png'
import Slide4 from '../../public/img/slide4.png'

const images = [Slide1, Slide2, Slide3, Slide4]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const carouselParams = {
  swipeable: true,
  draggable: true,
  showDots: true,
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: '',
  containerClass: 'carousel-container',
  dotListClass: '',
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: '',
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: true,
  sliderClass: '',
  slidesToSlide: 1,
  itemClass: 'carousel-item-padding-40-px',
}
const Slides = () => {
  return (
    <div className="Slides">
      <Carousel {...carouselParams}>
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
