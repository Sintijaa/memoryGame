import React, { useState } from 'react';
import '../style/profile.css';
import ImageUploader from './ImageUploader';

const Profile = () => {
  // Sākotnējās vērtības lietotāja informācijai
  const [userName, setUserName] = useState('Lietotājs');
  const [registrationDate, setRegistrationDate] = useState('2023-01-01');
  const [achievements, setAchievements] = useState('10 uzvaras');
  const [imageUrl, setImageUrl] = useState('');

  // Funkcija, kas atjauno lietotāja vārdu, izmantojot pop-up dialogu
  const editName = () => {
    const newName = prompt('Ievadiet jauno vārdu:', userName);
    if (newName) {
      setUserName(newName);
    }
  };

  // HTML izkārtojums un komponenta atgriešana
  return (
    <div className="profile">
      <h2>Lietotāja Profils</h2>
      {imageUrl && (
        <div className="profile-image-container">
          <img src={imageUrl} alt="User" className="profile-image" />
          <button onClick={() => setImageUrl('')}>
            Noņemt bildi
          </button>
        </div>
      )}
      <div className="profile-info">
        <div>
          <strong>Vārds:</strong> <span>{userName}</span>
          <button onClick={editName}>Mainīt vārdu</button>
        </div>
        <div>
          <strong>Reģistrējies:</strong> <span>{registrationDate}</span>
        </div>
        <div>
          <strong>Sasniegumi:</strong> <span>{achievements}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
