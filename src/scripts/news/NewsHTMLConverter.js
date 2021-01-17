import { deleteNews } from "./NewsProvider.js"


export const NewsHTMLConverter = (newsObject) => {
    return `
        <section class="news">
            <div class="news__title"><h2 class="newsName">${newsObject.title}</h2></div>
            <div class="news__text">Synopsis: ${newsObject.synopsis}</div>
            <div class="news__author">URL: ${newsObject.url}</div>
            <div class="news__timestamp">Timestamp: ${new Date(newsObject.timestamp).toLocaleDateString('en-US')}</div>
            <button id="deleteNews--${newsObject.id}">Delete</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNews--")) {
        const [prefix, newsId] = clickEvent.target.id.split("--")
        const newsInt = parseInt(newsId)
        deleteNews(newsInt)
    }
})