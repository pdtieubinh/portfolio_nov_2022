import Grid from '@mui/material/Grid';
import Section from '../section/Section';
import { moocs, educations } from '../../script/scripts';
import ChartSection from '../charts/ChartSection';
import { ExpRateChart, ExpTimeChart, ExpTimelineChart } from '../charts/exp';

export default function EduSub() {
    return (
        <Grid container spacing={2}>
            {/* -> Show all educations */}
            <Section title="Educations" scripts={ educations }/>

            {/* -> Show all certificates */}
            <Section title="MOOC" scripts={ moocs }/>
        </Grid>
    )
}