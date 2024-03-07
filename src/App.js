// src/App.js
import React from "react";
import TiltedPageScroll from "./components/TiltedPageScroll";
import "./components/PhotoGallery.css";
import "buffer";

function App() {
  return (
    <div className="App">
      <h1

      >
        an:ikstagram 
      </h1>
      <div>
        <section className="instagram-wrap">
          <TiltedPageScroll />
        </section>
      </div>
    </div>
  );
}

export default App;
