import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Grid from '@mui/material/Grid';
export default function Home() {
  return (
    <Grid container className={styles.main}>
      <NavBar/>
      <AboutMe />
    </Grid>
  );
}
