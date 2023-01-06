// import { useEffect, useRef, useState } from 'react';
import './Content.css';
import { CerInfo, ExpInfo, EduInfo, MooInfo } from './textInfo';

// The popup panel (tooltip) containing text info
export const InfoPanel = ({ type, script }) => {

    // const marginRight = 10

    // const [left, setLeft] = useState('auto')

    // const ref = useRef(null)

    // useEffect(() => {
    //     // Get current values
    //     const infoLeft = ref.current.offsetLeft
    //     const infoWidth = ref.current.offsetWidth
    //     const windowWidth = window.outerWidth // not inner width, which is dependent by children's overflow
        
    //     // Calculate new values
    //     if (infoLeft + infoWidth >= windowWidth + marginRight) {
    //         setLeft(`${windowWidth - infoWidth - marginRight}px`)
    //     }
    // }, [])

    return (
        <div 
        className='InfoPanel' 
        //ref={ref} 
        //style={{'left': left}}
        >
            {(type.toLowerCase() === 'certified exams') ? <CerInfo script={script}/>
            : (type.toLowerCase() === 'experiences') ? <ExpInfo script={script}/>
            : (type.toLowerCase() === 'educations') ? <EduInfo script={script}/>
            : (type.toLowerCase() === 'mooc') ? <MooInfo script={script}/>
            : null}
        </div>
    )
}
