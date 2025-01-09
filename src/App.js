// src/App.js
import React from "react";
import PhotoGallery from "./components/PhotoGallery";
import "./components/PhotoGallery.css"; 
import "./App.css"; 

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-heading">inspagram | Unsplash API Random Image Generator</h1>
        <h2 className="sub-heading">
          random is beautiful | discover artists | explore your imagination | find inspiration
        </h2>
      </header>
      <main>
        <PhotoGallery />
      </main>
    </div>
  );
};

export default App;
