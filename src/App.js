// src/App.js
import React from "react";
import TiltedPageScroll from "./components/TiltedPageScroll";
import "./components/PhotoGallery.css";
import "buffer";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "'Sixtyfour', sans-serif" }} className="fluorescent-text">inspagram</h1>
      <h2 style={{ fontFamily: "'Sixtyfour', sans-serif" }} className="fluorescent-text">retrouvez-moi sur @aie_aie_art</h2>
      <TiltedPageScroll />
    </div>
  );
}

export default App;
