// S. Gilmore HTMl representation of a friend object
// stretch goal: make delete friends button usable

export const FriendsHTMLConverter = (friendObject) => {
    return `
        <section class="friends">
            <div class="friends__username">Article Title: ${friendObject.username}</div>
            <button id="deleteFriend--${friendObject.id}">Unfriend</button>
        </section>
    `
}