import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Grid from '@mui/material/Grid';
import Skills from './components/Skills';
import Footer from "./components/Footer";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <Grid container className={styles.main}>
      <NavBar/>
      <AboutMe />
      <Skills />  
      <Projects />
      <Footer />
    </Grid>
  );
}
