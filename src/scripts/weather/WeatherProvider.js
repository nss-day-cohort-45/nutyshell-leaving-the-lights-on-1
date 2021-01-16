//import { settings } from "../Settings.js"

let weather = {}

export const copiedWeather = () =>  weather

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=$37211&units=imperial&appid=a9f776c92dfcd84ae6ad9d9e9340b036`)
    .then(
        response => response.json())
        .then(
            parsedWeather => {
                weather = parsedWeather
            }
        )    
}









