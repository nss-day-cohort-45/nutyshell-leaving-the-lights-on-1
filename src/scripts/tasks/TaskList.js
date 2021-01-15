import { TaskHTMLConverter } from "./TaskHTMLConverter.js"
import { getTasks, useTasks } from "./TaskProvider.js"


let appStateTasks = []
//TODO: change dashboard to taskdiv
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
//state change for delete button?

//TASKS
//put HTML on DOM:
//go get my data (done)
//put data in converter (done)
//put data on DOM (done)