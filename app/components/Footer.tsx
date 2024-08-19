import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Grid, useMediaQuery} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { LinkedIn, GitHub, Mail, Instagram, Description} from '@mui/icons-material';

export default function Footer() {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    let iconSize;
    if (isSmallScreen) {
        iconSize = '2rem';
    } else {
        iconSize = '3rem';
    }
    return (
        <Grid id="contact" container sx={{
            background: '#2d2d35',
            boxShadow: 'none',
            opacity: '2',
            marginTop: '5%',
            padding: '2%'
        }}>
            <Grid item xs={12} sx={{ textAlign: 'center', paddingBottom: '1%' }}>
                <IconButton
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/andr%C3%A9s-wallberg-vergara-57667b207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#0e76a8',
                        fontSize: iconSize,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.2)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    <LinkedIn fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="GitHub"
                    href="https://github.com/AndresWV"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#6f42c1',
                        fontSize: iconSize,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.2)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    <GitHub fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="Instagram"
                    href="https://www.instagram.com/wallberg.a.v?igsh=bjlqZGViOTNtb3R3"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#e4405f',
                        fontSize: iconSize,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.2)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    <Instagram fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="Email"
                    href="mailto:andres.wv99@gmail.com"
                    sx={{
                        fontSize: iconSize,
                        color: 'orange',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.2)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    <Mail fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="Download CV"
                    href="/assets/docs/cv_andres_wallberg.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        fontSize: iconSize,
                        color: '#ff0000',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.2)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    <Description fontSize="inherit" />
                </IconButton>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="body1" sx={{ color: '#7ca48c', fontFamily: 'IBM Plex Mono' }}>
                    © 2024 Andrés Wallberg.
                </Typography>
            </Grid>
        </Grid>
    );
}
