import React from 'react';
import Container from '@mui/material/Container';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <Container component="main" sx={{ flex: 1 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Movie App!
      </Typography>
    </Container>
    <Footer/>
  </div>
  )
}

export default App