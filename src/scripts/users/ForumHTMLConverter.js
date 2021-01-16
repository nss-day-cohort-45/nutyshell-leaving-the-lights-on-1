// S.Gilmore. File to convert json data of posted forms into html
// Stretch goal- activate delete forum button

import { saveFriend, useFriends } from "../Friends/FriendsProvider.js"



const eventHub = document.querySelector(".container")


export const ForumHTMLConverter = (forumsObject) => {
    return `
        <section class="user">
            <div class="user__text">Chat:${forumsObject.text}</div>
            <div class="user__author">Username: ${forumsObject.username}</div>
            <div class="user__timestamp">Timestamp: ${new Date(forumsObject.timeStamp).toLocaleDateString('en-US')}</div>
            <div>
                <button id="deleteForum--${forumsObject.id}">Delete</button>
                <button id="addFriend--${forumsObject.userId}">Add User to Friends List</button>
            </div>
        </section>
            `


    // Friend Id is related to the forumsObject 
    // Add event listner that uses current user id and user id of the poster
    eventHub.addEventListener("click", clickEvent => {

        if (clickEvent.target.id.startsWith("addFriend--")) {
            const [prefix, id] = clickEvent.target.id.split("--")
            const friendId = parseInt(id)



            const userId = sessionStorage.getItem("activeUser")
            // const friendID = document.querySelector("#friend").value 
            // Make a new object representation of a note
            const newFriend = {
                // Key/value pairs here

                friendId,
                userId: parseInt(userId)
            }
            /*
                Invoke the function that performs the add Friend operation.
     
                Once the operation is complete you should THEN invoke
                saving a friends to friends list 
            */
            saveFriend(newFriend)

        }
    })}

