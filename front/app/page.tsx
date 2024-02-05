import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
export default function Home() {
  return (
    <div className={styles.main}>
      <NavBar/>
      <AboutMe />
    </div>
  );
}
