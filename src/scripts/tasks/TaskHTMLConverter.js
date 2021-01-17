const eventHub = document.querySelector(".container")
import { deleteTask } from "./TaskProvider.js"

export const TaskHTMLConverter = (taskObject) => {
    return `
        <section class="task">
            <div class="task--name"><h2 class="taskName">${taskObject.name}</h2></div>
            <div class="task--completionDate">Complete Task By: ${taskObject.completionDate}</div>
            <input class="checkbox" type="checkbox" id="taskComplete--${taskObject.id}" name="taskComplete--${taskObject.id}" value="${taskObject.completion}">
                <label for="taskComplete--${taskObject.id}">Task Complete</label><br>
            <button id="taskDelete--${taskObject.id}">Delete Task</button>
        </section>
    `
}

//TODO:  listen event for checkbox
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("taskDelete--")) {
        const [prefix, taskId] = clickEvent.target.id.split("--")
        const taskInt = parseInt(taskId)
        deleteTask(taskInt)
    }
})
