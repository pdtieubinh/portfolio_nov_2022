import SectionFrame from '../frame/SectionFrame'
import './IntroProfile.css'
import Grid from '@mui/material/Grid';

export default function IntroProfile({ title, scripts }) {
    return (
        <SectionFrame>
            <ProfileAvatar/>
        </SectionFrame>
    )
}

function ProfileAvatar() {
    return (
        <div className='ProfileAvatar'>
            <img 
            alt='Avatar' 
            src='https://res.cloudinary.com/dbweq69kp/image/upload/v1673352745/Portfolio/ava_crd7or.jpg'/>
            <p><b>Binh Pham</b></p>
        </div>
    )
}