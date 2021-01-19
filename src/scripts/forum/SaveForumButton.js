// S.Gilmore save forum button

const contentTarget = document.querySelector("#forumDiv")
const eventHub = document.querySelector(".container")



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveForum") {
        const customEvent = new CustomEvent("saveForumClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const saveForumButton = () => {
    contentTarget.innerHTML =  "<button id='saveForum'>Show Chat</button>"
}