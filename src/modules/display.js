import { currentTemperatureBox, locationBox, weatherIcon, conditionBox, windBox, precBox, humidityBox } from "..";

export function displayWeather(weatherData)
{
    const { currentTemperature, lastUpdated, city, region, conditionText, conditionIcon, humidity, prec, windSpeed } = weatherData;


    const iconSize = '128x128';
    const iconURL = conditionIcon.replace('64x64', iconSize);

    weatherIcon.src = `https:${iconURL}`;
    currentTemperatureBox.textContent = currentTemperature + "°C";
    humidityBox.textContent = humidity + "%";
    precBox.textContent = prec + "mm";
    windBox.textContent = windSpeed + "km/h";

    if (region) {
        locationBox.textContent = city + ", " + region + " - As of " + lastUpdated;
    } else if (!region) {
        locationBox.textContent = city + " - As of " + lastUpdated;
    }

    conditionBox.textContent = conditionText;
}