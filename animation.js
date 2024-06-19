import React, { useState, useEffect } from 'react';

 const [weatherClass, setWeatherClass] = useState('');

  useEffect(() => {
    // Set the weather class to "rainy" for demo purposes
    setWeatherClass('rainy');
  }, []);
 
  // Extracting prediction directly without the surrounding object
      const weatherPrediction = response.data.Prediction[0]; // Assuming only one prediction is returned
      setPrediction(response.data);

      // Determine the weather class based on the prediction
      switch (weatherPrediction) {
        case 'rain':
        case 'drizzle':
          setWeatherClass('rainy');
          break;
        case 'sunny':
        case 'sun':
          setWeatherClass('sunny');
          break;
        case 'windy':
          setWeatherClass('windy');
          break;
        case 'snow':
          setWeatherClass('snowy');
          break;
        default:
          setWeatherClass('');
          break;
      }