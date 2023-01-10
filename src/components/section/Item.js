import Content from '../content/Content';
import './Item.css';
import Grid from '@mui/material/Grid';

/* Items are just smaller grids inside Sections containing 
Content (logos of companies, schools, certificates, etc.) */
export default function Item({ type, script }) {
  const lowerCaseType = type.toLowerCase()
  const sizeByType = {
    'certified exams': [4, 3, 6],
    'technical skills': [4, 3, 6],
    'experiences': [4, 3, 3],
    'educations': [4, 3, 6],
    'mooc': [4, 3, 6],
  }
  return (
    <Grid 
      item 
      xs={sizeByType[lowerCaseType][0]} 
      sm={sizeByType[lowerCaseType][1]} 
      md={sizeByType[lowerCaseType][2]} 
      className="Item">
      <Content type={ type } script={ script }/>
    </Grid>
  );
}