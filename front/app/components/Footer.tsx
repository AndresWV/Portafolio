"use client";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Footer() {

    return (
        <Grid id="contact" container sx={{
            background: '#2d2d35',
            boxShadow: 'none', 
            opacity: '2',
            marginTop: '5%'
        }}>
            <Grid item xs={12} sx={{ textAlign: 'center', padding: '2%' }}>
                <Typography variant="body1" sx={{ color: '#7ca48c', fontFamily: 'IBM Plex Mono' }}>
                    © 2024 Andrés Wallberg. Contact me at andres.wv99@gmail.com.
                </Typography>
            </Grid>
        </Grid>
    );
}
