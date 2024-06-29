import React from 'react';
import './TotalApp.css';

const TotalApp = ({totalAppreciation}) => {
  return (
    <div>
      <div className="total-app-container">
        <div className="total-app-inline">
          <h4>Total Appreciation:</h4>
          <h2 className="total-output">{totalAppreciation}</h2>
        </div>
      </div>
    </div>
  );
};

export default TotalApp;
