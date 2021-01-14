const eventFormLocation = document.querySelector('.eventDiv')

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
            <input type="text" placeholder="Address">
        </fieldset>
        `
}

export const eventForm = () => {
    renderEventsForm()
}