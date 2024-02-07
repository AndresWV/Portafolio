import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListtech from '@mui/material/ImageListItem';
export default function Skills() {
    const technologys = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
      ];
    return (
        <Grid container sx={{ paddingX:'15%', marginTop: '1%' }}>
            <Grid xs={12} sx={{ display: 'flex' }}>
                <Typography variant='h4' sx={{ color: '#7ca48c' }}>Const </Typography>
                <Typography variant='h4'>&nbsp;skills</Typography>
                <Typography variant='h4' sx={{ color: '#7ca48c' }}>&nbsp;:{'{'} </Typography>
            </Grid>
            <Grid xs={12} sx={{paddingLeft:'5%', marginTop:'2%'}}>
                {technologys.map((tech) => (
                    <img
                        key={tech.img}
                        srcSet={`${tech.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${tech.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={tech.title}
                        loading="lazy"
                        style={{ maxWidth: '100%', height: 'auto', marginRight: '5%' }}
                    />
                ))}
            </Grid>
            <Grid xs={12} sx={{marginTop:'5%'}}>
                <Typography variant='h4' sx={{ color: '#7ca48c' }}>{'}'} </Typography>
            </Grid>
        </Grid>
    );
}
