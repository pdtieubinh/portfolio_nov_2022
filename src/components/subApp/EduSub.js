import Grid from '@mui/material/Grid';
import Section from '../section/Section';
import { certificates, educations } from '../../script/scripts';
import ChartSection from '../charts/ChartSection';
import { ExpRateChart, ExpTimeChart, ExpTimelineChart } from '../charts/exp';

export default function EduSub() {
    return (
        <Grid container spacing={2}>
            {/* -> Show all certificates */}
            <Section title="Certificates" scripts={ certificates }/>

            {/* -> Show all educations */}
            <Section title="Educations" scripts={ educations }/>
        </Grid>
    )
}