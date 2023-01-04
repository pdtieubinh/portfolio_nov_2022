import Grid from '@mui/material/Grid';
import Section from '../section/Section';
import { experiences } from '../../script/scripts';
import ChartSection from '../charts/ChartSection';
import { ExpRateChart, ExpTimeChart, ExpTimelineChart } from '../charts/exp';

export default function ExpSub() {
    return (
        <Grid container spacing={2}>
          {/* -> Show all experiences */}
          <Section title="Experiences" scripts={ experiences }/>  

          {/* -> Show all experiences analytics */}
          <ChartSection title="Experiences Timeline">
            <ExpTimelineChart size={12} id={1}/>
          </ChartSection>

          {/* -> Show all experiences analytics */}
          <ChartSection title="Experiences Analytics">
            <ExpTimeChart size={12} id={1}/>
          </ChartSection>
          
          {/* -> Show all experiences analytics */}
          <ChartSection title="Experiences Analytics">
            <ExpRateChart size={12} id={1}/>
          </ChartSection>
        </Grid>
    )

}