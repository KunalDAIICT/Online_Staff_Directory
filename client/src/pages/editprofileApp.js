
import React, { useState } from 'react';
import './App.css';
import EditProfile from './components/EditProfile';
import ProfileImage from './components/ProfileImage';

function App() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="App">
      <div className="container">
        <EditProfile />
        <ProfileImage />
        <ProfileImage />
      </div>
    </div>
  );
}

export default App;
