export const WeatherHTMLComponent = (weather) => {
    let icon = weather.weather[0].icon
    
    return `
    <section class="weatherContainer>
        <div class="dailyForecast">
            <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${icon}@2x.png"></img></div>
                <p> Low: ${weather.temp.min}&deg</p>
                <p> High: ${weather.temp.max}&deg</p>
        </div>   
    </section>
    `
}