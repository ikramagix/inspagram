// src/App.js
import React from "react";
import PhotoGallery from "./components/PhotoGallery";
import "./components/PhotoGallery.css";
import "buffer";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "'Sixtyfour', sans-serif" }} className="fluorescent-text">inspagram | Unsplash API Random Image Generator</h1>
      <h2 style={{ fontFamily: "'Madimi One', sans-serif" }} className="fluorescent-text">random is beautiful | discover artists | explore your imagination | find inspiration</h2>
      <PhotoGallery />
    </div>
  );
}

export default App;
