import './App.css';
import Grid from '@mui/material/Grid';
import ExpSub from './components/subApp/ExpSub';
import EduSub from './components/subApp/EduSub';
import ProSub from './components/subApp/ProSub';
import CoverPanel from './components/cover/Cover';
import FooterPanel from './components/cover/Footer';



export default function App() {
  // Disable unwanted warnings
  console.warn = () => {};

  return (
    <div className='UpperApp'>
      <CoverPanel/>
      <Grid container className="App">
        {/* Grid items follow the 1-2-1 size rule */}

        {/* This item is 1(-2-1) */}
        <Grid item xs={12} md={3} className="SubApp"><ProSub/></Grid>

        {/* This item is (1-)2(-1) */}
        <Grid item xs={12} md={6} className="SubApp"><ExpSub/></Grid>

        {/* This item is (1-2-)1 */}
        <Grid item xs={12} md={3} className="SubApp"><EduSub/></Grid>
      </Grid>
      <FooterPanel/>
    </div>
  );
}