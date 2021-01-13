const addBtnLocation = document.querySelector('.forumAndEventDiv')

export const renderAddEventBtn = () => {
    addBtnLocation.innerHTML = `
        <button id="addEventBtn" class="addEventBtn">Add Event</button>
    `
}