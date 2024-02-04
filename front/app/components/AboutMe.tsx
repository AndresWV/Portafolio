import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function AboutMe() {
    return (
        <Box>
            <h2>
                Hi, I am
            </h2>
            <Typography variant="h1" component="span" style={{ color: '#00ff00', fontSize: '3rem'}}>
                 {'< Andrés Wallberg />'}
            </Typography>
        </Box>
    );
}
