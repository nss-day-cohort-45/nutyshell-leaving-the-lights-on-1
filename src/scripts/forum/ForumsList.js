import { getForums, useForums } from "./ForumsProvider.js";
import { ForumHTMLConverter } from "../users/ForumHTMLConverter.js";
import { getUsers, useUsers } from "../users/UserProvider.js";
import { useFriends } from "../Friends/FriendsProvider.js";
import {deleteForums} from "./ForumsProvider.js"


getForums()
useForums()

let users = []

let visible = false
// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".forumDiv")
// Define ye olde Evente Hubbe
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

//         return `
//             <section class="note">
//                 <h2>Note about ${relatedCriminal.name}</h2>
//                 ${note.noteText}
//             </section>
//         `
//     })
// }

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const forumList = () => {

    getForums()
    getUsers()
        .then(() => {
             users = useUsers()
            const allForums = useForums()
            render(allForums,users)
        })
}