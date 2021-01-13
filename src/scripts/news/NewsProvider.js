let news = []

export const useNews = () => news.slice()

export const getnews = () => {
    return fetch("http://localhost:8088/news")
        .then(response => response.json())
        .then(parsedNews => {
            news = parsedNews
        })
}