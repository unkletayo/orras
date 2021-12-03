export const responsive = {
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

export const carouselParams = {
  swipeable: true,
  draggable: true,
  showDots: false,
  additionalTransfrom: 0,
  arrows: true,
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
  // responsive: responsive,
  showDots: true,
  sliderClass: '',
  slidesToSlide: 1,
  itemClass: 'carousel-item-padding-40-px',
}
