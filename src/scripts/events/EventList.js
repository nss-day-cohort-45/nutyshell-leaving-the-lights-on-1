import { EventHTMLConverter } from './EventHTMLConverter.js'
import { useEvents, getEvents, deleteEventCard } from './EventsProvider.js'

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


const renderEvents = (eventsArray) => {
    const allEventsConvertedToStrings = eventsArray.map(
        (event) => {
            return EventHTMLConverter(event)
        }).join("")
    eventTarget.innerHTML = allEventsConvertedToStrings
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEventBtn--")) {
        const [prefix, eventId] = clickEvent.target.id.split("--")
        deleteEventCard(eventId)
        .then (
            ()=> {
                const updatedEvents = useEvents()
                // EventList(updatedEvents)
            }
        )
    }
})

// let events = useEvents()
//         for (const event of events) {
//             eventCards.push(EventHTMLConverter(event))
//         }
//         eventTarget.innerHTML += eventCards.join("")