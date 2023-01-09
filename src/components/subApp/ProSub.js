import Grid from '@mui/material/Grid';
import Section from '../section/Section';
import { certified } from '../../script/scripts';
import ChartSection from '../charts/ChartSection';
import { ProCertifiedByChart, ProCertifiedTopicChart } from '../charts/pro';
import IntroProfile from '../profile/IntroProfile';

export default function ProSub() {
    return (
        <Grid container spacing={2}>
            <IntroProfile/>

            {/* -> Show all certificates */}
            <Section title="Certified Exams" scripts={ certified }/>

            <ChartSection title="Exams Analytics">
                <ProCertifiedTopicChart xs={6} md={12} id={1}/>
                <ProCertifiedByChart xs={6} md={12} id={2}/>
            </ChartSection>
        </Grid>
    )
}