let events = []

export const useEvents = () => {
    return events.slice()
}

export const getEvents = () => {
    return fetch("http://localhost:8088/events")
        .then(response => response.json())
        .then(eventsData =>
            events = eventsData)
}

export const saveNewEvent = (newEvent) => {
    fetch ("http://localhost:8088/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    })
        .then(getEvents)
}