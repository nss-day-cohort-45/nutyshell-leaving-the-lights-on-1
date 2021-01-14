// S.Gilmore. File to convert json data into html

export const ForumHTMLConverter = (forumsObject) => {
    return `
        <section class="user">
            <div class="user__text">Note:${ forumsObject.text }</div>
            <div class="user__author">Author: ${ forumsObject.username }</div>
            <div class="user__timestamp">Timestamp: ${ new Date(userObject.timeStamp).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${forumsObject.id}">Delete</button>
        </section>
    `

    
    
}

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