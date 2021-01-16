export const WeatherHTMLComponent = (weather) => {
    return `
    <section class="weatherContainer>
        <div class="dailyForecast">
            <div class="weatherIcon"><img  src="http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}.png"> </div>
            <p> High: ${weather.daily[0].temp.min}&deg</p>
            <p> Low: ${weather.daily[0].temp.max}&deg</p>
        </div>

        <div class="dailyForecast">
            <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}.png"></div>
            <p> High: ${weather.daily[1].temp.min}&deg</p>
            <p> Low: ${weather.daily[1].temp.max}&deg</p>
        </div>

        <div class="dailyForecast">
            <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}.png"></div>
            <p> High: ${weather.daily[2].temp.min}&deg</p>
            <p> Low: ${weather.daily[2].temp.max}&deg</p>
        </div>

        <div class="dailyForecast">
            <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}.png"></div>
            <p> High: ${weather.daily[3].temp.min}&deg</p>
            <p> Low: ${weather.daily[3].temp.max}&deg</p>
        </div>

        <div class="dailyForecast">
            <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}.png"></div>
            <p> High: ${weather.daily[4].temp.min}&deg</p>
            <p> Low: ${weather.daily[4].temp.max}&deg</p>
        </div>
    </section>
    `
}
