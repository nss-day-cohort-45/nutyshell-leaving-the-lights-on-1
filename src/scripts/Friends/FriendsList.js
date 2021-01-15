// S.Gilmore Using this form to render all friends and to allow the add friends button in forums form to work


const eventHub = document.querySelector(".container")
const friendsList = document.querySelector(".friendsDiv")


export const friend = () =>{

eventHub.addEventListener("click", event => {
    if(event.target.id ==="addFriend--") {
friendsList.innerHTML= addFriend()
    }
})
}
