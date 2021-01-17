import { eventForm } from './EventForm.js'

const eventHub = document.querySelector(".container")

/* The EventHTMLConverter populates the initial
page load (after log in or register) to display
the events that the user already has saved. */
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
                <button id="deleteEventBtn--${eventObject.id}">Delete Event</button>
            </div>
        <div>
    </section>
    `
}

/* This event listener will populate the form
that allows user to enter a new event to populate
when they click the Add Event button */
eventHub.addEventListener("click", clickEvent => {
    const targetEventList = document.querySelector(".eventsList")
    if (clickEvent.target.id === "addEventBtn") {
        eventForm()
        targetEventList.innerHTML = ""
    }
})


