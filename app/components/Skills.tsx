import Typography from '@mui/material/Typography';
import { Grid, useMediaQuery, Box } from '@mui/material';

export default function Skills() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const technologys = [
    {
      img: '/assets/img/docker.png',
      title: 'DOCKER',
    },
    {
      img: '/assets/img/git.png',
      title: 'GIT',
    },
    {
      img: '/assets/img/python.png',
      title: 'PYTHON',
    },
    {
      img: '/assets/img/gcp.png',
      title: 'GCP',
    },
    {
      img: '/assets/img/sql.png',
      title: 'SQL',
    },
    {
      img: '/assets/img/beam.png',
      title: 'Apache Beam',
    },
    {
      img: '/assets/img/AirflowLogo.png',
      title: 'AirflowLogo',
    },
    {
      img: '/assets/img/laravel.png',
      title: 'laravel',
    },
    {
      img: '/assets/img/react.png',
      title: 'react',
    },
    {
      img: '/assets/img/java.png',
      title: 'java',
    },
  ];

  return (
    <Grid id="skills" container sx={{ paddingX: '15%', marginTop: '7% !important' }}>
      <Grid item xs={12} sx={{ display: 'flex' }}>
        <Typography variant='h2' sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>Skills</Typography>
      </Grid>
      <Grid container item xs={12}
        sx={{
          marginTop: '2%',
          alignItems: 'center',
          paddingY: '5%',
          paddingX: '7%',
          backgroundColor: '#2D2D35',
          borderRadius: '5px',
          border: '2px gray',
          justifyContent: 'center',
        }}
      >
        {technologys.map((tech, index) => (
          <Grid key={index}
            item
            xs={isSmallScreen ? 6 : 12}
            sm={isSmallScreen ? 6 : 6}
            md={isSmallScreen ? 6 : 4}
            lg={isSmallScreen ? 6 : 3}
            xl={isSmallScreen ? 6 : 2}
            sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '70%',
                '& img': {
                  width: '100%',
                  borderRadius: '8px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                },
                '&:hover img': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 0px 15px rgba(111, 66, 193, 0.6)', // Difuminado morado
                },
                '&:hover .tooltip': {
                  opacity: 1,
                  visibility: 'visible',
                },
              }}
            >
              <img
                srcSet={`${tech.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${tech.img}?w=164&h=164&fit=crop&auto=format`}
                alt={tech.title}
                loading="lazy"
              />
              <Box
                className="tooltip"
                sx={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#7ca48c',
                  color: '#ffffff',
                  padding: '3px 8px',
                  borderRadius: '3px',
                  opacity: 0,
                  visibility: 'hidden',
                  transition: 'opacity 0.3s, visibility 0.3s',
                  fontSize: '0.75rem',
                  whiteSpace: 'nowrap',
                }}
              >
                {tech.title}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
