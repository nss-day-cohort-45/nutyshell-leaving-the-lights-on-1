let forums = []

export const useForums = () => forums.slice()

export const getForums = () => {
    return fetch("http://localhost:8088/forums")
        .then(response => response.json())
        .then(parsedForums => {
            forums = parsedForums
        })
}