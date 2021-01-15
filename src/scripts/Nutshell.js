import { NewsList } from "./news/NewsList.js"
import { newsForms } from "./news/NewsForm.js"
import { getNews } from "./news/NewsProvider.js"
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
        TaskList()
        getTasks()
        TaskForm()
    })
}


