import Head from 'next/head'
import Timer from '../components/Countdown/Timer'
// import Optin from '../components/Optin/Optin'
import Preloader from '../components/Preloader/Preloader'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Orras | Comming Soon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>
          ORRAS
          <br />
          Coming Soon
        </h1>
        <Timer />
        {/* <Optin /> */}
        <Preloader />
      </div>
    </div>
  )
}
