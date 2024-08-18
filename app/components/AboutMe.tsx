import { Grid, Typography, Box } from '@mui/material';
import AboutMeDescription from "./AboutMeDescription";
export default function AboutMe() {
    return (
        <>
            <Box sx={{ position: 'relative', paddingX: '25%', marginTop: '10% !important', paddingY: '3%' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: '15%',
                        width: '15%',
                        height: '60%',
                        '&::before, &::after': {
                            content: '""',
                            position: 'absolute',
                            backgroundColor: '#7ca48c',
                        },
                        '&::before': {
                            top: 0,
                            left: '15%',
                            width: '13px',
                            height: '100%',
                        },
                        '&::after': {
                            top: 0,
                            left: '15%',
                            width: '100%',
                            height: '13px',
                        },
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: '15%',
                        width: '15%',
                        height: '60%',
                        '&::before, &::after': {
                            content: '""',
                            position: 'absolute',
                            backgroundColor: '#7ca48c',
                        },
                        '&::before': {
                            bottom: 0,
                            right: 0,
                            width: '13px',
                            height: '100%',
                        },
                        '&::after': {
                            bottom: 0,
                            right: 0,
                            width: '100%',
                            height: '13px',
                        },
                    }}
                />
                <Grid  container spacing={2}>
                    <Grid item xs={12} sx={{ textAlign: 'center !important' }}>
                        <Typography variant="h2" style={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>
                            Hi, I am
                            <Typography variant="h2" component="span" style={{ color: '#7ca48c', fontFamily: 'IBM Plex Mono' }}>
                                {' < Andrés Wallberg />'}
                            </Typography>
                        </Typography>
                        <Typography variant="h3" style={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>
                            Data Engineer | MLops | Software
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <AboutMeDescription />
        </>
    );
}
