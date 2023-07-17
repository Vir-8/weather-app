import { displayWeather } from "./display";
import { place } from "..";

export async function getWeather(placeName) { 
  try {

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f3ae3cf617144c85a8993813231507&q=${placeName}`);

    const data = await response.json();
    
    let weatherData = {
      currentTemperature_c: data.current.temp_c,
      lastUpdated: data.current.last_updated,
      city: data.location.name,
      region: data.location.region,
      conditionText: data.current.condition.text,
      conditionIcon: data.current.condition.icon,
      weatherCode: data.current.condition.code,
      humidity: data.current.humidity,
      prec_mm: data.current.precip_mm,
      windSpeed_km: data.current.wind_kph,
      feel_c: data.current.feelslike_c
    };

    displayWeather(weatherData);

  } catch (error) {
    console.log('Error fetching weather data:', error);
    place.setCustomValidity("Error: Invalid place name.\xA0\n Make sure the spelling is correct and try again!");
    place.reportValidity();
  }
}
