import React, { useState } from 'react';
import './Form.css';

const Form = ({onSubmission}) => {
  const [currentVal, setCurrentVal] = useState('');

  const cleanSubmit = (e) => {
    e.preventDefault();
    const initialVal = parseFloat(currentVal.replace(/[$,]/g, ''));
    const year = parseInt(e.target.currentYear.value);

    if (isNaN(initialVal) || isNaN(year)) {
      alert('Please enter valid numbers')
      return;
    }

    onSubmission(initialVal, year);
  }

  const formatInputCurrency = (value) => {
    const numberString = value.replace(/[^\d]/g, '');
    const numberValue = parseFloat(numberString);
    if (isNaN(numberValue)) {
      return '';
    }
    return "$" + numberValue.toLocaleString();
  }

  return (
    <div>
      <form onSubmit={cleanSubmit}>
        <label htmlFor="currentVal">Current Value (Ex. 100,000)</label>
        <input id="currentVal" name="currentVal" placeholder='Ex. $100,000' value={currentVal}
        onChange={(e) => setCurrentVal(formatInputCurrency(e.target.value))} />
        <label htmlFor="currentYear">Current Year (Ex. 2024)</label>
        <input type="number" id="currentYear" name="currentYear" placeholder='Ex. 2024' />
        <div className="btn-container">
          <button type="submit">Calculate</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
