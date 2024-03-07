import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';
import './TiltedPageScroll.css'; 

const TiltedPageScroll = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const response = await unsplash.photos.getRandom({
        count: 10,
      });
      setPhotos(response.data); 
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
      {photos && photos.map((photo, index) => (
          <section key={photo.id} className={`page${index + 1}`}>
            <div className="page_container">
              <h1>
                <a href={photo.links.html} target="_blank" rel="noopener noreferrer">
                  <img src={photo.urls.small} alt={photo.alt_description} className="photo-image" />
                  <br />
                  <small>{photo.user.name}</small>
                </a>
              </h1>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TiltedPageScroll;
