import React from 'react'
import Ads from '../../components/Ads/ads'
import image from '../../assets/images/Github - Original.png'
import image2 from '../../assets/images/Group22.png'
import image4 from '../../assets/images/image5.png'
import * as i from '../../assets/svgs/index'
import './footer.css'

export default function Footer() {
    return (
        <div>
            <div className="Footer">
                <Ads />

                <div className="text">
                    This site is not owned by “Bytedance” and is not affiliated in any way
                    with “Bytedance”, nor is it an advertisement for the “TikTok” app or
                    “Bytedance” company.
                </div>

                <div className="links">
                    <li>
                        <a href="/">Online Status</a>
                    </li>
                    <li>
                        <a href="/">FAQ</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li>
                        <a href="/">Terms of Service</a>
                    </li>
                    <li>
                        <a href="/">Privacy Policy</a>
                    </li>
                </div>

                <div className="github">
                    <span>
                        <img src={image} alt="" />
                        Github
                    </span>
                    <span>
                        <img src={image2} alt="" />
                        Youtube
                    </span>
                    <span>
                        <i.Reddit />
                        Reddit
                    </span>
                </div>

                <p>© 2022 DuckTik. All rights reserved</p>
                <img className="image" src={image4} alt="" />
            </div>
        </div>
    )
}
