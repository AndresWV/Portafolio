import React from 'react';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface ProjectProps {
  open: boolean;
  onClose: () => void;
  icon: string;
  title: string;
  description: string;
  projectLink: string;
  technologies: string[];
}
const Project: React.FC<ProjectProps> = ({ open, onClose, icon, title, description, projectLink, technologies }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: '#2D2D35',
          boxShadow: 5,
          padding: 4,
          borderRadius: 8,
          outline: 'none',
          maxWidth: '60%',
          position: 'relative',
        }}
      >
        <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', top: 20, right: 20,color: '#b3b3b4 !important'}}>
          <CloseIcon />
        </IconButton>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <img src={icon} alt="Project Icon" style={{ borderRadius: '50%', padding: 2 }} />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography variant="h2" align="center" sx={{fontFamily: 'IBM Plex Mono'}}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '5%' }}>
          <Typography variant="body1" align="center" sx={{ color: '#FFFFFF', fontFamily: 'IBM Plex Mono' }}>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '5%' }}>
          <Typography variant="h4" align="center" component="a" href={projectLink} target="_blank" rel="noopener noreferrer" 
            sx={{ 
              color: '#64B6AC', 
              textDecoration: 'none', 
              '&:hover': { textDecoration: 'underline' },
              fontFamily: 'IBM Plex Mono'
              }}>
            Project Link
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center', gap: 1 }}>
          {technologies.map((tech, index) => (
            <Typography key={index} variant="body2" color="textSecondary">
              {tech}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Modal>
  );
}
export default Project;
