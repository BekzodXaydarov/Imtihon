import React from 'react'
import Card from './components/card/Card'
import Img from './assets/images/image 3.png'
import Img2 from './assets/images/image 2.png'
import './App.css'
import Section_card from './components/section_card/section'
import Download from './yuklash/Download'
// import boy from './assets/images/Rectangle 8.png'
import Div from './components/Div'
import VideoComponent from './components/video'
import Video from './assets/videos/video1.mp4'
import Footer from './ads/ADS'
// import { useDispatch } from 'react-redux'
// import { setLang } from './redux/redux'

export default function App() {
  // const dispatch = useDispatch()
  // dispatch(setLang(1))
  return (
    <div className='App'>
      <Download />
      <section>
        <div className='section'>
          <h3 className='title'>How to start Tik Tok video download with our service?</h3>
          <p className='description'>To save TikTok video using SaveFrom.net, you need to follow three short steps. Have a look at them:</p>
        </div>
        <div className="card_wrap">
          <Card img={Img} title={"1. Copy the URL"} descrition={"Open the Tik Tok page with a video that you want to save, copy its URL and go back to SaveFrom.net."} />
          <Card img={Img2} title={"2. Paste the URL onto the input field"} descrition={"Paste the URL of the into the input field of the top of the page and click on the right side the button to run the downloading process."} />
          <Card img={Img} title={"3. Click the download button"} descrition={"To notice that by default the best quality will be selected but if you would like a specific quality or format, there are several options you can choose from."} />
        </div>
        <hr />
        <Section_card title={'How to download TikTok videos online from the address bar?'} description={'Our TikTok Downloader works on any device (including, but not limited to Android, iOS, Windows, Linux, and MacOS). You do not need to install any software on your mobile phone or PC, all that you need is only a video link.'} li1={'Open Tik Tok app on your phone/or Web on your browser.'} li2={'Choose whatever video you want to download.'} li3={'Click to the Share button at the right bottom.'} li4={'Click the Copy Link button.'} Change={true} />
        <Section_card title={'How to download TikTok videos online from the address bar?'} description={'Our TikTok Downloader works on any device (including, but not limited to Android, iOS, Windows, Linux, and MacOS). You do not need to install any software on your mobile phone or PC, all that you need is only a video link.'} li1={'Open Tik Tok app on your phone/or Web on your browser.'} li2={'Choose whatever video you want to download.'} li3={'Click to the Share button at the right bottom.'} li4={'Click the Copy Link button.'} Change={false} />
        <div className="vedio_div">
          <Div title={'Video instruction'} />
          <VideoComponent src={Video} className="boy" />
          <Div title={'Questions & Answers'} />
        </div>
      </section>
      <Footer />
    </div>)
}
