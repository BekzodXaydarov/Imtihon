import React from 'react'
import "./ADS.css"
import image from "../assets/images/Github - Original.png"
import image2 from "../assets/images/Group22.png"
import image3 from "../assets/images/Vector.png"
import image4 from "../assets/images/image5.png"
import Ads from '../components/Ads/ads'

function Footer() {
  return (
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
        <span><img src={image} alt="" />GITHUB</span>


        <span><img src={image2} alt="" />YOUTUBE</span>

        <span><img src={image3} alt="" />REDDIT</span>
      </div>

      <p>© 2022 DuckTik. All rights reserved</p>
      <img className='image' src={image4} alt="" />
    </div>
  )
}

export default Footer