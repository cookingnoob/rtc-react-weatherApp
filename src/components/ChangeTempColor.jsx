import React from 'react'
import '../App.css'

const ChangeTempColor = ({ temp, tag }) => {
  const getTemperatureClass = (temp) => {
    if (temp < 5) {
      return 'temp-cold';
    } else if (temp > 28) {
      return 'temp-hot';
    } else if (temp > 20) {
      return 'temp-mild';
    } else if (temp > 10) {
      return 'temp-chill';
    } else {
      return 'temp-default';
    }
  };

  const className = getTemperatureClass(temp)
  const TagName = tag || 'p';

  return React.createElement(TagName, { className: className }, `${temp}ºC`);
};

export default ChangeTempColor