import React from 'react'
import Card from './components/card/Card'
import Img from './assets/images/image 3.png'
import Img2 from './assets/images/image 2.png'
import './App.css'
import Section_card from './components/section_card/section'
import Div from './components/Div'
import VideoComponent from './components/video'
import Video from './assets/videos/video1.mp4'
import icond from './assets/images/Icon.png'
import { IoMdArrowRoundDown } from "react-icons/io";
import { FaBars } from 'react-icons/fa'
import Ads from './components/Ads/ads';
import image from "./assets/images/Github - Original.png"
import image2 from "./assets/images/Group22.png"
import image3 from "./assets/images/Vector.png"
import image4 from "./assets/images/image5.png"
import * as i from './assets/svgs/index'

export default function App() {
  return (
    <div className='App'>
      <div>
      <div className='header'>
                <div className="left">
                    <FaBars />
                </div>
                <div className="right">
                    <select name="name" id="id">
                        <option value="uz">uz</option>
                        <option value="en">en</option>
                    </select>
                </div>
            </div>
            <div className='download'>
              <i.Logo />
                <h1>DuckTik</h1>
                <p>A ducky that download TikTok video without watermark.</p>

                <form>
                    <input type="text" placeholder='Paste TikTok video link here' />
                    <button>Download <IoMdArrowRoundDown />
                    </button>
                </form>
                <a href='#'> <i.Information_Circle /> How to download?</a>
                <Ads />
            </div>
      </div>
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
<div className='section_card_wrap'>
<Section_card title={'How to download TikTok videos online from the address bar?'} description={'Our TikTok Downloader works on any device (including, but not limited to Android, iOS, Windows, Linux, and MacOS). You do not need to install any software on your mobile phone or PC, all that you need is only a video link.'} li1={'Open Tik Tok app on your phone/or Web on your browser.'} li2={'Choose whatever video you want to download.'} li3={'Click to the Share button at the right bottom.'} li4={'Click the Copy Link button.'} Change={true} />
<Section_card title={'How to download TikTok videos online from the address bar?'} description={'Our TikTok Downloader works on any device (including, but not limited to Android, iOS, Windows, Linux, and MacOS). You do not need to install any software on your mobile phone or PC, all that you need is only a video link.'} li1={'Open Tik Tok app on your phone/or Web on your browser.'} li2={'Choose whatever video you want to download.'} li3={'Click to the Share button at the right bottom.'} li4={'Click the Copy Link button.'} Change={false} />
</div>
        <div className="vedio_div">
          <Div title={'Video instruction'} />
          <VideoComponent src={Video} className="boy" />
          <Div title={'Questions & Answers'} />
        </div>
        <div className="text_h3p">
                <div className="select"> <h3 className="ctr">Does you store downloaded videos or keep a copy of videos?</h3>
                    <img src={icond} alt="" />  
                </div>
                <hr />
                <p className="when">When you're downloading files, they are usually saved into whatever folder you have set as your default. Your browser normally sets this folder for you. In browser settings, you can change and choose manually the destination folder for your downloaded TikTok videos.</p>
            </div>
            <div className="text_h3p">
                <div className="select"> <h3 className="ctr">Does you store downloaded videos or keep a copy of videos?</h3>
                    <img src={icond} alt="" />
                </div>
                <hr />
                <p className="when">When you're downloading files, they are usually saved into whatever folder you have set as your default. Your browser normally sets this folder for you. In browser settings, you can change and choose manually the destination folder for your downloaded TikTok videos.</p>
            </div>
      </section>
      <div className='Footer'>
      <Ads prop={{ width: "70%", height: "30%" }} />

      <div className="text">
        This site is not owned by “Bytedance” and is not affiliated in any way with “Bytedance”, nor is it an advertisement for the “TikTok” app or “Bytedance” company.
      </div>

      <div className="links">
        <a href="#">Online Status</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>

      <div className="github">
        <span><img src={image} alt="" />Github</span>
        <span><img src={image2} alt="" />Youtube</span>
        <span><img src={image3} alt="" />Reddit</span>
      </div>

      <p>© 2022 DuckTik. All rights reserved</p>
      <img className='image' src={image4} alt="" />
    </div>
    </div>)
}
