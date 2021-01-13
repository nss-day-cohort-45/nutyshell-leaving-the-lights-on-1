import { getNews, useNews, deleteNews } from "./NewsProvider.js";
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNews--")) {
        const [prefix, newsId] = clickEvent.target.id.split("--")
        deleteNews(newsId).then(
            () => {
                const updatedNews = useNews()
                render(updatedNews)
            }
        )
    }
})