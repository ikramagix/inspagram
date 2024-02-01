// src/App.js
import React from 'react';
import PhotoGallery from './components/PhotoGallery';
import './components/PhotoGallery.css'; 

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "'Sixtyfour', sans-serif" }} className="fluorescent-text">ikstagram</h1>
      <h2 style={{ fontFamily: "'Sixtyfour', sans-serif" }} className="fluorescent-text">@aie_aie_art</h2>
      <PhotoGallery />
    </div>
  );
}

export default App;


