import { TaskHTMLConverter } from "./TaskHTMLConverter.js"
import { getTasks, useTasks } from "./TaskProvider.js"


let appStateTasks = []

const contentTarget = document.querySelector(".taskList")
const eventHub = document.querySelector(".container")


export const TaskList = () => {
    getTasks()
        .then(() => {
            appStateTasks = useTasks()
            render(appStateTasks)
        })
}

const render = (taskArray) => {
    const allTasksConvertedToStrings = taskArray.map(
        (task) => {
           return TaskHTMLConverter(task)
        }).join("")
    contentTarget.innerHTML = allTasksConvertedToStrings
}


eventHub.addEventListener("taskStateChanged", () => {
    TaskList()
})
