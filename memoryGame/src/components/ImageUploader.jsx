import React, { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  // Funkcija, kas apstrādā failu augšupielādi
  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      setImage(URL.createObjectURL(uploadedImage));
    }
  };

  // HTML izkārtojums un komponenta atgriešana
  return (
    <div>
      <strong>Bilde:</strong>
      {image ? (
        <img src={image} alt="User" className="profile-image" />
      ) : (
        <input type="file" onChange={handleImageUpload} />
      )}
    </div>
  );
};

export default ImageUploader;
