export const NewsHTMLConverter = (newsObject) => {
    return `
        <section class="news">
            <div class="news__title">Suspect: ${ newsObject.title}</div>
            <div class="news__text">${ newsObject.synopsis }</div>
            <div class="news__author">Author: ${ newsObject.url }</div>
            <div class="news__timestamp">Timestamp: ${ new Date(newsObject.timestamp).toLocaleDateString('en-US')  }</div>
            <button id="deleteNews--${newsObject.userId}">Delete</button>
        </section>
    `
}