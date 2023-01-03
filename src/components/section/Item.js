import Content from '../content/Content';
import './Item.css';
import Grid from '@mui/material/Grid';

/* Items are just smaller grids inside Sections containing 
Content (logos of companies, schools, certificates, etc.) */
export default function Item({ type, script }) {
  return (
    <Grid item xs={4} sm={3} className="Item">
      <Content type={ type } script={ script }/>
    </Grid>
  );
}