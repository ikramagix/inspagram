import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import './PhotoGallery.css'; // Import your custom CSS file (PhotoGallery.css)

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    unsplash.photos.list({ page: 1, perPage: 10 })
      .then(result => {
        if (result.errors) {
          console.log('error occurred: ', result.errors[0]);
        } else {
          setPhotos(result.response.results);
        }
      });
  }, []);

  // Function to generate a random number between min and max
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Shuffle photos randomly
  const shufflePhotos = (photosArray) => {
    for (let i = photosArray.length - 1; i > 0; i--) {
      const j = getRandomNumber(0, i);
      [photosArray[i], photosArray[j]] = [photosArray[j], photosArray[i]];
    }
    return photosArray;
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4"> {/* Bootstrap grid */}
        <div className="col-12 mb-4">
          <h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Unsplash_wordmark_logo.svg" alt="Unsplash Logo" width="50" height="50" />
            powered by © unsplash
          </h1>
        </div>
        {shufflePhotos(photos).map(photo => (
          <div key={photo.id} className="col">
            <div className="custom-card">
              <img src={photo.urls.small} alt={photo.alt_description} className="custom-card-image" />
              <div className="custom-overlay"></div>
              <div className="custom-card-body">
                <h5 className="custom-card-title">{photo.user.name}</h5>
                <p className="custom-card-text">{photo.description}</p>
                <div className="custom-card-buttons">
                  <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer" className="btn btn-info custom-btn">
                    Voir le profil du photographe
                  </a>
                  <a href={photo.links.html} target="_blank" rel="noopener noreferrer" className="btn btn-warning custom-btn">
                    Voir l'image sur unsplash.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
