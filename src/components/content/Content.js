import './Content.css';
import Tooltip from '@mui/material/Tooltip';

/* Contents are buttons inside Item grids that trigger information panel */
export default function Content({ type, script }) {
    if (type.toLowerCase() === 'experiences') {
        return (
            <div className='Content'>
                <Tooltip title={`${script.position} @ ${script.id}`}>
                    <img alt={`${script.id} logo`} src={ script.link }/>
                </Tooltip>
            </div>
          );
    } else if (type.toLowerCase() === 'educations') {
        return (
            <div className='Content'>
                <Tooltip title={`${script.degree} @ ${script.id}`}>
                    <img alt={`${script.id} logo`} src={ script.link }/>
                </Tooltip>
            </div>
          );
    } else {
        return (
            <div className='Content ContentCerti'>
                <Tooltip title={`${script.id}`}>
                    <img alt={`${script.id} logo`} src={ script.link }/>
                </Tooltip>
            </div>
          );
    }
  
}