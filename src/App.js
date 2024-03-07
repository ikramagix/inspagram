// src/App.js
import React from "react";
import PhotoGallery from "./components/PhotoGallery";
import TiltedPageScroll from "./components/TiltedPageScroll";
import "./components/PhotoGallery.css";
import "buffer";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "'Sixtyfour', sans-serif" }} className="fluorescent-text">inspagram.clone</h1>
      <h2 style={{ fontFamily: "'Sixtyfour', sans-serif" }} className="fluorescent-text">random is beautiful | get inspired</h2>
      <PhotoGallery />
      <TiltedPageScroll />
    </div>
  );
}

export default App;
