import React, { useEffect, useState } from 'react';
import './Main.css';
import Form from '../Form/Form';
import YearsBlock from '../YearsBlock/YearsBlock';

const Main = ({ totalAppreciationProp }) => {
  const [appreciationValues, setAppreciationValues] = useState([]);
  const [propertyValue, setPropertyValue] = useState('$100,000');

  useEffect(() => {
    calculateAppreciation(100000, 2024);
  }, []);

  const handleSubmit = (initialVal, year) => {
    calculateAppreciation(initialVal, year);
    setPropertyValue(formatCurrency(initialVal));
  }

  const calculateAppreciation = (initialVal, year) => {
    let values = [];
    let currentVal = initialVal;
    let totalApp = 0;

    for (let i = 1; i <= 10; i++) {
      const appreciation = Math.round(currentVal * 0.05)
      currentVal = Math.round(currentVal + appreciation);
      values.push({
        year: year + i,
        value: formatCurrency(currentVal),
        appreciation: formatCurrency(appreciation)
      });
    }

    totalApp = formatCurrency(currentVal - initialVal);
    setAppreciationValues(values);
    totalAppreciationProp(totalApp);

  }

  const formatCurrency = (value) => {
    const numberValue = parseFloat(value);
    if (isNaN(numberValue)) {
      return "";
    }
    return "$" + numberValue.toLocaleString();
  }

  return (
    <div className="main">
      <div>
        <h3>Property Info</h3>
        <Form onSubmission={handleSubmit} />
      </div>
      <div>
        <h3 className="overflow-text">Appreciation - {propertyValue} Property</h3>
        <div className="outputs">
          <YearsBlock title="Years 1-5" start={1} end={5} appreciationValues={appreciationValues} />
          <YearsBlock title="Years 6-10" start={6} end={10} appreciationValues={appreciationValues} />
        </div>
      </div>
    </div>
  );
};

export default Main;
