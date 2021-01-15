import {EventList} from './events/EventList.js'
import { renderAddEventBtn } from './events/AddEventBtn.js'
const eventHub = document.querySelector(".container")

export const Nutshell = () => {
    // Render all your UI components here
    eventHub.addEventListener("userAuthenticated", event => {
        EventList()
        renderAddEventBtn()
        }
    )
}