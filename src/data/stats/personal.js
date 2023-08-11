import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2006-07-23T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Age',
    value: <Age />,
  },
  {
    key: 'languages',
    label: 'Languages spoken',
    value: 'Bengali, English, Japanese, Spanish',
  },
  {
    key: 'location',
    label: 'Location',
    value: 'Dhaka, Bangladesh',
  },
];

export default data;
