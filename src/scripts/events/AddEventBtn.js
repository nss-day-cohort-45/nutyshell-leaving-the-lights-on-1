const addBtnLocation = document.querySelector('.addEventBtnDiv')
const eventHub = document.querySelector(".container")

const renderAddEventBtn = () => {
    addBtnLocation.innerHTML = `
        <button id="addEventBtn" class="addEventBtn">Add Event</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "login__button") {
        renderAddEventBtn()
    }
})