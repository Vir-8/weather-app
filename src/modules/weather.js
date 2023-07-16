import { displayWeather } from "./display";

export async function getWeather(placeName) { 

    fetch(`https://api.weatherapi.com/v1/current.json?key=f3ae3cf617144c85a8993813231507&q=${placeName}`)
      .then(function(response) {
        return response.json();
    })

    .then(data => {
        let weatherData = {
            currentTemperature: data.current.temp_c,
            lastUpdated: data.current.last_updated,
            city: data.location.name,
            region: data.location.region,
            conditionText: data.current.condition.text,
            conditionIcon: data.current.condition.icon,
            humidity: data.current.humidity,
            prec: data.current.precip_mm,
            windSpeed: data.current.wind_kph
          };

        displayWeather(weatherData);
    })
    
    .catch(function(err) {
        console.log('Error fetching weather data:', err);
    });
}