const addBtnLocation = document.querySelector('.addEventBtnDiv')

export const renderAddEventBtn = () => {
    addBtnLocation.innerHTML = `
        <button id="addEventBtn" class="addEventBtn">Add Event</button>
    `
}
