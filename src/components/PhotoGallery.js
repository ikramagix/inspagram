import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './../components/PhotoGallery.css'; 

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    loadPhotos(); 
  }, []);

  const loadPhotos = () => {
    unsplash.photos.list({ page: 1, perPage: 15 }) 
      .then(result => {
        if (result.errors) {
          console.log('error occurred: ', result.errors[0]);
        } else {
          setPhotos(result.response.results);
        }
      });
  };

  const handleReloadClick = () => {
    loadRandomPhotos(); 
  };
  
  const loadRandomPhotos = () => {
    const page = Math.floor(Math.random() * 10) + 1; 
    unsplash.photos.list({ page, perPage: 5 }) 
      .then(result => {
        if (result.errors) {
          console.log('error occurred: ', result.errors[0]);
        } else {
          setPhotos(result.response.results);
        }
      });
  };  

  return (
    <div className="container">
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.urls.small} alt={photo.alt_description} className="photo-image" />
            <div className="photo-overlay"></div>
            <div className="photo-details">
              <div className="photo-title">{photo.user.name}</div>
              <div className="photo-description">{photo.description}</div>
              <div className="photo-buttons">
                <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer" className="photo-button">
                  le_photographe.unsplash? 👨🏻‍✈️
                </a>
                <a href={photo.links.html} target="_blank" rel="noopener noreferrer" className="photo-button">
                  l'image_sur_unsplash.com? 🚁
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reload button */}
      <div className="text-center mt-4">
        <button
          className="btn"
          onClick={handleReloadClick}
        >
          magic... ? <i className="fa-solid fa-wand-magic-sparkles"></i>
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;

