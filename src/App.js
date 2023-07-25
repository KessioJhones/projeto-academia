import React from 'react';
import Navbar from './Navbar';
import CardComponent from './CardComponent';
import { Box } from '@mui/material';

function App() {
  return (
    <div style={{ background: '#1C1C1C', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <CardComponent />
      </Box>
    </div>
  );
}

export default App;
