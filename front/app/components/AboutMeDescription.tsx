import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
export default function AboutMeDescription() {
    return (
        <Grid container sx={{ paddingX:'15%', marginTop:'1%' }}>
            <Grid xs={12}>
                <Typography 
                    variant="body1" 
                    sx={{
                        fontFamily: '"Courier New", Courier, monospace', 
                        color: '#7ca48c',
                        backgroundColor: '#2D2D35', 
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
