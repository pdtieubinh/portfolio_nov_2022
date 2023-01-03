import Item from './Item';
import './Section.css';
import Grid from '@mui/material/Grid';

/*
- Sections are technically just the big grid containing all items 
relating to experineces, educations, etc.
- Each topic (experiences, educations, etc.) should have its own section.
*/
export default function Section({ title, scripts }) {
  return (
    <Grid item xs={12} className="Section">
        <div className="SectionCore">
          <h2>{title}</h2>
          <Grid container spacing={2}>
              {scripts.map(script => <Item type={ title } script={ script } key={ script.id }/>)}
          </Grid>
          <h2>{/* To balance the view with h2 title */}</h2>
        </div>
    </Grid>
  );
}