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
import Image from 'next/image'
interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['About Me', 'Skills', 'Projects', 'Contact'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Grid onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                AW
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center'}}>
                            <ListItemText primary={item} sx={{fontFamily:'IBM Plex Mono'}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Grid>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Grid container>
            <AppBar
                component="nav"
                sx={{
                    background: 'radial-gradient(circle, rgba(40,40,59,1) 5%, rgba(33,38,78,1) 59%, rgba(37,34,34,1) 100%)',
                    boxShadow: 'none', 
                    opacity: '2',
                    paddingX: mobileOpen ? '0':'5%',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 1, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Image
                            src="/assets/img/logo.png"
                            width={180}
                            height={80}
                            alt="Avatar"
                            style={{float:'left'}}
                        />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#7ca48c' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, 
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                          boxSizing: 'border-box',
                          width: drawerWidth,
                          color: '#7ca48c',
                          background: 'linear-gradient(25deg, rgba(40,40,59,1) 5%, rgba(33,38,78,1) 59%, rgba(37,34,34,1) 100%)'
                        },
                      }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Grid>
    );
}
