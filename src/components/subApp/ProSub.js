import Grid from '@mui/material/Grid';
import Section from '../section/Section';
import { certified } from '../../script/scripts';
import ChartSection from '../charts/ChartSection';
import { ExpRateChart, ExpTimeChart, ExpTimelineChart } from '../charts/exp';

export default function ProSub() {
    return (
        <Grid container spacing={2}>
            {/* -> Show all certificates */}
            <Section title="Certified Exams" scripts={ certified }/>
        </Grid>
    )
}