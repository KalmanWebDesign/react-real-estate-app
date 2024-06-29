import React from 'react';
import './YearsBlock.css';

const YearsBlock = ({ title, start, end, appreciationValues }) => {
  return (
    <div className="years">
      <h4>{title}</h4>
      <div className="years-container">
        {appreciationValues.slice(start - 1, end).map((item, index) => (
          <div key={index}>
            <div className="year">
              <div>{item.year}</div>
              <hr />
            </div>
            <div className="output-vals">
              <div className="value">
                <h5>Value</h5>
                <h5>{item.value}</h5>
              </div>
              <div className="appreciation">
                <h5>Appreciation</h5>
                <h5>{item.appreciation}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default YearsBlock;
