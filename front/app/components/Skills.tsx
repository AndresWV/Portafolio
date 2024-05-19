import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListtech from '@mui/material/ImageListItem';
export default function Skills() {
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
  ];
  return (
    <Grid id="skills" container sx={{ paddingX: '15%', marginTop: '5%' }}>
      <Grid xs={12} sx={{ display: 'flex' }}>
        <Typography variant='h2' sx={{ color: '#b3b3b4', fontFamily: 'IBM Plex Mono' }}>Data Skills</Typography>
      </Grid>
      <Grid container xs={12}
        sx={{
          marginTop: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '5%',
          paddingX: '7%',
          backgroundColor: '#2D2D35',
          borderRadius: '5px',
          border: '2px dashed gray',
        }}
      >
        {technologys.map((tech, index) => (
          <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
            <img
              srcSet={`${tech.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${tech.img}?w=164&h=164&fit=crop&auto=format`}
              alt={tech.title}
              loading="lazy"
              style={{ width: '150px', marginBottom: '2%' }}
            />
          </Grid>
        ))}
      </Grid>

    </Grid>
  );
}
