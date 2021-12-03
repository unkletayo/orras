import Img from 'next/image'
import DownloadIcon from '../../public/img/online-discussions.svg'
import MusicIcon from '../../public/img/music.svg'
import AirMedia from '../../public/img/media.svg'
import MusicIcon2 from '../../public/img/music-icon.svg'
const servicesData = [
  {
    image: DownloadIcon,
    title: 'Online Distribution',
    description: `You are a star already, allow us to make you shine, just as you
              should. We have an extensive worldwide network for digital media
              distribution.`,
  },

  {
    image: MusicIcon,
    title: 'Music Video Promotion',
    description: `You have produced your banger music video. You have covered all
              bases, yet you are here we are the fix you have been searching
              for.`,
  },
  {
    image: AirMedia,
    title: 'On Air Media Publicity',
    description: `We did mention our extensive network
of digital media distribution, now image
On Air Media Publicity as that service 
on steroids.`,
  },
  {
    image: MusicIcon2,
    title: 'Musical Event Organisation & Promotion',
    description: `There comes a time, the message of your music
will spread so wide, concerts and roadshows 
will be the next stop, we have you covered 
that front as well.`,
  },
]
const Services = () => {
  return (
    <div id="services-section" className="How">
      <div className="How-header">
        <h2 className="How-header">How We Make The World Listen To You</h2>
        <div className="line"></div>
      </div>
      <div className="How-cards">
        {servicesData.map((data, idx) => (
          <div key={idx} className="How-card">
            <div style={{ height: 40, width: 40 }} className="How-card-logo">
              <Img src={data.image} alt="..." />
            </div>
            <div className="How-Card-text">
              <p className="card-title">{data.title}</p>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
