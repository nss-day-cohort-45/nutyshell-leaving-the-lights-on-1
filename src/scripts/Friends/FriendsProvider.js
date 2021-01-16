// S.Gilmore access friends from app state
let friends = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const friendsStateChangedEvent = new CustomEvent("friendsStateChanged")

    eventHub.dispatchEvent(friendsStateChangedEvent)
}


export const useFriends = () => {
    return friends.slice()
}

export const getFriends = () => {
    return fetch("http://localhost:8088/friends")
        .then(response => response.json())
        .then(
            parsedFriends => {
                
                friends = parsedFriends
            }
        )
}
export const saveFriend = friends => {
    return fetch('http://localhost:8088/friends', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friends)
    })
    .then(getFriends)
    .then(dispatchStateChangeEvent)
}