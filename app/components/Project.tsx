"use client";
import React from 'react';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid, Box, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectProps {
  open: boolean;
  onClose: () => void;
  icon: string;
  title: string;
  description: string;
  projectLink: string;
  technologies: string[];
  difficulty: string;
}

const Project: React.FC<ProjectProps> = ({ open, onClose, icon, title, description, projectLink, technologies, difficulty }) => {
  // Use media query to determine screen size
  const isSmallScreen = useMediaQuery('(max-width:650px)');

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: '#2D2D35',
          boxShadow: 5,
          padding: 4,
          paddingX: '7%',
          borderRadius: 8,
          outline: 'none',
          maxWidth: isSmallScreen ? '90%' : '60%',
          maxHeight: '80%',
          position: 'relative',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#2D2D35',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            color: '#b3b3b4 !important',
            zIndex: 1301,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            aria-label="GitHub"
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#6f42c1',
              fontSize: '9rem',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(160deg, rgba(111,66,193,0.5) 0%, rgba(111,66,193,0) 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: 1,
              },
              '&:hover::before': {
                opacity: 1,
              },
              '& svg': {
                position: 'relative',
                zIndex: 2, // Asegura que el icono esté encima del overlay
              }
            }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography variant={isSmallScreen ? "h5" : "h4"} align="center" sx={{ fontFamily: 'IBM Plex Mono', color: '#64B6AC' }}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '5%' }}>
          <Typography variant="body1" align="center" sx={{ color: '#FFFFFF', fontFamily: 'IBM Plex Mono', textAlign: 'justify' }}>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center', gap: 1, paddingY: '2%' }}>
          {technologies.map((tech, index) => (
            <Typography key={index} variant={isSmallScreen ? "body2" : "h6"} sx={{ color: '#64B6AC' }}>
              {tech}{index < technologies.length - 1 ? ' |' : ''}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default Project;
