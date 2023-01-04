import './Content.css'
import { useState } from "react"

export function TriggerHover({ type, script }) {

    const [hovered, setHovered] = useState(false)
    const hover = () => setHovered(true)
    const unhover = () => setHovered(false)

    return (
        <>
            <img 
            alt={`${script.id} logo`} 
            src={ script.link }
            onMouseEnter={hover}
            onMouseLeave={unhover}
            />
            <InfoPanel shown={hovered}/>
        </>
        
    )
}

export function InfoPanel({ shown }) {
    return (
        <div className={`Info ${(shown) ? 'InfoShown' : 'InfoHide'}`}>
            Hehe
        </div>
    )
}