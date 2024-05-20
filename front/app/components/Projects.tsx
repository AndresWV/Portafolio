"use client";
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia } from '@mui/material';
import Project from './Project';

interface ProjectData {
  img: string;
  title: string;
  description: string;
  technologies: string[];
}

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      img: '/assets/img/icoProjects.jpg',
      title: 'Project 1',
      description: 'Project 1 description',
      technologies: ['Tech 1', 'Tech 2', 'Tech 3']
    },
    {
      img: '/assets/img/icoProjects.jpg',
      title: 'Project 2',
      description: 'Project 2 description',
      technologies: ['Tech 4', 'Tech 5', 'Tech 6']
    },
    // Agrega más proyectos según sea necesario
  ];

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <Grid id="projects" container sx={{ paddingX: '15%', marginTop: '7%' }}>
      <Grid xs={12} sx={{ display: 'flex' }}>
        <Typography variant='h2' sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>Projects</Typography>
      </Grid>
      {projects.map((project, index) => (
        <Grid key={index} xs={12} sx={{ display: 'flex', marginTop: '2%', justifyContent: 'center' }}>
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
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={project.img}
              alt={project.title}
              sx={{
                width: '170px',
                flex: 'none',
                marginRight: { xs: 0, sm: '20px' },
                borderRadius: '50%'
              }}
            />

            <CardContent sx={{ flex: '1', marginLeft: '3%' }}>
              <Typography variant="h4" sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono', marginBottom: '10px' }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono', marginBottom: '10px' }}>
                {project.description}
              </Typography>
              <Typography variant="body2" sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono', marginTop: '10px' }}>
                Technologies:
              </Typography>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>
                    <Typography variant="body2" sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>
                      {tech}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {selectedProject && (
        <Project
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          icon={selectedProject.img}
          title={selectedProject.title}
          description={selectedProject.description}
          projectLink="https://example.com"
          technologies={selectedProject.technologies}
        />
      )}
    </Grid>
  );
}
