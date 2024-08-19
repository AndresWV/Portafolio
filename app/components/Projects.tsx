"use client";
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia } from '@mui/material';
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
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await readCSV('/assets/docs/projects.csv');
        setProjects(projects);
      } catch (error) {
        console.log('Error reading CSV file: '+error);
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
    <Grid id="projects" container sx={{ paddingX: '15%', marginTop: '7%', paddingY: '5%' }}>
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
              image={'/assets/img/'+project.img}
              alt={project.title}
              sx={{
                width: '170px',
                flex: 'none',
                marginRight: { xs: 0, sm: '20px' },
                borderRadius: '50%'
              }}
            />

            <CardContent sx={{ flex: '1', marginLeft: '3%' }}>
              <Typography sx={{ color: '#64B6AC', fontFamily: 'IBM Plex Mono', fontSize:'1.7rem' }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono', marginTop:'2%', textAlign:'justify' }}>
                {project.resume}
              </Typography>
              <Grid item xs={12} sx={{display: 'flex', justifyContent: 'start', gap: 1, marginTop:'2%' }}>
                <Typography sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono', marginRight: '10px', fontSize:'1.1rem' }}>
                  Technologies:
                </Typography>
                {project.technologies.map((tech, index) => (
                  <Typography key={index} sx={{ color: '#64B6AC', fontSize:'1.1rem', fontFamily: 'IBM Plex Mono' }}>
                    {tech}{index < project.technologies.length - 1 ? ' |' : ''}
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
          icon={'/assets/img/'+selectedProject.img}
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
