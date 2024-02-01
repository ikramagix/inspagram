import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';
import ReactModal from 'react-modal';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        // Charger des photos aléatoires
        unsplash.photos.getRandom({ count: 10 }) // Obtenir 10 photos aléatoires
            .then(result => {
                if (result.errors) {
                    console.log('error occurred: ', result.errors[0]);
                } else {
                    setPhotos(result.response);
                }
            });
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
                        <img src={selectedPhoto.urls.regular} alt={selectedPhoto.alt_description} className="img-fluid rounded" />
                        <p className="mt-3">{selectedPhoto.description || 'No Description'}</p>
                    </div>
                )}
            </ReactModal>
        </div>
    );
};

export default PhotoGallery;
