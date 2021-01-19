// S.Gilmore  adding to  forums and allowing  access to information to be displayed in the dom

import { getUsers, useUsers } from "../users/UserProvider.js";
import { getForums, saveForums, useForums } from "./ForumsProvider.js"; 



const eventHub = document.querySelector(".container")
const contentTarget= document.querySelector(".forumForm")

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveForums") {

        const text = document.querySelector("#text").value
        const userId = sessionStorage.getItem("activeUser")
       
        // Make a new object representation of a forum
        const newForums = {
            // Key/value pairs here
            timeStamp: Date.now(),
            text,
            userId: parseInt(userId)
           
        }

        // Change API state and application state
        saveForums(newForums)
    }
})

// need to filter to get user name and friend name
const render = () => {
    const usersCollection = useUsers()
    // This is showing on the page
    
    contentTarget.innerHTML = `
    <section class="forumText">
        <textarea id="text" placeholder="Write Your Note Here"></textarea>
        <button id="saveForums">Save Note</button>
    </section>
    `
}
export const ForumForm = () => {
    getForums()
    .then(() => {
        const allFormsList = useForums()
        render(allFormsList)
    })
}
