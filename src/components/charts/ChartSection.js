import SectionFrame from '../frame/SectionFrame';
import '../section/Section.css'
import Grid from '@mui/material/Grid';
import './ChartSection.css'

export default function ChartSection({ title, children }) {
    const childrenArray = (children.map) ? children : [children]
    return (
        <SectionFrame>
            <p>{title}</p>
            <Grid container className='Chart'>
                {childrenArray.map(c => <Grid item xs={c.props.xs} md={c.props.md} key={c.props.id}>
                        {c}
                    </Grid>)}
            </Grid>
            <p>{/* To balance the view with h2 title */}</p>
        </SectionFrame>
    );
}