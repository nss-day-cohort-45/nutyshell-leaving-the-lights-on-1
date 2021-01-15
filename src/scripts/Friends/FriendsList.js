import { getUsers, useUsers } from "../users/UserProvider.js"
import { useFriends, getFriends } from "./FriendsProvider.js"
import { FriendsHTMLConverter } from "./FriendsHTMLConverter.js" ;

// S.Gilmore Using this form to render all friends and to allow the add friends button in forums form to work



const eventHub = document.querySelector(".container")
const friendsList = document.querySelector(".friendsDiv")


// eventHub.addEventListener("newsStateChanged", () => {
//     NewsList()
// })

export const FriendsList = () => {
    getFriends()
    .then(getUsers)
        .then(() => {
            const userId = parseInt(sessionStorage.getItem("activeUser"))

            let friendsHTML = ""
            let arrayOfFriends = useFriends()
            let useAllUsers = useUsers()
            let matchingFriends = arrayOfFriends.filter((friendObject) => userId === friendObject.userId) 
            for (const friendObject of matchingFriends) {
                let userObject = useAllUsers.find(
                    (user) => {
                        return friendObject.friendId === user.id
                    
                        
                    }
                )


                friendsHTML += FriendsHTMLConverter(userObject)
            }
            friendsList.innerHTML = friendsHTML
        })

}


