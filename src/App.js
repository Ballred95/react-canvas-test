import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const startDrawing = () => {

  }

  return (
    <div className="App">
      <canvas
      onMouseDown={startDrawing}
      />
    </div>
  );
}

export default App;
