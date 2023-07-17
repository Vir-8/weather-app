import './style.css';
import { getWeather } from "./modules/weather";

const mainContainer = document.querySelector('.main')

const place = document.getElementById('placeName');
const submit = document.getElementById('submit');

const weatherBox = document.querySelector('.weather');

const currentTemperatureBox = document.querySelector('.currentTemperature');
const weatherIcon = document.querySelector('#weatherIcon');
const feelsLike = document.querySelector('.feelsLike')

const locationBox = document.querySelector('.location');
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

export { weatherBox, currentTemperatureBox, locationBox, weatherIcon, conditionBox, windBox, precBox, humidityBox, mainContainer, feelsLike, place };