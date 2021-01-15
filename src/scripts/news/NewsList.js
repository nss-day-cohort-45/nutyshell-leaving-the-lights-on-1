import { getNews, useNews, deleteNews } from "./NewsProvider.js";
import { NewsHTMLConverter } from "./NewsHTMLConverter.js";

const newsLog = document.querySelector(".newsies")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("newsStateChanged", () => {
    NewsList()
})

export const NewsList = () => {
    getNews()
        .then(() => {

            let newsHTML = ""
            let useNewNews = useNews()
            for (const news of useNewNews) {
                newsHTML += NewsHTMLConverter(news)
            }
            newsLog.innerHTML = newsHTML
        })

}