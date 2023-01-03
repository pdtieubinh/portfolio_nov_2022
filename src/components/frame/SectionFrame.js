import './SectionFrame.css';
import Grid from '@mui/material/Grid';

/*
Frames are used to surround chart sections and icon sections
*/
export default function SectionFrame({ children }) {
  return (
    <Grid item xs={12} className="SectionFrame">
        <div className="SectionFrameCore">
          {children}
        </div>
    </Grid>
  );
}