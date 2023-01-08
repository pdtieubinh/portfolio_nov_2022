import Grid from '@mui/material/Grid';
import Section from '../section/Section';
import { moocs, educations } from '../../script/scripts';
import ChartSection from '../charts/ChartSection';
import { EduMoocTopicChart, EduMoocProviderChart, EduSchoolGPAChart } from '../charts/edu';

export default function EduSub() {
    return (
        <Grid container spacing={2}>
            {/* -> Show all educations */}
            <Section title="Educations" scripts={ educations }/>

            <ChartSection title="Undergraduate Studies">
                <EduSchoolGPAChart xs={12} md={12} id={1}/>
            </ChartSection>
            
            {/* -> Show all certificates */}
            <Section title="MOOC" scripts={ moocs }/>

            <ChartSection title="MOOC Analytics">
                <EduMoocTopicChart xs={6} md={12} id={1}/>
                <EduMoocProviderChart xs={6} md={12} id={2}/>
            </ChartSection>
        </Grid>
    )
}