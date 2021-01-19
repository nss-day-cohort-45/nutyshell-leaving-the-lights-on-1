import { copiedWeather, getWeather } from './WeatherProvider.js'
import { WeatherHTMLComponent } from './WeatherHTMLComponent.js'

const weatherLocation = document.querySelector(".weatherList")

let weatherCards = []

export const WeatherList = () => {
    getWeather()
    .then( () => {
        weatherCards = copiedWeather()
        renderWeather(weatherCards)
    })
}

const renderWeather = (weatherArray) => {
    const allWeatherConvertedToStrings = weatherArray.daily.map(
        (event) => {
            return WeatherHTMLComponent(event)
        }).join("")
        weatherLocation.innerHTML = allWeatherConvertedToStrings
}

