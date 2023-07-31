import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData, fetchForecastData } from './Actions';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(city));
    dispatch(fetchForecastData(city));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={styles.inputField}
      />
      <button type="submit" style={styles.submitButton}>
        Get Weather
      </button>
    </form>
  );
};

const styles = {
  formContainer: {
    margin: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight: '10px',
    width: '250px',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default WeatherForm;
