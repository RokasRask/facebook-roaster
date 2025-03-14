import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProfileForm from './components/ProfileForm/ProfileForm';
import RoastResult from './components/RoastResult/RoastResult';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (username) => {
    setLoading(true);
    
    // Mock API call for now
    setTimeout(() => {
      // This would be replaced with actual API call later
      setProfileData({
        username: username,
        roastPoints: [
          "Your profile picture screams 'I took 47 selfies before choosing this one'",
          "You share inspirational quotes like they're going out of style... they did, in 2012",
          "Nothing says 'living my best life' like posting vacation photos from 3 years ago",
          "Your food photos make professional chefs want to quit their jobs",
          "Checking in at the gym doesn't count as a workout"
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header />
        <main className="main-content">
          <ProfileForm onSubmit={handleSubmit} isLoading={loading} />
          {profileData && <RoastResult data={profileData} />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;