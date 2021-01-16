// S.Gilmore calling and using app state json data. Listening for state
// stretch goals:change and delete events.

const eventHub = document.querySelector(".container")

let forums = []

export const useForums = () => {
    return forums.slice()
}

const dispatchStateChangeEvent = () => {
    const forumsStateChangedEvent = new CustomEvent("forumsStateChanged")

    eventHub.dispatchEvent(forumsStateChangedEvent)
}



export const getForums = () => {
    return fetch('http://localhost:8088/forums')
        .then(response => response.json())
        .then(parsedForums => {
            forums = parsedForums
        })

}

export const saveForums = forums => {
    return fetch('http://localhost:8088/forums', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(forums)
    })
    .then(getForums)
    .then(dispatchStateChangeEvent)
}

export const deleteForums = forumsId => {
    return fetch(`http://localhost:8088/forums/${forumsId}`, {
        method: "DELETE"
    })
        .then(getForums)
        .then(dispatchStateChangeEvent)
}