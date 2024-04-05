import React from 'react'
import Ads from '../../components/Ads/ads'
import * as i from '../../assets/svgs/index'
import './tiktok.css'

export default function TikTok({ lang }) {
    return (
        <div className='TikTok' >
                <Ads prop={{borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"}} />
            <div className="tiktok_dowloand">
                <div className="tiktok_d_head">
                    <i.TikTok />
                </div>
                <p>{lang.h1}</p>
                <div className="tiktok_d_body">
                    <div className="dowloand">
                        <i.Dowloand />
                        <a href="/">{lang.a_link1}</a>
                   <div></div>
                    </div>
                    <div className="dowloand">
                        <i.Dowloand />
                        <a href="/">{lang.a_link2}</a>
                   <div></div>
                   
                    </div>
                    <div className="dowloand2">
                        <i.Icon />
                        <a href="/">{lang.a_link3}</a>
                   <div></div>
                   
                    </div>
                </div>
            </div>
            <div className="wrap">
                <h4>{lang.bold_titles.bold_title1}</h4>
                <p>{lang.texts.text1}</p>
                <p>{lang.texts.text2}</p>
                <p>{lang.texts.text3}</p>
                <div className='link'>
                    <span>{lang.link.title}</span><a href="/">{lang.link.a}</a>
                </div>
                <h4>{lang.bold_titles.bold_title2}</h4>
            </div>
        </div>
    )
}
