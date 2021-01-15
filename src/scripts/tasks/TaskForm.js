import { saveTask, getTasks, useTasks } from "./TaskProvider.js"

const contentTarget = document.querySelector(".taskForm")
const eventHub = document.querySelector(".container")


const render = () => {
    contentTarget.innerHTML = 
    `
    <section class="taskForm"> 
        <input type="text" id="taskName" placeholder="Record a Task">
        <input type="text" id="taskCompletionDate" placeholder="dd/mm/yyyy">
        
        <button id="saveTask">Save Task</button>
    </section>
    
    `
}

// <input type="checkbox" id="taskComplete">


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        const name = document.querySelector("#taskName").value
        const completionDate = document.querySelector("#taskCompletionDate").value
        const completion = document.querySelector("#taskComplete")
        const userId = sessionStorage.getItem("activeUser")
        const taskEntry = {
            name: name,
            completionDate: completionDate,
            completion: completion,
            userId: parseInt(userId)
        }
        saveTask(taskEntry)
    }
})


//is this part necessary??
let recordedTasks = []

export const TaskForm = () => {
    getTasks()
    .then( () => {
        recordedTasks = useTasks()
        render()
    })
}


// Goal: make completion value be true or false (boolean)
// if/then--
// if checkbox is checked (and task is removed from user visibility on DOM), then completion is true
// if checkbox is not checked (and task is not removed), then completion is false