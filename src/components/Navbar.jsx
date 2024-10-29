import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export const Navbar = () =>  {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie App
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Movies</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


