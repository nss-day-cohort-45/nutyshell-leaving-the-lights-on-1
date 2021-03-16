import { copiedWeather, getWeather } from './WeatherProvider.js'
import { WeatherHTMLComponent } from './WeatherHTMLComponent.js'

/*
The WeatherList determines where on the page the weather will be 
displayed (weatherLocation), uses the Provider's getWeather to
fetch the data and then assign it to weatherCards and render it to
the DOM with the WeatherHTMLConverter within renderWeather.
*/

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

