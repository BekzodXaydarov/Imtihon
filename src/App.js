import React, { useMemo } from "react";
import Card from "./components/card/Card";
import Img from "./assets/images/image 3.png";
import Img2 from "./assets/images/image 2.png";
import "./App.css";
import Section_card from "./components/section_card/section";
import Div from "./components/Div";
import VideoComponent from "./components/video";
import Video from "./assets/videos/video1.mp4";
import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowRoundDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import Ads from "./components/Ads/ads";
import image from "./assets/images/Github - Original.png";
import image2 from "./assets/images/Group22.png";
import image3 from "./assets/images/Vector.png";
import image4 from "./assets/images/image5.png";
import * as i from "./assets/svgs/index";
import Section_card2 from "./components/section_card2/section_card2";
import Language from "./language/Language.json";
import { setLanguage } from "./redux/redux";

export default function App() {
  const ReduxLang = useSelector((state) => state.Redux.value);
  const dispatch = useDispatch();
  const lang = useMemo(
    () => Language.filter((f) => f.title === ReduxLang),
    [ReduxLang,localStorage.getItem('language')])[0].children;
    localStorage.setItem('language','en')
    console.log(ReduxLang);
    console.log(lang);
  return (
    <div className="App">
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
          <h1>{lang.Header.h1}</h1>
          <p>{lang.Header.p}</p>

          <form>
            <input type="text" placeholder={lang.Header.input_search} />
            <button>
              {lang.Header.button_search} <IoMdArrowRoundDown />
            </button>
          </form>
          <a href="/">
            {" "}
            <i.Information_Circle />
            {lang.Header.a_link}
          </a>
          <Ads prop={{ width: "960px" }} />
        </div>
      </div>
      <section>
        <div className="section">
          <h3 className="title">{lang.Section.h3}</h3>
          <p className="description">{lang.Section.p}</p>
        </div>
        <div className="card_wrap">
          <Card
            img={Img}
            title={lang?.Section.cards.card_first.card_title}
            descrition={lang.Section.cards.card_first.card_description}
          />
          <Card
            img={Img2}
            title={lang.Section.cards.card_second.card_title}
            descrition={lang.Section.cards.card_second.card_description}
          />
          <Card
            img={Img}
            title={lang.Section.cards.card_third.card_title}
            descrition={lang.Section.cards.card_third.card_description}
          />
        </div>
        <hr />
        <div className="section_card_wrap">
          <Section_card
            title={lang.Section.card_text_first.card_text_title}
            description={lang.Section.card_text_first.card_text_description}
            li1={lang.Section.card_text_first.card_text_li}
            li2={lang.Section.card_text_first.card_text_li2}
            li3={lang.Section.card_text_first.card_text_li3}
            li4={lang.Section.card_text_first.card_text_li4}
          />
          <Section_card
            title={lang.Section.card_text_first.card_text_title}
            description={lang.Section.card_text_first.card_text_description}
            li1={lang.Section.card_text_first.card_text_li}
            li2={lang.Section.card_text_first.card_text_li2}
            li3={lang.Section.card_text_first.card_text_li3}
            li4={lang.Section.card_text_first.card_text_li4}
          />
        </div>
        <div className="vedio_div">
          <Div title={lang.Section.blocks.block1} />
          <VideoComponent src={Video} className="boy" />
          <Div title={lang.Section.blocks.block2} />
        </div>
        <div className="section_wrapper">
        <Section_card2
          title={lang.Section.card_text2.card_text_title}
          description={lang.Section.card_text2.card_text_description}
        />
        <Section_card2
          title={lang.Section.card_text3.card_text_title}
          description={lang.Section.card_text3.card_text_description}
        />
        <Section_card2
        
          title={lang.Section.card_text4.card_text_title}
          description={lang.Section.card_text4.card_text_description}
        />
        <br />
        <Div title={lang.Section.blocks.block3}    />
        <Ads  prop={{ width: "960px" }} />
        <br />
        <Div title={lang.Section.blocks.block4}    />
        </div>
      </section>
      <div className="Footer">
        <Ads  prop={{ width: "960px" }} />

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
            <img src={image3} alt="" />
            Reddit
          </span>
        </div>

        <p>© 2022 DuckTik. All rights reserved</p>
        <img className="image" src={image4} alt="" />
      </div>
    </div>
  );
}
