import './Content.css'
import { useState } from "react"

export function TriggerHover({ type, script }) {

    const [hovered, setHovered] = useState(false)
    const [infoPos, setInfoPos] = useState({left: 0, top: 0})

    const hover = (evt) => {
        setHovered(true)
        setInfoPos({left: evt.target.offsetLeft, top: evt.target.offsetTop})
        console.log('Left', evt.target.offsetLeft, window.innerWidth)
        console.log(infoPos.left + infoLength + infoMargin - window.innerWidth)
    }
    const unhover = (evt) => {
        setHovered(false)
    }

    const infoLength = 300 //px, can find this in Content.css
    const infoMargin = 10 //px
    
    return (
        <>
            <img 
                alt={`${script.id} logo`} 
                src={ script.link }
                onMouseEnter={hover}
                onMouseLeave={unhover}
            />
            { (hovered) ? <InfoPanel 
                style={{
                        'left': `${infoPos.left - (Math.max(infoPos.left + infoLength + infoMargin - window.innerWidth, 0))}px`, 
                        'top': `${infoPos.top + 60}px`
                    }}
                /> : null }
        </>
    )
}

function InfoPanel({ style }) {
    return (
        <div className='InfoPanel' style={style}>

        </div>
    )
}