// src/components/PhotoGallery.js
import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

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

  return (
    <div>
      {photos.map(photo => (
        <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
      ))}
    </div>
  );
};

export default PhotoGallery;
