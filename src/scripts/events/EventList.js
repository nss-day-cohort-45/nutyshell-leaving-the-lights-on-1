import { EventHTMLConverter } from './EventHTMLConverter.js'
import { useEvents, getEvents } from './EventsProvider.js'

const eventTarget = document.querySelector(".eventsList")
const eventHub = document.querySelector(".container")

let eventCards = []

export const EventList = () => {
    getEvents()
    .then( () => {
        let events = useEvents()
        for (const event of events) {
            eventCards.push(EventHTMLConverter(event))
        }
        eventTarget.innerHTML += eventCards.join("")
    })

}