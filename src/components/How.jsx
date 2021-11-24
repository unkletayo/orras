import Img from 'next/image'
import MusicIcon from '../../public/img/online-discussions.svg'

const How = () => {
  return (
    <>
      <div className="How">
        <div className="How-header">
          <h2 className="How-header">How We Make The World Listen To You</h2>
          <div className="line"></div>
        </div>
        <div className="How-cards">
          <div className="How-card">
            <div style={{ height: 40, width: 40 }} className="How-card-logo">
              <Img src={MusicIcon} alt="..." />
            </div>
            <div className="How-Card-text">
              <p>Online Distribution</p>
              <p>
                You are a star already, allow us to make you shine, just as you
                should. We have an extensive worldwide network for digital media
                distribution.
              </p>
            </div>
          </div>
          <div className="How-card">
            <div style={{ height: 40, width: 40 }} className="How-card-logo">
              <Img src={MusicIcon} alt="..." />
            </div>
            <div className="How-Card-text">
              <p>Music Video Promotion</p>
              <p>
                You have produced your banger music video. You have covered all
                bases, yet you are here we are the fix you have been searching
                for.
              </p>
            </div>
          </div>{' '}
          <div className="How-card">
            <div style={{ height: 40, width: 40 }} className="How-card-logo">
              <Img src={MusicIcon} alt="..." />
            </div>
            <div className="How-Card-text">
              <p>Music Video Promotion</p>
              <p>
                We did mention our extensive network of digital media
                distribution, now image On Air Media Publicity as that service
                on steroids.
              </p>
            </div>
          </div>{' '}
          <div className="How-card">
            <div style={{ height: 40, width: 40 }} className="How-card-logo">
              <Img src={MusicIcon} alt="..." />
            </div>
            <div className="How-Card-text">
              <p>Musical Event Organisation & Promotion</p>
              <p>
                There comes a time, the message of your music will spread so
                wide, concerts and roadshows will be the next stop, we have you
                covered that front as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default How
