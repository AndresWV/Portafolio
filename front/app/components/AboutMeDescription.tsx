import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
export default function AboutMeDescription() {
    return (
        <Grid container sx={{ paddingX:'15%', marginTop:'2%' }}>
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
                        fontSize: '1.5rem'
                      }}
                >
                    {'/**'} <br />
                    {'* Im Andrés Wallberg and I am a Civil Computer Engineer from the University of Talca,'} <br />
                    {'* Chile. I consider myself a person with multiple interests in computing, specifically,'}  <br />
                    {'* in the gained solid knowledge in software development, algorithms, and area of '} <br />
                    {'* ​data science, research and software. I like challenges and innovation addition to'}<br />
                    {'* constant learning and personal growth.'}<br />
                    {'*/'}
                </Typography>
            </Grid>
        </Grid>
    );
}
