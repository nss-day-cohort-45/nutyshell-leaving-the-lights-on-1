import { settings } from "./settings.js"

/*
Using OpenWeather's 5 day forecast API, getWeather fetches the
data, assigns it to weather and exports it via copiedWeather
*/

let weather = {}

export const copiedWeather = () =>  weather

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=36.1627&lon=-86.7816&units=imperial&appid=${settings.weatherKey}`)
    .then(
        response => response.json())
        .then(
            parsedWeather => {
                weather = parsedWeather
            }
        )    
}