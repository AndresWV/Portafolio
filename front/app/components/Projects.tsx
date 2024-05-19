import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Projects() {

    return (
        <Grid id="projects" container sx={{ paddingX: '15%', marginTop: '3%' }}>
          <Grid xs={12} sx={{ display: 'flex' }}>
            <Typography variant='h2' sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>Projects</Typography>
          </Grid>
        </Grid>
      );
}
