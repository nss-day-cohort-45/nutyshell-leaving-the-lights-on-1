import { eventForm } from './EventForm.js'

const eventHub = document.querySelector(".container")

export const EventHTMLConverter = (eventObject) => {
    return `
    <div class="eventList">
        <div><h2>Event: ${eventObject.name}</h2></div>
        <div>Date: ${eventObject.date}</div>
        <div>Location: ${eventObject.location}</div>
        <div>${eventObject.address}</div>
        <div>${eventObject.city} ${eventObject.state}, ${eventObject.zip}</div>
    <div>
    
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addEventBtn") {
        eventForm()
    }
})