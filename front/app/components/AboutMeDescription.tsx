import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
export default function AboutMeDescription() {
    return (
        <Grid container sx={{ paddingLeft: '15%', paddingRight: '15%', marginTop:'3%' }}>
            <Grid xs={12}>
                <Typography 
                    variant="body1" 
                    sx={{
                        fontFamily: '"Courier New", Courier, monospace', 
                        color: '#6a6a6a',
                        backgroundColor: 'transparent', 
                        padding: '1%',
                        borderRadius: '5px', 
                        border: '2px dashed gray',
                        fontStyle: 'italic', 
                        whiteSpace: 'pre-wrap', 
                      }}
                >
                    {'/**'} <br />
                    {'* Im Juan Perez, a passionate software engineer with a background from'} <br />
                    {'* the prestigious University of Talca. During my time at university, I'}  <br />
                    {'* gained solid knowledge in software development, algorithms, and'} <br />
                    {'* system architecture. Additionally, I pursued a minor in Data Science,'}<br />
                    {'* allowing me to explore my fascination with data analysis and'}<br />
                    {'* evidence-based decision-making.'} <br />
                    {'*/'}
                </Typography>
            </Grid>
        </Grid>
    );
}
