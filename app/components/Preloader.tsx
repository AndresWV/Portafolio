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

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#2d2d35', 
        position: 'relative',
        opacity: showPreloader ? 1 : 0, 
        transition: 'opacity 1s ease-in', 
      }}
    >
      {showPreloader && (
        <Grid
          item
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '80%',
            borderRadius: '100%',
            boxShadow: '0 0 50px #64B6AC, 0 0 70px #64B6AC, 0 0 100px #64B6AC, 0 0 150px #64B6AC',
            animation: 'pulse 1.5s infinite alternate',
          }}
        />
      )}

      <Grid item>
        <img
          src="/assets/img/pre.png"
          alt="Preloader Image"
          style={{ maxWidth: '500px', width: '100%', height: 'auto', transition: 'opacity 1s ease-in' }}
        />
      </Grid>
    </Grid>
  );
};

export default Preloader;
