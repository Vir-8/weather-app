import { mainContainer } from "..";

export function changeBackground(weatherCode, lastUpdated)
{
    const weatherClasses = ['clear-day', 'clear-night', 'cloudy-day', 'cloudy-night', 'rainy-day', 'rainy-night', 'thunderstorm-day', 'thunderstorm-night', 'snowy-day', 'snowy-night', 'mist-day', 'mist-night']; 

    const rainCodes = [1180, 1183, 1186, 1195, 1198, 1201, 1204, 1240, 1243, 1246, 1249, 1252, 1255, 1258];
    const thunderstormCodes = [1273, 1276, 1279, 1282];

    weatherClasses.forEach(className => {
        mainContainer.classList.remove(className);
    });

    const hour = Number(lastUpdated.split(' ')[1].split(':')[0]);

    if (hour >= 6 && hour < 18) {
        if (weatherCode == 1000) {
            mainContainer.classList.add('clear-day');
        }
        else if (weatherCode >= 1003 && weatherCode <= 1009) {
          mainContainer.classList.add('cloudy-day');
        } 
        // else if (weatherCode >= 1063 && weatherCode <= 1189) {
        //   mainContainer.classList.add('rainy-day');
        // } 
        // else if (weatherCode >= 1192 && weatherCode <= 1289) {
        //   mainContainer.classList.add('thunderstorm-day');
        // } 
        else if (rainCodes.includes(weatherCode)) {
            // Assign class for rain
            mainContainer.classList.add('rainy-day');
        } 
        else if (thunderstormCodes.includes(weatherCode)) {
            // Assign class for thunderstorm
            mainContainer.classList.add('thunderstorm-day');
        }
        else if (weatherCode >= 1114 && weatherCode <= 1216) {
          mainContainer.classList.add('snowy-day');
        } 
        else if (weatherCode === 1030 || weatherCode === 1135) {
          mainContainer.classList.add('mist-day');
        }
    } 
    else {
        // Nighttime
        if (weatherCode == 1000) {
            mainContainer.classList.add('clear-night');
        }
        else if (weatherCode >= 1003 && weatherCode <= 1009) {
          mainContainer.classList.add('cloudy-night');
        } 
        // else if (weatherCode >= 1063 && weatherCode <= 1189) {
        //   mainContainer.classList.add('rainy-night');
        // } 
        // else if (weatherCode >= 1192 && weatherCode <= 1289) {
        //   mainContainer.classList.add('thunderstorm-night');
        // } 
        else if (rainCodes.includes(weatherCode)) {
            // Assign class for rain
            mainContainer.classList.add('rainy-night');
        } 
        else if (thunderstormCodes.includes(weatherCode)) {
            // Assign class for thunderstorm
            mainContainer.classList.add('thunderstorm-night');
        }
        else if (weatherCode >= 1114 && weatherCode <= 1216) {
          mainContainer.classList.add('snowy-night');
        } 
        else if (weatherCode === 1030 || weatherCode === 1135) {
          mainContainer.classList.add('mist-night');
        }
    }
}