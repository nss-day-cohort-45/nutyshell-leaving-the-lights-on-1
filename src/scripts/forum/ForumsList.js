// S.Gilmore allow visibility and listing of forums

import { getForums, useForums } from "./ForumsProvider.js";
import { ForumHTMLConverter } from "../users/ForumHTMLConverter.js";
import { getUsers, useUsers } from "../users/UserProvider.js";
import {deleteForums} from "./ForumsProvider.js"


getForums()
useForums()

let users = []

let visible = false
const contentTarget = document.querySelector(".forumsList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("saveForumClicked", () => {
    if (visible === false) {
    forumList()
    visible = true
    
}
else {
    contentTarget.innerHTML= ""
    visible = false
}

})
eventHub.addEventListener("forumsStateChanged", () => {
    if (visible === true) {
    forumList()
    }
})


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteForum--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        const numberId = parseInt(id)

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useForums() and render the note list again.
        */
    deleteForums(numberId)
    .then(
        () => {
            const updatedForum = useForums()
            
            render(updatedForum)
        }
        
    )
    }
})
const render = (forumsArray, users) => {

        // Find the related forums
        
        const allForumsConvertedToStrings = forumsArray.map( (forum) => {
            const relatedUsers = users.find(
                (user) => {
            return user.id === forum.userId
            }
            )
            forum.username = relatedUsers.username

        
        return  ForumHTMLConverter (forum)
        } ).join("")
    
        // convert the forums objects to HTML with NoteHTMLConverter

    contentTarget.innerHTML = allForumsConvertedToStrings
        }

export const forumList = () => {

    getForums()
    getUsers()
        .then(() => {
             users = useUsers()
            const allForums = useForums()
            render(allForums,users)
        })
}