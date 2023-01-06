import './Content.css';
import { useState } from "react"
import { InfoPanel } from './InfoPanel';

// Full content to be used elsewhere
export default function Content({ type, script }) {
    const [hovered, setHovered] = useState(false)

    // Calculate everythin on hover
    const hover = () => { setHovered(true) }
    const unhover = () => { setHovered(false) }

    return (
        <div 
        className={`Content ${ (['certified exams', 'mooc'].includes(type.toLowerCase())) ? 'ContentCerti': ''}`}
        onMouseEnter={hover} onMouseLeave={unhover}>
            <img alt={`${script.id} logo`} src={ script.link }/>
            { (hovered) ? <InfoPanel type={type} script={script}/> : null }
        </div>
    )
}