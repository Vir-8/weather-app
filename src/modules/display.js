import { currentTemperatureBox, locationBox, weatherIcon, conditionBox, windBox, precBox, humidityBox, feelsLike } from "..";
import { changeBackground } from "./background";

export function displayWeather(weatherData)
{
    const { currentTemperature_c, lastUpdated, city, region, conditionText, conditionIcon, humidity, prec_mm, windSpeed_km, weatherCode, feel_c } = weatherData;

    changeBackground(weatherCode, lastUpdated);

    const iconURL = conditionIcon.replace('64x64', '128x128');
    weatherIcon.src = `https:${iconURL}`;

    currentTemperatureBox.textContent = currentTemperature_c + "°C";
    conditionBox.textContent = conditionText;
    feelsLike.textContent = "Feels like " + feel_c + "°C";

    humidityBox.textContent = humidity + "%";
    precBox.textContent = prec_mm + " mm";
    windBox.textContent = windSpeed_km + " km/h";

    if (region) {
        locationBox.textContent = city + ", " + region + " - As of " + lastUpdated;
    } else if (!region) {
        locationBox.textContent = city + " - As of " + lastUpdated;
    }
}
