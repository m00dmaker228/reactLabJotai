import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Box
      sx={{
        p: 2,
        mt: 'auto',
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Movie App. All rights reserved.
      </Typography>
    </Box>
  );
};


