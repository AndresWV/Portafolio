import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
export default function AboutMeDescription() {
    return (
        <Grid container sx={{ paddingX:'15%', marginTop:'4%'}}>
            <Grid xs={12}>
                <Typography 
                    variant="body1" 
                    sx={{
                        fontFamily: '"Courier New", Courier, monospace', 
                        color: '#7ca48c',
                        backgroundColor: '#2D2D35', 
                        borderRadius: '5px', 
                        border: '2px dashed gray',
                        fontStyle: 'italic', 
                        whiteSpace: 'pre-wrap', 
                        fontSize: '1.5rem',
                        paddingY:'3%',
                        paddingX:'4%'
                      }}
                >
                    {'/**'} <br />
                    {'* ABOUT ME: '} <br />
                    {'* Im Andrés Wallberg and I am a Civil Computer Engineer from the University of'} <br />
                    {'* Talca, Chile. I consider myself a person with multiple interests in computing,'}  <br />
                    {'* specifically, in the gained solid knowledge in software development,'} <br />
                    {'* algorithms, and area of ​data science, research and software. I like challenges'}<br />
                    {'* and innovation addition to constant learning and personal growth.'}<br />
                    {'*/'}
                </Typography>
            </Grid>
        </Grid>
    );
}
