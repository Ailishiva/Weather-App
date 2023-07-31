import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    FETCH_FORECAST_REQUEST,
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_FAILURE,
  } from './Actions';
  
  const initialState = {
    loading: false,
    weatherData: null,
    forecastData: null,
    error: null,
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
      case FETCH_FORECAST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          loading: false,
          weatherData: action.payload,
        };
      case FETCH_FORECAST_SUCCESS:
        return {
          ...state,
          loading: false,
          forecastData: action.payload,
        };
      case FETCH_WEATHER_FAILURE:
      case FETCH_FORECAST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  