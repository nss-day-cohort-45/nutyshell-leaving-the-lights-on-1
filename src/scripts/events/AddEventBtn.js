/* This button will allow users to populate the 
Form to add a new event to their Event List */

const addBtnLocation = document.querySelector('.addEventBtnDiv')

export const renderAddEventBtn = () => {
    addBtnLocation.innerHTML = `
        <button id="addEventBtn" class="addEventBtn">Add Event</button>
    `
}
