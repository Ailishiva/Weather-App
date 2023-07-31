import React from 'react';
import { Provider } from 'react-redux';
import './App.css'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './Components/Reducers';
import WeatherForm from './Components/WeatherForm';
import WeatherInfo from './Components/WeatherInfo';

const store = createStore(weatherReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Weather Forecast Application</h1>
        <WeatherForm />
        <WeatherInfo />
      </div>
    </Provider>
  );
};

export default App;
