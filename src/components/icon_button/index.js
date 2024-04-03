import { useState } from 'react'
import * as i from '../../assets/svgs/index'
export default function Icon_Button({open,setOpen}) {
    const [boolen,setBoolen] = useState(false)
    const handleCLick = () => {
        setBoolen(!boolen)
        setOpen(!open)
    }
    return(
        <>
        <button onClick={handleCLick} style={{border:"none",backgroundColor:"transparent",cursor:"pointer"}}>{
            boolen ? <i.Cheveron_up />:<i.Cheveron_down />
            }</button>
        </>
    )
}