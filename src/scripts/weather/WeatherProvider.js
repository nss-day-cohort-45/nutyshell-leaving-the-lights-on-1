import { settings } from "./settings.js"

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