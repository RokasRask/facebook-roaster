import React, { useState, useEffect } from 'react';
import './RoastResult.scss';

const RoastResult = ({ data }) => {
  const [visibleRoasts, setVisibleRoasts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (!data || !data.roastPoints || data.roastPoints.length === 0) {
      return;
    }
    
    // Reset state when new data arrives
    setVisibleRoasts([]);
    setCurrentIndex(0);
    
    // Reveal roasts one by one with a delay
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        if (nextIndex <= data.roastPoints.length) {
          setVisibleRoasts(data.roastPoints.slice(0, nextIndex));
        }
        
        if (nextIndex >= data.roastPoints.length) {
          clearInterval(interval);
        }
        
        return nextIndex;
      });
    }, 800);
    
    return () => clearInterval(interval);
  }, [data]);

  if (!data || !data.username) {
    return null;
  }

  return (
    <div className="roast-result">
      <div className="roast-header">
        <h2 className="roast-title">
          <span className="username">@{data.username}</span>'s Profile Roast
        </h2>
        <p className="roast-subtitle">Here's what AI thinks about your profile:</p>
      </div>
      
      <div className="roast-points-container">
        {visibleRoasts.map((roast, index) => (
          <div 
            key={index} 
            className={`roast-point ${index === visibleRoasts.length - 1 ? 'highlight' : ''}`}
          >
            <div className="roast-point-number">{index + 1}</div>
            <div className="roast-point-text">{roast}</div>
          </div>
        ))}
      </div>
      
      {visibleRoasts.length === data.roastPoints.length && (
        <div className="roast-conclusion slide-up">
          <p>
            Remember, this is all in good fun! Want to share these burns with your friends?
          </p>
          <div className="share-buttons">
            <button className="share-button facebook">
              <i className="icon-facebook"></i>
              Share on Facebook
            </button>
            <button className="share-button twitter">
              <i className="icon-twitter"></i>
              Share on Twitter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoastResult;