import React, { useMemo } from 'react'
import * as i from "../../assets/svgs/index";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/redux'
import { IoMdArrowRoundDown } from 'react-icons/io';
import Ads from '../../components/Ads/ads';
import Language from '../../language/Language.json'
import './header.css'

export default function Header({ lang }) {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="header">
                <div className="left">
                    <FaBars />
                </div>
                <div className="right">
                    <select
                        name="name"
                        id="id"
                        onChange={(e) => dispatch(setLanguage(e.target.value))}
                    >
                        {Language.map((x) => {
                            return (
                                <option key={x.id} value={x.title}>
                                    {x.title}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="download">
                <i.Logo />
                <h1>{lang.h1}</h1>
                <p>{lang.p}</p>

                <form>
                    <input type="text" placeholder={lang.input_search} />
                    <button>
                        {lang.button_search} <IoMdArrowRoundDown />
                    </button>
                </form>
                <a href="/">
                    {" "}
                    <i.Information_Circle />
                    {lang.a_link}
                </a>
                <Ads />
            </div>
        </div>
    )
}
