import React from 'react';
import { useSelector } from 'react-redux';

const WeatherInfo = () => {
  const weatherData = useSelector((state) => state.weatherData);

  // Function to format the date as "Month Day" (e.g., "Aug 1")
 

  

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundImage: 'url("https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
         // Set a minimum height to fill the viewport
      }}
    >
      {weatherData && weatherData.name && (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px' }}>
          <h2>{weatherData.name}</h2>
          <div>Temperature: {weatherData.main.temp}°C</div>
          <div>Weather: {weatherData.weather[0].description}</div>
          <div>Humidity: {weatherData.main.humidity}%</div>
          <div>Wind Speed: {weatherData.wind.speed} m/s</div>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
            style={{ width: '100px', height: '100px', margin: '10px' }}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
