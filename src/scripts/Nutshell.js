import { NewsList } from "./news/NewsList.js"
import { newsForms } from "./news/NewsForm.js"
import { getNews } from "./news/NewsProvider.js"


const eventHub = document.querySelector(".container")
export const Nutshell = () => {
    // Render all your UI components here
    eventHub.addEventListener("userAuthenticated", event => {
        NewsList()
        getNews()
        newsForms()
    })
}