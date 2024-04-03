import React from 'react'
import { IoMdArrowRoundDown } from "react-icons/io";
import { FaBars } from 'react-icons/fa'
import image from "../assets/images/rubber-duck 1.png"
import "./Download.css"
import Ads from '../components/Ads/ads';

function Download() {
    return (
        <>
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
                <img src={image} alt="" />
                <h1>DuckTik</h1>
                <p>A ducky that download TikTok video without watermark.</p>

                <div className="input">
                    <input type="text" placeholder='Paste TikTok video link here' />
                    <button>Download <IoMdArrowRoundDown />
                    </button>
                </div>
                <a href='#'>How to download?</a>
                <Ads />
            </div>
        </>
    )
}

export default Download