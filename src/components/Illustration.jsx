import Image from 'next/image'
import MusicBg from '../../public/img/Artiste.png'
import TransPerformance from '../../public/img/Trans Perfomance 2.png'
import scottGiri from '../../public/img/scott-giri.png'
import Benard from '../../public/img/benard.png'
import GmbBoss from '../../public/img/gmb-boss.png'

const artisteData = [
  {
    image: Benard,
    name: 'King Bernard',
  },
  {
    image: scottGiri,
    name: 'Scott Giri',
  },
  {
    image: GmbBoss,
    name: 'GMG Boss',
  },
]
const Work = () => {
  return (
    <div className="Illustration">
      <div className="Illustration-art">
        <Image
          className="Illustration-art-img"
          src={TransPerformance}
          alt="..."
          quality="1"
          unoptimized={true}
          objectFit="cover"
        />
      </div>

      <div className="Illustration-talents">
        <div className="header">
          <div className="heading">
            Talents We Have <br /> Worked With
          </div>
          <div className="line"></div>
        </div>

        <div className="talents">
          {artisteData.map((data, idx) => (
            <div key={idx} className="talent">
              <Image
                 quality="1"
              unoptimized={true}
              objectFit="contain"
                className="talent-image"
                src={data.image}
                alt={data.name}
              />
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
