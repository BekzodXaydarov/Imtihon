import React from 'react'
import './card.css'

export default function Card({ img, title, descrition }) {
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className="card_body">
                <h3>{title}</h3>
                <p>{descrition}</p>
            </div>
        </div>
    )
}
