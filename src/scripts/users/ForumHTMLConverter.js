// S.Gilmore. File to convert json data into html

import { saveFriend, useFriends } from "../Friends/FriendsProvider.js"



const eventHub = document.querySelector (".container")


export const ForumHTMLConverter = (forumsObject) => {
    return `
        <section class="user">
            <div class="user__text">Chat:${ forumsObject.text }</div>
            <div class="user__author">Username: ${ forumsObject.username }</div>
            <div class="user__timestamp">Timestamp: ${ new Date(forumsObject.timeStamp).toLocaleDateString('en-US')  }</div>
            <div>
                <button id="deleteForum--${forumsObject.id}">Delete</button>
                <button id="addFriend--${forumsObject.userId}">Add User to Friends List</button>
            </div>
        </section>
            `
            
            
            
        }


// Friend: userId, friendId. userId(sessionStorage).getItem 
// Friend Id is related to the forumsObject 
        // Add event listner that uses current user id and user id of the poster
    eventHub.addEventListener("click", clickEvent => {
    
            if (clickEvent.target.id.startsWith("addFriend--")) {
                const [prefix, id] = clickEvent.target.id.split("--")
                const friendId = parseInt(id)
        
                /*
                    Invoke the function that performs the add Friend operation.
        
                    Once the operation is complete you should THEN invoke
                    saving a friends to friends list 
                */
            saveFriend(friendId)
            .then(
                () => {
                    const updatedFriends = useFriends()
                    
                    render(updatedFriends)
                }
                
            )
            }
    const render = (forumsObject) => {

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
        

  
        // 
//   "users": [
//     {
//       "id": 1,
//       "email": "varchar",
//       "username": "varchar",
//       "zip": 12157
// //     },
// "forums": [
//     {
//       "timeStamp": 1610640906213,
//       "text": "is it working?",
//       "id": 2,
//       "userId": 1
//     },

// TODO: So now I have a button I want a click event attached to that button that will add the targeted forumsObject to my friends List
// As a user, I should be able to activate my account and chat with other users. All messages are public, which means that all users can see them.

// Acceptance Criteria
// Given a user wants to enter in a chat message
// When the user activates their account
// And enters a message into the New message text input
// Then their message should appear in the Chat area, prepended with the user's name

// Given a user is viewing, or entering in chat messages
// When a new message is entered by any user, and there are more messages than can fit in the default size of the chat history
// Then the most recent message should always be made visible at the bottom of the chat history

// Given a user wants to delete a previous message of theirs
// When the user performs a gesture on the delete affordance in the chat message
// Then that specific message should be removed from the database and the UI