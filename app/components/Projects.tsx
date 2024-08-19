"use client";
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import Project from './Project';
import readCSV, { ProjectFormat } from '../services/googleSheetsAPI';

interface ProjectData {
  img: string;
  title: string;
  resume: string;
  description: string;
  projectLink: string
  technologies: string[];
  difficulty: string;
}

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await readCSV('/assets/docs/projects.csv');
        setProjects(projects);
      } catch (error) {
        console.log('Error reading CSV file: ' + error);
      }
    };
    fetchProjects();
  }, []);
  const difficultyColors = {
    1: '#64B6AC',
    2: '#FFD700', // Dificultad media
    3: '#FF6347', // Dificultad alta
  };


  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <Grid id="projects" container sx={{ paddingX: '15%', marginTop: '2%', paddingY: '5%' }}>
      <Grid item xs={12} sx={{ display: 'flex' }}>
        <Typography variant={isSmallScreen?'h4':'h2'} sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>Projects</Typography>
      </Grid>
      {projects.map((project, index) => (
        <Grid item key={index} xs={12} sx={{ display: 'flex', marginTop: '2%', justifyContent: 'center' }}>
          <Card
            onClick={() => handleProjectClick(project)}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingY: '2%',
              paddingX: '2%',
              backgroundColor: '#2D2D35',
              borderRadius: '5px',
              maxWidth: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              overflow: 'visible', // Permite que el contenido no se corte
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Efecto de transición
              '&:hover': {
                transform: 'scale(1.05)', // Aumenta el tamaño de la tarjeta al hacer hover
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // Sombra sutil
              }
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={'/assets/img/' + project.img}
              alt={project.title}
              sx={{
                width: isSmallScreen ? '140px' : '170px',
                flex: 'none',
                marginRight: { xs: 0, sm: '20px' },
                marginLeft: '5%',
                borderRadius: '50%',
              }}
            />
            <CardContent
              sx={{
                flex: '1',
                marginLeft: '3%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Ajusta el contenido verticalmente
                overflow: 'visible', // Asegura que el contenido no se corte
              }}
            >
              <Typography
                sx={{
                  color: '#64B6AC',
                  fontFamily: 'IBM Plex Mono',
                  fontSize: isSmallScreen ? '1.4rem' : '1.7rem',
                  marginBottom: '1%', // Agrega un margen inferior para separar el título del resumen
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#b3b3b4',
                  fontFamily: 'IBM Plex Mono',
                  marginTop: '2%',
                  textAlign: 'justify',
                  overflow: 'visible', // Permite que el contenido se muestre completo
                }}
              >
                {project.resume}
              </Typography>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'start', gap: 1, marginTop: '2%' }}>
                {!isSmallScreen && (
                  <Typography
                    sx={{
                      color: '#b3b3b4',
                      fontFamily: 'IBM Plex Mono',
                      marginRight: '10px',
                      fontSize: '1.1rem',
                    }}
                  >
                    Technologies:
                  </Typography>
                )}

                {project.technologies.map((tech, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: '#64B6AC',
                      fontSize: isSmallScreen ? '0.9rem' : '1.1rem',
                      fontFamily: 'IBM Plex Mono',
                    }}
                  >
                    {tech}
                    {index < project.technologies.length - 1 ? ' |' : ''}
                  </Typography>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {selectedProject && (
        <Project
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          icon={'/assets/img/' + selectedProject.img}
          title={selectedProject.title}
          description={selectedProject.description}
          projectLink={selectedProject.projectLink}
          technologies={selectedProject.technologies}
          difficulty={selectedProject.difficulty}
        />
      )}
    </Grid>
  );
}
