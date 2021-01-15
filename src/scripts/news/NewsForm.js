import { saveNews } from "./NewsProvider.js"

const contentTarget = document.querySelector(".newsy")
const eventHub = document.querySelector(".container")

export const newsForms = () => {
    contentTarget.innerHTML = `
    <input type ="text" id="title" placeholder ="Article Title">
    <textarea id ="synopsis" placeholder ="Synopsis"></textarea>
    <input type ="text" id="url" placeholder ="URL">

    <button id="saveNews">Save News Article</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNews") {
        const title = document.querySelector("#title").value
        const synopsis = document.querySelector("#synopsis").value
        const url = document.querySelector("#url").value
        const userId = sessionStorage.getItem('activeUser')
        const newNewsEntry = {
            title: title,
            synopsis: synopsis,
            url: url,
            userId: parseInt(userId),
            timestamp: Date.now()
        }
        saveNews(newNewsEntry)
    }
})