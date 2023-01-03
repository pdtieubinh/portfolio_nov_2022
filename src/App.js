import './App.css';
import Grid from '@mui/material/Grid';
import Section from './components/section/Section';
import { experiences, educations, certificates } from './script/scripts';

export default function App() {
  return (
    <Grid container className="App" spacing={2}>

      <Grid item xs={10} md={5}>
        <Grid container spacing={3}>
          <Section title="Experiences" scripts={ experiences }/>
          <Section title="Educations" scripts={ educations }/>
        </Grid>
      </Grid>

      <Grid item xs={10} md={5}>
        <Grid container spacing={3}>
          <Section title="Certificates" scripts={ certificates }/>
        </Grid>
      </Grid>

    </Grid>
  );
}