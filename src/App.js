import './App.css';
import Grid from '@mui/material/Grid';
import ExpSub from './components/subApp/ExpSub';
import EduSub from './components/subApp/EduSub';

export default function App() {
  return (
    <Grid container className="App" spacing={2}>
      {/* Grid items follow the 1-2-1 size rule */}

      {/* Cover panel spans the whole viewport */}
      <Grid item xs={12}></Grid>

      {/* This item is 1(-2-1) */}
      <Grid item xs={12} md={3}></Grid>

      {/* This item is (1-)2(-1) */}
      <Grid item xs={12} md={6}><ExpSub/></Grid>

      {/* This item is (1-2-)1 */}
      <Grid item xs={12} md={3}><EduSub/></Grid>
    </Grid>
  );
}