let tasks = []
const eventHub = document.querySelector(".container")


const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(taskStateChangedEvent)
}


export const getTasks = () => {
   return fetch("http://localhost:8088/tasks")
        .then(response => response.json())
        .then(
            parsedTasks => {
                tasks = parsedTasks
            }
        )
}

export const useTasks = () => tasks.slice()


export const saveTask = task => {
    let stringifiedObj = JSON.stringify(task)
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}


export const deleteTask = taskId => {
    return fetch( `http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}
