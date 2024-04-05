import React from 'react'
import Ads from '../../components/Ads/ads'
import image from '../../assets/images/Github - Original.png'
import image2 from '../../assets/images/Group22.png'
import image4 from '../../assets/images/image5.png'
import * as i from '../../assets/svgs/index'
import './footer.css'

export default function Footer({lang}) {
    return (
        <div>
            <div className="Footer">
                <Ads />

                <div className="text">
                   {lang.p}
                </div>

                <div className="links">
                    <li>
                        <a href="/">{lang.ul.li1}</a>
                    </li>
                    <li>
                        <a href="/">{lang.ul.li2}</a>
                    </li>
                    <li>
                        <a href="/">{lang.ul.li3}</a>
                    </li>
                    <li>
                        <a href="/">{lang.ul.li4}</a>
                    </li>
                    <li>
                        <a href="/">{lang.ul.li5}</a>
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
