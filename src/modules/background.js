import { mainContainer } from "..";

export function changeBackground(weatherCode, lastUpdated)
{
    const weatherClasses = ['clear-day', 'clear-night', 'cloudy-day', 'cloudy-night', 'rainy-day', 'rainy-night', 'thunderstorm-day', 'thunderstorm-night', 'snowy-day', 'snowy-night', 'mist-day', 'mist-night']; 

    const rainCodes = [1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246];
    const thunderstormCodes = [1087, 1273, 1276, 1279, 1282];
    const cloudyCodes = [1003, 1006, 1009];
    const snowCodes = [1066, 1069, 1072, 1114, 1117, 1147, 1168, 1171, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264];
    const mistCodes = [1030, 1135]

    weatherClasses.forEach(className => {
        mainContainer.classList.remove(className);
    });

    const hour = Number(lastUpdated.split(' ')[1].split(':')[0]);

    if (hour >= 6 && hour < 19) {
        if (weatherCode == 1000) {
            mainContainer.classList.add('clear-day');
        }
        else if (weatherCode >= 1003 && weatherCode <= 1009) {
          mainContainer.classList.add('cloudy-day');
        }
        else if (rainCodes.includes(weatherCode)) {
            mainContainer.classList.add('rainy-day');
        } 
        else if (thunderstormCodes.includes(weatherCode)) {
            mainContainer.classList.add('thunderstorm-day');
        }
        else if ((snowCodes.includes(weatherCode))) {
          mainContainer.classList.add('snowy-day');
        } 
        else if (mistCodes.includes(weatherCode)) {
          mainContainer.classList.add('mist-day');
        }
    } 
    else {
        // Nighttime
        if (weatherCode == 1000) {
            mainContainer.classList.add('clear-night');
        }
        else if (cloudyCodes.includes(weatherCode)) {
          mainContainer.classList.add('cloudy-night');
        } 
        else if (rainCodes.includes(weatherCode)) {
            mainContainer.classList.add('rainy-night');
        } 
        else if (thunderstormCodes.includes(weatherCode)) {
            mainContainer.classList.add('thunderstorm-night');
        }
        else if (snowCodes.includes(weatherCode)) {
          mainContainer.classList.add('snowy-night');
        } 
        else if (mistCodes.includes(weatherCode)) {
          mainContainer.classList.add('mist-night');
        }
    }
}