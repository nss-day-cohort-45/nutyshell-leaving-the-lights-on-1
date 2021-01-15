import { useFriends, getFriends } from "../Friends/FriendsProvider";
import { getUsers, useUsers } from "./UserProvider";


getUsers()

//  could we use the event.detail.userId (that comes from active user)
// to map over matching user to give us the logged in user?

// get all of the users from userProvider
// Do we need a user form?
// 

let users = []
let friendsList = []
let facilities= []

// Render ALL criminals initally this runs the render for both events. dont need to have seperate renders
export const usersList = () => {
  getUsers()
      .then(getFriends)
    //   .then(getFacilities)
      .then( 
        () => {
          users = useUsers()
          friendsList = useFriends()
        //   crimFac = useCriminalFacilities()
          render(users) 
          
      })
    }

// eventHub.addEventListener('loggedInUser', event => {
//     if(event.detail.loggedInUser !== "0") {
//       const allusers = useUsers()
//       const usersFilter = allusers.find (  (users) => users.id ===parseInt(event.detail.loggedInUser) )
//       const friends = useFriends ()
//       const filterFriends = friends.filter(
//         friendsObject => {
//           if (friendsObject.friendsID  === usersFilter.id) {
            
         
//             return friendsObject
            
          
//           }
//         }
//       )
//       render(filterFriends)
      
//     }
//   }
//   )