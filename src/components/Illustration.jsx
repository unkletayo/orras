import Image from 'next/image'
import MusicBg from '../assets/images/Artiste.png'
import TransPerformance from '../assets/images/Trans Perfomance 2.png'
import scottGiri from '../assets/images/scott-giri.png'
const Illustration = () => {
  return (
    <div className="Illustration">
      <div className="Illustration-art">
        <Image
          className="Illustration-art-img"
          src={TransPerformance}
          alt="..."
        />
      </div>

      <div className="Illustration-talents">
        <h2>Talents We Have Worked With</h2>

        <div className="talents">
          <div>
            <Image  className="talent-image" src={scottGiri} alt="..." />
            <p>King Bernard</p>
          </div>
          <div>
            <Image className="talent-image" src={scottGiri} alt="..." />
            <p>King Bernard</p>
          </div>{' '}
          <div>
            <Image className="talent-image" src={scottGiri} alt="..." />
            <p>King Bernard</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Illustration
