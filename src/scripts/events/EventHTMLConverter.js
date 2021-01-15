import { eventForm } from './EventForm.js'

const eventHub = document.querySelector(".container")


export const EventHTMLConverter = (eventObject) => {
    return `
    <div class="eventCard">
        <div><h2 class="eventName">${eventObject.name}</h2></div>
        <div>Date: ${eventObject.date}</div>
        <div>${eventObject.location}</div>
        <div>${eventObject.address}</div>
        <div>${eventObject.city} ${eventObject.state}, ${eventObject.zip}</div>
        
        <button class="showWeatherBtn">Show Weather</button>
    <div>
    
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addEventBtn") {
        eventForm()
    }
})