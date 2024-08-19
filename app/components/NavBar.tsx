import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import spa from '../../public/assets/img/spain.png';
import ingl from '../../public/assets/img/inglaterra.png';
import { Grid, Box, useMediaQuery, Menu, MenuItem, IconButton, Drawer, Divider, Button, Typography, AppBar, Toolbar, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
interface Props {
    window?: () => Window;
}

const drawerWidth = 250;
const navItems = ['About', 'Skills', 'Projects', 'Contact'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLanguageMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (language: string) => {
        console.log(`Idioma cambiado a ${language}`);
        handleLanguageMenuClose();
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
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
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
                            sx={{ display: { xs: 'none', sm: 'block' }, ml: 2 }}
                        >
                            <Image
                                src="/assets/img/logo.png"
                                width={150}
                                height={85}
                                alt="Avatar"
                                style={{ float: 'left' }}
                            />
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' }, // Cambia sm a md para que el Drawer se active a 770px
                            flexGrow: 1,
                            justifyContent: 'center', // Centra los links del navbar
                            gap: '1rem', // Añade un pequeño espacio entre los botones
                        }}
                    >
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
                    <IconButton
                        color="inherit"
                        onClick={handleLanguageMenuClick}
                        sx={{
                            ml: 2,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                transform: 'scale(1.1)',
                            },
                        }}
                    >
                        <LanguageIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleLanguageMenuClose}
                        sx={{
                            '& .MuiMenu-paper': {
                                top: '56px', // Ajusta la posición superior para que el menú quede justo debajo del botón
                                right: 0, // Alinea el menú a la derecha del botón
                                minWidth: '150px', // Ajusta el ancho mínimo del menú
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Sombra más sutil
                                borderRadius: '8px',
                                background: '#2f2f2f', // Fondo acorde a la paleta de colores
                                border: '1px solid #7ca48c', // Borde acorde a la paleta de colores
                                padding: '0', // Elimina el padding extra
                                margin: '0 !important', // Elimina el margen extra
                                transform: 'translateY(8px)', // Ajusta la posición para evitar el margen
                                color: '#ffffff', // Color del texto
                            }
                        }}
                    >
                        <MenuItem
                            onClick={() => changeLanguage('es')}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem', // Separación entre la bandera y el texto
                                '&:not(:last-child)': {
                                    borderBottom: '1px solid #7ca48c', // Línea divisoria entre opciones
                                },
                                '&:hover': {
                                    backgroundColor: '#7ca48c',
                                    color: '#ffffff',
                                },
                            }}
                        >
                            <Image src={spa} alt="Spanish Flag" width={20} height={15} />
                            <Typography sx={{ ml: 1 }}>Español</Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => changeLanguage('en')}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem', // Separación entre la bandera y el texto
                                '&:last-child': {
                                    borderBottom: 'none', // Elimina la línea divisoria en la última opción
                                },
                                '&:hover': {
                                    backgroundColor: '#7ca48c',
                                    color: '#ffffff',
                                },
                            }}
                        >
                            <Image src={ingl} alt="US Flag" width={20} height={15} />
                            <Typography sx={{ ml: 1 }}>English</Typography>
                        </MenuItem>
                    </Menu>
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
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            color: '#7ca48c',
                            background: 'linear-gradient(160deg, #425554 0, #3d4a49 16.67%, #373d3c 33.33%, #2f2f2f 50%, #272123 66.67%, #1f161a 83.33%, #190a12 100%)'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Grid>
    );
}
