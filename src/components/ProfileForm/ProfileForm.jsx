import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import './ProfileForm.scss';

const ProfileForm = ({ onSubmit, isLoading }) => {
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username.trim()) {
      setError(t('form.error.empty'));
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
            {t('form.label')}
          </label>
          <input
            type="text"
            id="username"
            className={`form-input ${error ? 'form-input-error' : ''}`}
            placeholder={t('form.placeholder')}
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
              {t('form.button.loading')}
            </>
          ) : (
            t('form.button.submit')
          )}
        </button>
      </form>
      <div className="form-disclaimer">
        <p>
          {t('form.disclaimer')}
        </p>
      </div>
    </div>
  );
};

export default ProfileForm;