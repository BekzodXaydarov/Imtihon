import React from 'react'
import Img from '../../assets/images/Ellipse 9.png'
import './section_card.css'

export default function Section_card({ title, description, li1, li2, li3, li4, Change }) {
    return (
        <>
            {
                Change ? <div className='container_textdiv'>
                    < p className='textdiv_p1' >
                        {title}
                    </p >
                    <hr />
                    <p className='textdiv_p2'>{description}</p>
                    <div className='textdiv_card'>
                        <div className='card_textp'>
                            <div className='textp_radius'></div><p className='textp_p'>{li1}</p>
                        </div>
                        <div className='card_textp'>
                            <div className='textp_radius'></div><p className='textp_p'>{li2}</p>
                        </div>
                        <div className='card_textp'>
                            <div className='textp_radius'></div><p className='textp_p'>{li3}</p>
                        </div>
                        <div className='card_textp'>
                            <div className='textp_radius'></div><p className='textp_p'>{li4}</p>
                        </div>
                    </div>
                </div > : <div className='container_textdiv'>
                    <p className='textdiv_p1'>
                        How to download TikTok videos online from the address bar?
                    </p>
                    <hr />
                    <p className='textdiv_p2'>Our TikTok Downloader works on any device (including, but not limited to Android, iOS, Windows, Linux, and MacOS). You do not need to install any software on your mobile phone or PC, all that you need is only a video link.</p>
                    <div className='textdiv_card'>
                        <div className='card_textp'>
                            <img src={Img} alt="" /><p className='textp_p'>Open Tik Tok app on your phone/or Web on your browser.</p>
                        </div>
                        <div className='card_textp'>
                            <img src={Img} alt="" /><p className='textp_p'>Choose whatever video you want to download.</p>
                        </div>
                        <div className='card_textp'>
                            <img src={Img} alt="" /><p className='textp_p'>Click to the Share button at the right bottom.</p>
                        </div>
                        <div className='card_textp'>
                            <img src={Img} alt="" /><p className='textp_p'>Click the Copy Link button.</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}