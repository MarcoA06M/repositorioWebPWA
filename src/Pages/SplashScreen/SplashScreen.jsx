
import React from 'react';
import './SplashScreen.css';

export const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo">
          <h1 className="splash-title">DMSERVICESQRO</h1>
          <p className="splash-subtitle">Más que un evento, una experiencia única</p>
        </div>
        <div className="splash-loader">
          <div className="loader-spinner"></div>
        </div>
      </div>
    </div>
  );
};
