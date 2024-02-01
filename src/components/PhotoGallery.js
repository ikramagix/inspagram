import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';
import ReactModal from 'react-modal';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Charger 5 photos
        const response = await unsplash.photos.list({ page: 1, perPage: 5 });
        if (response.errors) {
          console.log('error occurred: ', response.errors[0]);
        } else {
          setPhotos(response.response);
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="container my-4">
      <div className="row mt-4">
        {photos.map((photo, index) => (
          <div className="col-md-4 mb-3" key={index} onClick={() => openModal(photo)}>
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              className="img-fluid rounded"
            />
          </div>
        ))}
      </div>

      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {selectedPhoto && (
          <div>
            <img
              src={selectedPhoto.urls.regular}
              alt={selectedPhoto.alt_description}
              className="img-fluid rounded"
            />
            <p className="mt-3">{selectedPhoto.description || 'No Description'}</p>
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default PhotoGallery;
