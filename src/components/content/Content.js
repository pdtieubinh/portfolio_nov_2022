import './Content.css';
import Tooltip from '@mui/material/Tooltip';
import { TriggerHover } from './info';

/* Contents are buttons inside Item grids that trigger information panel */
export default function Content({ type, script }) {
    if (type.toLowerCase() === 'experiences') {
        return (
            <div className='Content'>
                <TriggerHover type={type} script={script}/>
            </div>
          );
    } else if (type.toLowerCase() === 'educations') {
        return (
            <div className='Content'>
                <TriggerHover type={type} script={script}/>
            </div>
          );
    } else {
        return (
            <div className='Content ContentCerti'>
                <TriggerHover type={type} script={script}/>
            </div>
          );
    }
  
}