import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AboutMeDescription from "./AboutMeDescription";
import Image from 'next/image'
export default function AboutMe() {
    return (
        <>
            <Grid id="about" container spacing={2} sx={{ paddingX: '15%', marginTop: '5% !important' }}>
                <Grid item xs={12} md={8} sx={{marginTop:'5%'}}>
                    <Grid>
                        <Typography variant="h2" style={{ color: '#b3b3b4',fontFamily:'IBM Plex Mono' }}>Hi, I am
                            <Typography variant="h2" component="span" style={{ color: '#7ca48c',fontFamily:'IBM Plex Mono' }}>
                                {' < Andrés Wallberg />'}
                            </Typography>
                        </Typography>
                        <Typography variant="h3" style={{ color: '#b3b3b4',fontFamily:'IBM Plex Mono' }}>Data Engineer</Typography>
                    </Grid>
                    <Grid container sx={{ marginTop: '5%' }}>
                        <Grid xs={12} md={4}>
                            <Grid container>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h3" component="span" sx={{ color: '#7ca48c', fontWeight: 'bold', verticalAlign:'center',fontFamily:'IBM Plex Mono' }}>
                                        1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={10} sx={{ paddingTop: '3%', paddingLeft: '3%' }}>
                                    <Typography variant="h5" component="span" sx={{ color: '#b3b3b4', fontWeight: 'bold', textTransform: 'uppercase',fontFamily:'IBM Plex Mono' }}>
                                        Years of <br />experience
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} md={8}>
                            <Grid container>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h3" component="span" sx={{ color: '#7ca48c', fontWeight: 'bold', verticalAlign:'center',fontFamily:'IBM Plex Mono'}}>
                                        20
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={10} sx={{ paddingTop: '1%', paddingLeft: '3%' }}>
                                    <Typography variant="h5" component="span" sx={{ color: '#b3b3b4', fontWeight: 'bold', textTransform: 'uppercase',fontFamily:'IBM Plex Mono' }}>
                                        Projects developed <br />as a professional
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image
                        src="/assets/img/avatar.png"
                        width={300}
                        height={300}
                        alt="Avatar"
                        style={{float:'right'}}
                    />
                </Grid>
            </Grid>
            <AboutMeDescription />
        </>
    );
}
