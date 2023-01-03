import './App.css';
import Grid from '@mui/material/Grid';
import Section from './components/section/Section';
import { experiences, educations, certificates } from './script/scripts';
import ChartSection from './components/charts/ChartSection';
import { ExpRateChart, ExpTimeChart } from './components/charts/exp';

export default function App() {
  return (
    <Grid container className="App" spacing={3}>

      {/* Act as big columns of the view*/}
      <Grid item xs={10} md={5}>
        {/* Each column is another grid container */}
        <Grid container spacing={3}>
          {/* -> Show all experiences */}
          <Section title="Experiences" scripts={ experiences }/>

          {/* -> Show all experiences analytics */}
          <ChartSection title="Experiences Analytics">
            <ExpTimeChart size={12} id={1}/>
          </ChartSection>
        </Grid>
      </Grid>

      {/* Act as big columns of the view*/}
      <Grid item xs={10} md={5}>
        {/* Each column is another grid container */}
        <Grid container spacing={3}>
          {/* -> Show all certificates */}
          <Section title="Certificates" scripts={ certificates }/>

          {/* -> Show all educations */}
          <Section title="Educations" scripts={ educations }/>
        </Grid>
      </Grid>

    </Grid>
  );
}