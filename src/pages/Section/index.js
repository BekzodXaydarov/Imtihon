import React from 'react'
import Div from '../../components/Div'
import Card from '../../components/card/Card'
import Img from "../../assets/images/image 3.png";
import Img2 from "../../assets/images/image 2.png";
import Section_card from '../../components/section_card/section';
import Section_card2 from '../../components/section_card2/section_card2';
import Video from "../../assets/videos/video1.mp4";
import VideoComponent from '../../components/video/index';
import Ads from '../../components/Ads/ads';
import './section.css'


export default function Section({ lang }) {
    return (
        <section>
            <div className="section">
                <h3 className="title">{lang.h3}</h3>
                <p className="description">{lang.p}</p>
            </div>
            <div className="card_wrap">
                <Card
                    img={Img}
                    title={lang.cards.card_first.card_title}
                    descrition={lang.cards.card_first.card_description}
                />
                <Card
                    img={Img2}
                    title={lang.cards.card_second.card_title}
                    descrition={lang.cards.card_second.card_description}
                />
                <Card
                    img={Img}
                    title={lang.cards.card_third.card_title}
                    descrition={lang.cards.card_third.card_description}
                />
            </div>
            <hr />
            <div className="section_card_wrap">
                <Section_card
                    title={lang.card_text_first.card_text_title}
                    description={lang.card_text_first.card_text_description}
                    li1={lang.card_text_first.card_text_li}
                    li2={lang.card_text_first.card_text_li2}
                    li3={lang.card_text_first.card_text_li3}
                    li4={lang.card_text_first.card_text_li4}
                />
                <Section_card
                    title={lang.card_text_first.card_text_title}
                    description={lang.card_text_first.card_text_description}
                    li1={lang.card_text_first.card_text_li}
                    li2={lang.card_text_first.card_text_li2}
                    li3={lang.card_text_first.card_text_li3}
                    li4={lang.card_text_first.card_text_li4}
                />
            </div>
            <div className="vedio_div">
                <Div title={lang.blocks.block1} />
                <VideoComponent src={Video} className="boy" />
                <Div title={lang.blocks.block2} />
            </div>
            <div className="section_wrapper">
                <Section_card2
                    title={lang.card_text2.card_text_title}
                    description={lang.card_text2.card_text_description}
                />
                <Section_card2
                    title={lang.card_text3.card_text_title}
                    description={lang.card_text3.card_text_description}
                />
                <Section_card2

                    title={lang.card_text4.card_text_title}
                    description={lang.card_text4.card_text_description}
                />
                <br />
                <Div title={lang.blocks.block3} />
                <Ads />
                <br />
                <Div title={lang.blocks.block4} />
            </div>
        </section>
    )
}
