import React, { useState, useEffect } from 'react';
import './WeatherSearch.css';
const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(true);

  const searchWeather = () => {
    // Fetch weather data from the API based on the city
    // Use the free tier of the API available at https://www.weatherapi.com/
    // Set the retrieved data using setWeather
    const apiKey = 'https://www.weatherapi.com/'

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data.current);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle error scenarios, e.g., show an error message to the user
      });
  };

  useEffect(() => {
    if (city) {
      searchWeather();
    }
  }, [city]);

  return (
    <div className="weather-search">
        <div className='weather-temp'> 
        <button className='temp'>°F</button>
        <button className='temp2'>°C</button>
        </div>
        <br/>
      <input
        type="text"
        id="city"
        value={city}
        className='input'
        placeholder='Search entering city name, US zip code, Canada Postal Code, ip etc...'
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="button" onClick={searchWeather}>
        Search
      </button>

      {weather && (
        <>
        <div className='img-city'>
        <img src='' className='img'/>
        <h1 className='city-name'>{city}</h1>
        </div>
        <p className='state-name'>{}</p>
        <div className="weather-details">
            
          {/* Display weather details and 5-day forecast here */}
          
          <div className='weather-card'>
            <div className='cloud-img'>
                <img src='https://cdn.weatherapi.com/weather/64x64/day/116.png' className='cloud'/>
                <p className='para'>Partly Cloudy</p>
            
            <div className='details-card'>
              <p className='details'>Wind:19.2mph</p>
              <p className='details'>Precip:0.0in</p>
              <p className='details'>Pressure:29.9in</p>
              <p className='deg'>82.4°F</p>
            </div>
        </div>
        </div>
        <div className='card'>
        <div class='day-details'>
          <p className='week'>Fri</p>
          <img src='https://cdn.weatherapi.com/weather/64x64/day/116.png' className='image'/>
          <p className='week'>74.6 °f</p>
        </div>
        <div class='day-details'>
          <p className='week'>Sat</p>
          <img src='https://cdn.weatherapi.com/weather/64x64/day/116.png' className='image'/>
          <p className='week'>74.6 °f</p>
        </div>
        <div class='day-details'>
          <p className='week'>Sun</p>
          <img src='https://cdn.weatherapi.com/weather/64x64/day/116.png' className='image'/>
          <p className='week'>74.6 °f</p>
        </div>
        <div class='day-details'>
          <p className='week'>Mon</p>
          <img src='https://cdn.weatherapi.com/weather/64x64/day/116.png' className='image'/>
          <p className='week'>74.6 °f</p>
        </div>
        <div class='day-details'>
          <p className='week'>Tue</p>
          <img src='https://cdn.weatherapi.com/weather/64x64/day/116.png' className='image'/>
          <p className='week'>74.6 °f</p>
        </div>
        </div>
        </div>
        </>
      )}
    </div>
   
   
  );
};

export default WeatherSearch;
