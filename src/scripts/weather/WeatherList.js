import { copiedWeather, getWeather } from './WeatherProvider.js'
import { WeatherHTMLComponent } from './WeatherHTMLComponent.js'

const weatherLocation = document.querySelector(".weatherList")

let weatherCards = []

const WeatherList = () => {
    getWeather()
    .then( () => {
        weatherCards = copiedWeather()
        renderWeather(weatherCards)
    }
    )
}

export const renderWeather = (weatherArray) => {
    const allWeatherConvertedToStrings = weatherArray.map(
        (event) => {
            return WeatherHTMLComponent(event)
        }).join("")
        weatherLocation.innerHTML = allWeatherConvertedToStrings
}