import React, { useState } from 'react';
import './ProfileForm.scss';

const ProfileForm = ({ onSubmit, isLoading }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username.trim()) {
      setError('Please enter a Facebook username or profile URL');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // Extract username from URL if needed
    let parsedUsername = username;
    
    if (username.includes('facebook.com/')) {
      try {
        const url = new URL(username);
        const pathParts = url.pathname.split('/').filter(Boolean);
        if (pathParts.length > 0) {
          parsedUsername = pathParts[0];
        }
      } catch (e) {
        // If not a valid URL, just use the input as is
      }
    }
    
    onSubmit(parsedUsername);
  };

  return (
    <div className="profile-form-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Enter Facebook Profile Username or URL
          </label>
          <input
            type="text"
            id="username"
            className={`form-input ${error ? 'form-input-error' : ''}`}
            placeholder="e.g. johndoe or https://facebook.com/johndoe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loader"></span>
              Generating Roast...
            </>
          ) : (
            'Roast My Profile'
          )}
        </button>
      </form>
      <div className="form-disclaimer">
        <p>
          This is for entertainment purposes only. No actual data is collected from your profile.
        </p>
      </div>
    </div>
  );
};

export default ProfileForm;