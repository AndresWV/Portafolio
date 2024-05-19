"use client";
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
