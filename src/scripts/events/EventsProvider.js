import { renderEvents } from './EventList.js'

const eventHub = document.querySelector(".container")

let events = []

// useEvents takes a copy of the events array to be used elsewhere

export const useEvents = () => {
    return events.slice()
}

//getEvents fetches the data on events from database.json

export const getEvents = () => {
    return fetch("http://localhost:8088/events")
        .then(response => response.json())
        .then(eventsData =>
            events = eventsData)
}

//saveEvents will take the information entered by the user in the event form and save it to database.json

export const saveNewEvent = (newEvent) => {
    fetch ("http://localhost:8088/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    })
        .then(getEvents)
        .then(dispatchEventStateChangeEvent)
}

//deleteEventCard will delete individual event cards

export const deleteEventCard = eventId => {
    return fetch (`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchEventStateChangeEvent)
}

const dispatchEventStateChangeEvent = () => {
    const eventCardsChangedEvent = new CustomEvent("eventCardStateChanged")
    eventHub.dispatchEvent(eventCardsChangedEvent)
}