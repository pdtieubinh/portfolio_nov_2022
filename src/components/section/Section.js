import SectionFrame from '../frame/SectionFrame';
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
    <SectionFrame>
        <p>{title}</p>
        <Grid container spacing={1}>
            {scripts.map(script => <Item type={ title } script={ script } key={ script.id }/>)}
        </Grid>
        <p>{/* To balance the view with h2 title */}</p>
    </SectionFrame>
  );
}