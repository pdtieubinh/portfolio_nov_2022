import './Content.css'
import { useEffect, useState } from "react"

export function TriggerHover({ type, script }) {
    const [infoLength, setInfoLength] = useState(350)
    const [infoMargin, setInfoMargin] = useState(5)
    const [hovered, setHovered] = useState(false)
    const [infoPos, setInfoPos] = useState({left: 0, top: 0})

    const hover = (evt) => {
        setHovered(true)
        setInfoPos({left: evt.target.offsetLeft, top: evt.target.offsetTop})
        setInfoLength(Math.min(350, window.innerWidth))
        setInfoMargin((window.innerWidth > 350) ? 5 : 0)
    }
    const unhover = () => {
        setHovered(false)
    }

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
                        'top': `${infoPos.top + 60}px`,
                        'width': Math.min(infoLength, window.innerWidth)
                    }}
                type={type}
                script={script}
                /> : null }
        </>
    )
}

const dateToString = (date) => {
    const dateStr = date.toString().split(' ')
    const month = dateStr[1]
    const year = dateStr[3]
    return `${month} ${year}`
}

function InfoPanel({ style, type, script }) {
    if (type.toLowerCase() === 'experiences') {
        return (
            <div className='InfoPanel' style={style}>
                <p>
                    <b>{script.position}</b> @ <b>{script.id}</b>   
                </p>
                <p>{dateToString(script.from)} - {dateToString(script.to)} &middot; {script.type}</p>
            </div>
        )
    }
}