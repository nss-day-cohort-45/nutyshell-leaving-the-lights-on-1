// S.Gilmore  Adding html for chat/forum area. Stretch goal- user shouldnt have to enter their name.

import { getUsers, useUsers } from "../users/UserProvider.js";
import { getForums, saveForums } from "./ForumsProvider.js"; 



const eventHub = document.querySelector(".container")
const contentTarget= document.querySelector(".forumDiv")

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveForums") {

        const author =document.querySelector("#author").value
        // const timeStamp= document.querySelector("timeStamp").value
        const text = document.querySelector("#text").value

        // Make a new object representation of a note
        const newForums = {
            // Key/value pairs here
            timeStamp: Date.now(),
            text,
            // userId,
            // friendId
// ****I think i need friendId to be able to match private messages. didnt use it in forumHTML since user doesnt need to see
// but we might want to filter over it so that we can see who is talking to whom?
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
        <input type="text" id="author" placeholder="Whos'the author?">
        <textarea id="text" placeholder="Write Your Note Here"></textarea>

       


        <button id="saveForums">Save Note</button>
    `
}
export const ForumForm = () => {
    getForums()
    .then( () => render())
}

// /*{ <select class="dropdown" id="suspect">
// <option value="0">Please select a suspect...</option>
// ${
//     usersCollection.map(
//     (user) => `
//         <option value=${criminal.id}>
//         ${criminal.name}
//         </option>
//     `)
// }
// // </select> *}