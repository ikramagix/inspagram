// src/App.js
import React from "react";
import PhotoGallery from "./components/PhotoGallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 

const App = () => {
  return (
    <div className="App">
      <header className="App-header bg-light text-center py-5 shadow-sm">
        <div className="container">
          <h1 className="main-heading display-4 fw-bold text-primary mb-3">
            inspagram
          </h1>
          <p className="sub-heading lead text-muted">
            because random is beautiful | discover artists | unleash your imagination | find inspiration
          </p>
          <h3 className="text-secondary">Unsplash API Random Image Generator</h3>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          <PhotoGallery />
        </div>
      </main>
    </div>
  );
};

export default App;
