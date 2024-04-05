import React, { useState } from 'react'
import Icon_Button from '../icon_button'
import * as i from '../../assets/svgs/index'
import './section_card.css'

export default function Section_card({ title, description, li1, li2, li3, li4 }) {
    const [open,setOpen] = useState(false)
    return (
        <>
           <div className='container_textdiv'>
                    <div className='container_textdiv_head'>
                    < p className='textdiv_p1' >
                        {title}
                    </p >
                    <Icon_Button open={open} setOpen={setOpen} />
                        </div> 
                   <div className={`wrapper ${open ? "open":""}`}>
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
                   </div>
                </div > 
            
        </>
    )
}
