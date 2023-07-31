import axios from 'axios';

const API_KEY = '80bb67aee147c39d0ecfea9e7dfae576'; // Replace with your OpenWeatherMap API key
const API_URL = 'https://api.openweathermap.org/data/2.5';

// Action Types
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST';
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';
export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE';

// Action Creators
export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const fetchForecastRequest = () => ({
  type: FETCH_FORECAST_REQUEST,
});

export const fetchForecastSuccess = (data) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: data,
});

export const fetchForecastFailure = (error) => ({
  type: FETCH_FORECAST_FAILURE,
  payload: error,
});

// Thunk to fetch current weather data
export const fetchWeatherData = (city) => (dispatch) => {
  dispatch(fetchWeatherRequest());

  axios
    .get(`${API_URL}/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    })
    .then((response) => {
      dispatch(fetchWeatherSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchWeatherFailure(error.message));
    });
};

// Thunk to fetch 5-day weather forecast data
export const fetchForecastData = (city) => (dispatch) => {
  dispatch(fetchForecastRequest());

  axios
    .get(`${API_URL}/forecast`, {
      params: {
        q: city,
        units: 'metric',
        cnt: 5, // Requesting forecast data for the next 5 days
        appid: API_KEY,
      },
    })
    .then((response) => {
      dispatch(fetchForecastSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchForecastFailure(error.message));
    });
};
