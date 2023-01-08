import './App.css';
import Grid from '@mui/material/Grid';
import ExpSub from './components/subApp/ExpSub';
import EduSub from './components/subApp/EduSub';
import ProSub from './components/subApp/ProSub';



export default function App() {
  // Disable unwanted warnings
  console.warn = () => {};

  return (
    <Grid container className="App">
      {/* Grid items follow the 1-2-1 size rule */}

      {/* Cover panel spans the whole viewport */}
      <Grid item xs={12} className="SubApp"></Grid>

      {/* This item is 1(-2-1) */}
      <Grid item xs={12} md={3} className="SubApp"><ProSub/></Grid>

      {/* This item is (1-)2(-1) */}
      <Grid item xs={12} md={6} className="SubApp"><ExpSub/></Grid>

      {/* This item is (1-2-)1 */}
      <Grid item xs={12} md={3} className="SubApp"><EduSub/></Grid>
    </Grid>
  );
}