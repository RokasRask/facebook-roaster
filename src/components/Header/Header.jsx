import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Facebook Roaster</h1>
        <p className="header-subtitle">
          Let AI roast your Facebook profile for some brutal honesty and laughs
        </p>
      </div>
      <div className="header-image">
        <div className="image-container">
          <div className="bubble bubble-1">😂</div>
          <div className="bubble bubble-2">🔥</div>
          <div className="bubble bubble-3">💀</div>
        </div>
      </div>
    </header>
  );
};

export default Header;