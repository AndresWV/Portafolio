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
  // const projects: ProjectData[] = [
  //   {
  //     img: '/assets/img/icoProjects.jpg',
  //     title: 'Project 1',
  //     resume: 'Project 1 description',
  //     description: 'Project 1 description',
  //     projectLink: '',
  //     technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
  //   },
  //   {
  //     img: '/assets/img/icoProjects.jpg',
  //     title: 'Project 2',
  //     resume: 'Project 2 description',
  //     description: `¿De dónde viene? Al contrario del pensamiento popular,
  //       el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raíces
  //       en una pieza clásica de la literatura del Latín, que data del año 45 antes de Cristo,
  //       haciendo que este adquiera más de 2000 años de antigüedad. Richard McClintock,
  //       un profesor de Latín de la Universidad de Hampden-Sydney en Virginia,
  //       encontró una de las palabras más oscuras de la lengua del latín,
  //       "consectetur", en un pasaje de Lorem Ipsum,
  //       y al seguir leyendo distintos textos del latín, descubrió la fuente indudable.
  //       Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum"
  //       (Los Extremos del Bien y El Mal) por Cicerón, escrito en el año 45 antes de Cristo.
  //       Este libro es un tratado de teoría de ética, muy popular durante el Renacimiento.
  //       La primera línea del Lorem Ipsum, "Lorem ipsum dolor sit amet..",
  //       viene de una línea en la sección 1.10.32 El trozo de texto estándar de Lorem
  //       Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados.
  //       Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicerón son
  //       también reproducidas en su forma original exacta, acompañadas por versiones en Inglés
  //       de la traducción realizada en 1914 por H. Rackham.`,
  //     projectLink: '',
  //     technologies: ['Tech 4', 'Tech 5', 'Tech 6'],
  //   },
  // ];
  

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
