"use client";
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Grid from '@mui/material/Grid';
import Skills from './components/Skills';
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Preloader from "./components/Preloader";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga durante 4 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpiamos el temporizador cuando el componente se desmonta
  }, []);
  return (
    <Grid container className={styles.main}>
       {isLoading ? (
        <Preloader />
      ) : (
        <>
          <NavBar />
          <AboutMe />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </Grid>
  );
}
