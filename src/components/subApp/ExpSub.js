import Grid from '@mui/material/Grid';
import Section from '../section/Section';
import { experiences } from '../../script/scripts';
import ChartSection from '../charts/ChartSection';
import { ExpFieldChart, ExpLangChart, ExpRateChart, ExpTimeChart, ExpTimelineChart } from '../charts/exp';

export default function ExpSub() {
    return (
        <Grid container spacing={2}>
          {/* -> Show all experiences */}
          <Section title="Experiences" scripts={ experiences }/>  

          {/* -> Double charts, show all technical analytics */}
          <ChartSection title="Experiences Analytics">
            <ExpFieldChart xs={6} md={6} id={1}/>
            <ExpLangChart  xs={6} md={6} id={2}/>
          </ChartSection>

          {/* -> Show all experiences analytics */}
          <ChartSection title="Experiences Timeline">
            <ExpTimelineChart  xs={12} md={12} id={1}/>
          </ChartSection>

          {/* -> Show all experiences analytics */}
          <ChartSection title="Experiences Analytics">
            <ExpTimeChart  xs={12} md={12} id={1}/>
          </ChartSection>


          {/* -> Show all experiences analytics */}
          <ChartSection title="Experiences Analytics">
            <ExpRateChart  xs={12} md={12} id={1}/>
          </ChartSection>
        </Grid>
    )

}