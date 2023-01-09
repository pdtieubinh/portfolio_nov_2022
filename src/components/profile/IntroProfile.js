import SectionFrame from '../frame/SectionFrame'
import './IntroProfile.css'
import Grid from '@mui/material/Grid';

export default function IntroProfile({ title, scripts }) {
    return (
        <SectionFrame>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <ProfileAvatar/>
                </Grid>
            </Grid>
        </SectionFrame>
    )
}

function ProfileAvatar() {
    return (
        <div className='ProfileAvatar'>
            <img alt='Avatar' src='https://res.cloudinary.com/dbweq69kp/image/upload/v1672685748/Certificates/aws_phg9po.png'/>
            <p><b>Binh Pham</b></p>
            
        </div>
    )
}