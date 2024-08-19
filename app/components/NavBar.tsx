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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

interface Props {
    window?: () => Window;
}

const drawerWidth = 250;
const navItems = ['About', 'Skills', 'Projects', 'Contact'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Grid
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                background: 'linear-gradient(160deg, #425554 0, #3d4a49 16.67%, #373d3c 33.33%, #2f2f2f 50%, #272123 66.67%, #1f161a 83.33%, #190a12 100%)',
                color: '#7ca48c',
                '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0px 0px 15px rgba(111, 66, 193, 0.6)', // Difuminado morado
                }
            }}
        >
            <Typography sx={{ my: 2 }}>
                <Image
                    src="/assets/img/logo.png"
                    width={120}
                    height={85}
                    alt="Avatar"
                    style={{
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        borderRadius: '70%',
                        padding: '5%',
                    }}
                />
            </Typography>
            <Divider sx={{ bgcolor: '#7ca48c' }} />
            <List sx={{ width: '100%' }}>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton
                            onClick={() => scrollToSection(item.toLowerCase())}
                            sx={{
                                textAlign: 'center',
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: '#7ca48c',
                                    color: '#2d2d35',
                                },
                            }}
                        >
                            <ListItemText
                                primary={item}
                                sx={{
                                    fontFamily: 'IBM Plex Mono',
                                    textAlign: 'center',
                                    '&:hover': {
                                        color: '#2d2d35',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Grid>
    );

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Grid container id="about">
            <AppBar
                component="nav"
                sx={{
                    background: '#2d2d35',
                    boxShadow: 'none',
                    paddingX: mobileOpen ? '0' : '5%',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 1,
                            display: { sm: 'none' },
                            width: 100,
                            height: 100,
                            borderRadius: '100%', // Hace el botón redondo
                            '&:hover': {
                                backgroundColor: 'transparent',
                                '& img': {
                                    transform: 'scale(1.1)',
                                    boxShadow: '0px 0px 15px rgba(111, 66, 193, 0.6)', // Difuminado morado
                                }
                            }
                        }}
                    >
                        <Image
                            src="/assets/img/logo.png"
                            width={100}
                            height={100}
                            alt="Logo"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '100%' // Redondea la imagen
                            }}
                        />
                    </IconButton>
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Image
                            src="/assets/img/logo.png"
                            width={150}
                            height={85}
                            alt="Avatar"
                            style={{ float: 'left' }}
                        />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: '#7ca48c',
                                    fontSize: '1.3rem',
                                    fontFamily: 'IBM Plex Mono',
                                    '&:hover': {
                                        backgroundColor: '#7ca48c',
                                        color: '#2d2d35',
                                    }
                                }}
                                onClick={() => scrollToSection(item.toLowerCase())}
                            >
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
                            background: 'linear-gradient(160deg, #425554 0, #3d4a49 16.67%, #373d3c 33.33%, #2f2f2f 50%, #272123 66.67%, #1f161a 83.33%, #190a12 100%)'
                        },
                    }}
                >
                    <Grid
                        onClick={handleDrawerToggle}
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center',
                            background: 'linear-gradient(160deg, #425554 0, #3d4a49 16.67%, #373d3c 33.33%, #2f2f2f 50%, #272123 66.67%, #1f161a 83.33%, #190a12 100%)',
                            color: '#7ca48c'
                        }}
                    >
                        <Typography sx={{ my: 2 }}>
                            <Image
                                src="/assets/img/logo.png"
                                width={120}
                                height={85}
                                alt="Avatar"
                                style={{
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    borderRadius: '70%',
                                    padding: '5%',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0px 0px 15px rgba(111, 66, 193, 0.6)', // Difuminado morado
                                    }
                                }}
                            />
                        </Typography>
                        <Divider sx={{ bgcolor: '#7ca48c' }} />
                        <List sx={{ width: '100%' }}>
                            {navItems.map((item) => (
                                <ListItem key={item} disablePadding>
                                    <ListItemButton
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        sx={{
                                            textAlign: 'center',
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: '#7ca48c',
                                                color: '#2d2d35',
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={item}
                                            sx={{
                                                fontFamily: 'IBM Plex Mono',
                                                textAlign: 'center',
                                                '&:hover': {
                                                    color: '#2d2d35',
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Drawer>
            </nav>
        </Grid>
    );
}
