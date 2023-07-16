import { getWeather } from "./modules/weather";

const place = document.getElementById('placeName');
const submit = document.getElementById('submit');
const weatherBox = document.querySelector('.weather');
const currentTemperatureBox = document.querySelector('.currentTemperature');
const locationBox = document.querySelector('.location');
const weatherIcon = document.querySelector('#weatherIcon');
const conditionBox = document.querySelector('.condition');

const windBox = document.querySelector('.wind');
const precBox = document.querySelector('.precipitation')
const humidityBox = document.querySelector('.humidity')

let placeName = 'mumbai';


getWeather(placeName);

submit.onclick = function(e) {
    placeName = place.value;
    getWeather(placeName);
    e.preventDefault();
}

export { weatherBox, currentTemperatureBox, locationBox, weatherIcon, conditionBox, windBox, precBox, humidityBox };