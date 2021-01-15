import { NewsList } from "./news/NewsList.js"
import { newsForms } from "./news/NewsForm.js"
import { getNews } from "./news/NewsProvider.js"
import { EventList } from "./events/EventList.js"
import { renderAddEventBtn } from "./events/AddEventBtn.js"
import { TaskList } from "./tasks/TaskList.js"
import { getTasks } from "./tasks/TaskProvider.js"
import { TaskForm } from "./tasks/TaskForm.js"


const eventHub = document.querySelector(".container")

export const Nutshell = () => {
    // Render all your UI components here
    eventHub.addEventListener("userAuthenticated", event => {
        NewsList()
        getNews()
        newsForms()
        EventList()
        renderAddEventBtn()
        TaskList()
        getTasks()
        TaskForm()
    })
}


