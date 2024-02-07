import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skills from './components/Skills';
export default function Home() {
  return (
    <Grid container className={styles.main}>
      <NavBar/>
      <AboutMe />
      <Skills />  
    </Grid>
  );
}
