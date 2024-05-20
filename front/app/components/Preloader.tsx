"use client";
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); 

  return showPreloader ? (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100vw', height: '100vh', backgroundColor: '#2d2d35' }}
    >
      <Grid item>
        <img src="/assets/img/pre.png" alt="Preloader Image" style={{ maxWidth: '500px'}} />
      </Grid>
    </Grid>
  ) : null;
};

export default Preloader;
