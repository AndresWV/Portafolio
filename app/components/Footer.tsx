import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { LinkedIn, GitHub, Mail, Instagram, PictureAsPdf } from '@mui/icons-material';

export default function Footer() {
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
                    sx={{ color: '#0e76a8', fontSize: '3rem' }} 
                >
                    <LinkedIn fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="GitHub"
                    href="https://github.com/AndresWV"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#6f42c1', fontSize: '2.5rem' }}
                >
                    <GitHub fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="Instagram"
                    href="https://www.instagram.com/your_instagram_account/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#e4405f', fontSize: '2.5rem' }}
                >
                    <Instagram fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="Email"
                    href="mailto:andres.wv99@gmail.com"
                    sx={{ fontSize: '3rem', color: 'orange'}}
                >
                    <Mail fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="Download CV"
                    href="/assets/docs/cv_andres_wallberg.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontSize: '3rem', color: '#ff0000' }}
                >
                    <PictureAsPdf fontSize="inherit" />
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
