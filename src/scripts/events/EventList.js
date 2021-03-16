import { EventHTMLConverter } from './EventHTMLConverter.js'
import { useEvents, getEvents, deleteEventCard } from './EventsProvider.js'

/*
EventList determines where on the DOM the events will be displayed
(eventTarget). It uses getEvents from the Provider to fetch the
event data, then assigns it to eventCards and renders to the DOM using
the HTML converter in renderEvents. 
*/

const eventTarget = document.querySelector(".eventsList")
const eventHub = document.querySelector(".container")

let eventCards = []

export const EventList = (events) => {
    getEvents()
    .then( () => {
        eventCards = useEvents()
        renderEvents(eventCards)
    })
}


export const renderEvents = (eventsArray) => {
    const allEventsConvertedToStrings = eventsArray.map(
        (event) => {
            return EventHTMLConverter(event)
        }).join("")
    eventTarget.innerHTML = allEventsConvertedToStrings
}

/*
This eventListener is listening for the Delete button in the 
Event card to be clicked. If clicked, it deletes the event and
removes it from the DOM.
*/
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEventBtn--")) {
        const [prefix, eventId] = clickEvent.target.id.split("--")
        deleteEventCard(eventId)
        .then (
            ()=> {
                const updatedEvents = useEvents()
                renderEvents(updatedEvents)
            }
        )
    }
})
