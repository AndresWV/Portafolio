import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AboutMeDescription from "./AboutMeDescription";
export default function AboutMe() {
    return (
        <>
            <Grid container spacing={2} sx={{ paddingLeft: '15%', paddingRight: '15%', marginTop: '5% !important' }}>
                <Grid item xs={12} md={8}>
                    <Grid>
                        <Typography variant="h6">Hi, I am</Typography>
                        <Typography variant="h1" component="span" style={{ color: '#338AFF', fontSize: '2.7rem' }}>
                            {'< Andrés Wallberg />'}
                        </Typography>
                        <Typography variant="h5">Software Engineer</Typography>
                    </Grid>
                    <Grid container sx={{marginTop:'5%'}}>
                        <Grid xs={12} md={4}>
                            <Grid container>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h4" component="span" sx={{ color: '#8FACD8', fontSize: '3.5rem', fontWeight: 'bold' }}>
                                        1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={10} sx={{ paddingTop: '3%', paddingLeft: '3%' }}>
                                    <Typography variant="h6" component="span" sx={{ color: '#8FACD8', fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                        Years of <br />experience
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} md={8}>
                            <Grid container>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h4" component="span" sx={{ color: '#8FACD8', fontSize: '3.5rem', fontWeight: 'bold' }}>
                                        20
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={10} sx={{ paddingTop: '1%', paddingLeft: '3%' }}>
                                    <Typography variant="h6" component="span" sx={{ color: '#8FACD8', fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                        Projects developed <br />as a professional
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid>
                        <h1>Avatar</h1>
                    </Grid>
                </Grid>
            </Grid>
            <AboutMeDescription />
        </>
    );
}
