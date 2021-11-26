import Image from 'next/image'
import MusicBg from '../../public/img/Artiste.png'
import TransPerformance from '../../public/img/Trans Perfomance 2.png'
import scottGiri from '../../public/img/scott-giri.png'
const Work = () => {
  return (
    <div id="work-section" className="Illustration">
      <div className="Illustration-art">
        <Image
          className="Illustration-art-img"
          src={TransPerformance}
          alt="..."
          quality="1"
          unoptimized={true}
          objectFit="contain"
        />
      </div>

      <div className="Illustration-talents">
        <div className="header">
          <h2>Talents We Have Worked With</h2>
          <div className="line"></div>
        </div>

        <div className="talents">
          <div className="talent">
            <Image className="talent-image" src={scottGiri} alt="..." />
            <p>King Bernard</p>
          </div>
          <div className="talent">
            <Image className="talent-image" src={scottGiri} alt="..." />
            <p>King Bernard</p>
          </div>{' '}
          <div className="talent">
            <Image className="talent-image" src={scottGiri} alt="..." />
            <p>King Bernard</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
