let tasks = []

export const useTasks = () => tasks.slice()

export const getTasks = () => {

   return fetch("https://localhost.8088/tasks")
        .then(response => response.json())
        .then(
            parsedTasks => {
                tasks = parsedTasks
            }
        )
}