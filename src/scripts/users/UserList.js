// S.gilmore get  all users and friends map over them
import { useFriends, getFriends } from "../Friends/FriendsProvider";
import { getUsers, useUsers } from "./UserProvider";


getUsers()



let users = []
let friendsList = []
let facilities= []

// Render ALL users initally this runs the render for both events. dont need to have seperate renders
export const usersList = () => {
  getUsers()
      .then(getFriends)
      .then( 
        () => {
          users = useUsers()
          friendsList = useFriends()
          render(users) 
          
      })
    }

