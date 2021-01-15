import { eventForm } from './EventForm.js'

const eventHub = document.querySelector(".container")


export const EventHTMLConverter = (eventObject) => {
    return `
    <section class="eventCard">
        <div>
            <div><h2 class="eventName">${eventObject.name}</h2></div>
            <div>Date: ${eventObject.date}</div>
            <div>${eventObject.location}</div>
            <div>${eventObject.address}</div>
            <div>${eventObject.city} ${eventObject.state}, ${eventObject.zip}</div>
            <div class="eventButtons">
                <button class="showWeatherBtn">Show Weather</button>
                <button class="deleteEventBtn">Delete Event</button>
            </div>
        <div>
    </section>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addEventBtn") {
        eventForm()
    }
})