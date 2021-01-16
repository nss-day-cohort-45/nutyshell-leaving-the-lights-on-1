import { settings } from "../Settings.js"

let weather = {}

export const copiedWeather = () =>  weather

export const getWeather = (zip) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&appid=${settings.weatherKey}`)
    .then(
        response => response.json())
        .then(
            parsedWeather => {
                console.log(parsedWeather)
                weather = parsedWeather
            }
        )    
}









