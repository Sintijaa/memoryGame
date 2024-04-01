import React, { useState } from 'react';
import '../style/profile.css';

const Profile = () => {
  // Sākotnējās vērtības lietotāja informācijai
  const [userName, setUserName] = useState('Lietotājs');
  const [registrationDate, setRegistrationDate] = useState('2023-01-01');
  const [achievements, setAchievements] = useState('10 uzvaras');
  const [imageUrl, setImageUrl] = useState('');
  const [userInputUrl, setUserInputUrl] = useState('');
  const [userInputName, setUserInputName] = useState('');

  const editName = () => {
    const newName = prompt('Ievadiet jauno vārdu:', userName);
    if (newName) {
      setUserName(newName);
    }
  };

  const addImage = () => {
    setImageUrl(userInputUrl);
  };

  
  return (
    <div className="profile">
      <h2>Lietotāja Profils</h2>
      {imageUrl && (
        <div className="profile-image-container">
          <img src={imageUrl} alt="User" className="profile-image" />
          <div>
            <strong>Vārds:</strong> <span>{userName}</span>
            <button onClick={editName}>Mainīt vārdu</button>
          </div>
          <button onClick={() => setImageUrl('')}>
            Noņemt bildi
          </button>
        </div>
      )}
      {!imageUrl && (
        <div className="add-image">
          <input
            type="text"
            value={userInputUrl}
            onChange={(e) => setUserInputUrl(e.target.value)}
            placeholder="Ievadiet bildes URL"
          />
          <button onClick={addImage}>Pievienot bildi</button>
        </div>
      )}
      <div className="profile-info">
        <div>
          <strong>Reģistrējies kopš:</strong> <span>{registrationDate}</span>
        </div>
        <div>
          <strong>Sasniegumi:</strong> <span>{achievements}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
