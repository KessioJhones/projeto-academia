import React from 'react';
import Navbar from './Navbar';
import CardComponent from './CardComponent';

function App() {
  return (
    <div style={{ background: '#1C1C1C', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default App;
