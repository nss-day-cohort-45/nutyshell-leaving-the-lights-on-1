export const EventHTMLConverter = (eventObject) => {
    return `
    <div>
        <div><h2>Event: ${eventObject.name}</h2></div>
        <div>Date: ${eventObject.date}</div>
        <div>Location: ${eventObject.location}</div>
    <div>
    `
}