import './Content.css';
import { useState } from "react"
import { InfoPanel } from './InfoPanel';
import Popper from '@mui/material/Popper';

// Full content to be used elsewhere
export default function Content({ type, script }) {

    const [anchorEl, setAnchorEl] = useState(null);

    const hover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const unhover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    // const [hovered, setHovered] = useState(false)

    // // Calculate everythin on hover
    // const hover = () => { setHovered(true) }
    // const unhover = () => { setHovered(false) }

    return (
        <>
        <div 
        className={`Content ${ (type.toLowerCase() === 'certified exams') ? 'ContentCerti': ''}`}
        onMouseLeave={unhover}>
            <img alt={`${script.id} logo`} src={ script.link } onMouseEnter={hover}/>
            {/* (hovered) ? <InfoPanel type={type} script={script}/> : null */}
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <InfoPanel type={type} script={script}/>
            </Popper>
        </div>
        
    </>
    )
}