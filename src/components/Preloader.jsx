import { motion } from 'framer-motion'
import Image from 'next/image'
import PRE from '../../public/img/Loader.png'

const buttonVariants = {
  animate: {
    scale: 1.2,
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
}
const Preloader = () => {
  return (
    <div className="Preloader">
      <div className="image-container"
      >
        <Image src={PRE} alt="..." />
      </div>
    </div>


    //     <motion.div className="Preloader">
    //   <motion.div
    //     variants={buttonVariants}
    //     animate="animate"
    //     className="image-container"
    //   >
    //     <Image src={PRE} alt="..." />
    //   </motion.div>
    // </motion.div>
  )
}

export default Preloader
