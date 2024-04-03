import React, { useState } from 'react'
import Icon_Button from '../icon_button'
import './section_card2.css'

export default function Section_card2({ title, description}) {
    const [open,setOpen] = useState(false)
    return (
        <>
                <div className="text_h3p">
                <div className="select">
                 <h3 className="ctr">{title}</h3>
                <Icon_Button open={open} setOpen={setOpen} />
                </div>
                <div className={`body ${open ? "open":""}`}>
                <hr />
                <p className="when">{description}</p>
                </div>
            </div>
        </>
    )
}
