import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import AboutMeDescription from './AboutMeDescription';

export default function AboutMe() {
    const isSmallScreen = useMediaQuery('(max-width:950px)');
    const isSmallScreenName = useMediaQuery('(max-width:500px)');
    let marginTopValue;

    if (isSmallScreen) {
        marginTopValue = '20%';
    } 
    if (isSmallScreenName) {
        marginTopValue = '35%';
    } 
    if (!isSmallScreen && !isSmallScreenName) {
        marginTopValue = '10%';
    }

    return (
        <>
            <Box sx={{ position: 'relative', paddingX: '25%', paddingY: '3%', marginTop: marginTopValue }}>
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
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ textAlign: 'center !important' }}>
                        <Typography variant={isSmallScreenName ? 'h3' : 'h2'} style={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>
                            Hi, I am
                            <Typography variant={isSmallScreenName ? 'h3' : 'h2'} component="span" style={{ color: '#7ca48c', fontFamily: 'IBM Plex Mono' }}>
                                {' < Andrés Wallberg />'}
                            </Typography>
                        </Typography>
                        <Typography variant={isSmallScreenName ? 'h5' : 'h3'} style={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>
                            Data Engineer, MLops, Software
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <AboutMeDescription />
        </>
    );
}
