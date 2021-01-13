const eventHub = document.querySelector(".container")
let news = []

const dispatchStateChangeEvent = () => {
    const newsStateChangedEvent = new CustomEvent("newsStateChanged")

    eventHub.dispatchEvent(newsStateChangedEvent)
}

export const useNews = () => news.slice()

export const getNews = () => {
    return fetch("http://localhost:8088/news")
        .then(response => response.json())
        .then(parsedNews => {
            news = parsedNews
        })
}
export const saveNote = newNews => {
    let stringifiedObj = JSON.stringify(newNews)
    return fetch('http://localhost:8088/news', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: stringifiedObj
        })
        .then(getNews)
        .then(dispatchStateChangeEvent)
}

export const deleteNews = newsId => {
    return fetch(`http://localhost:8088/news/${newsId}`, {
            method: "DELETE"
        })
        .then(getNews)
        .then(dispatchStateChangeEvent)
}