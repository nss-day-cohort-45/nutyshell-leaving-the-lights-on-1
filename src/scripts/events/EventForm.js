import { saveNewEvent } from './EventsProvider.js'

const eventFormLocation = document.querySelector('.eventDiv')
const eventHub = document.querySelector('.container')

const renderEventsForm = () => {
    eventFormLocation.innerHTML = `
        <fieldset>
            <label for="eventName" >Event: </label>
            <input type="text" placeholder="Event Name" id="eventName">
        </fieldset>
        <fieldset>
            <label for="eventDate" >Date: </label>
            <input type="date" id="eventDate" name="eventDate">
        </fieldset>
        <fieldset>
            <label for="">Location: </label>
            <input type="text" placeholder="Venue" id="eventVenue">
            <input type="text" placeholder="Address" id="eventAddress">
            <input type="text" placeholder="City" id="eventCity">
            <input type="text" placeholder="State" id="eventState">
            <input type="text" placeholder="Zip Code" id="eventZip">
            
        </fieldset>
        <button id="saveEventBtn" class="saveEventBtn">Save Event</button>
        `
}

export const eventForm = () => {
    renderEventsForm()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEventBtn") {
        const name = document.querySelector("#eventName").value
        const date = document.querySelector("#eventDate").value
        const location = document.querySelector("#eventVenue").value
        const address = document.querySelector("#eventAddress").value
        const city = document.querySelector("#eventCity").value
        const state = document.querySelector("#eventState").value
        const zip = document.querySelector("#eventZip").value
        const userId = sessionStorage.getItem('activeUser')

        const newEventEntry = {
            name: name,
            date: date,
            location: location,
            address: address,
            city: city,
            state: state,
            zip: parseInt(zip),
            userId: parseInt(userId)
        }
        saveNewEvent(newEventEntry)
    }
})
