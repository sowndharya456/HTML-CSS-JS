function addComment(id) {
    var addEvent = document.getElementById("addEventNames");
    var comment = document.createElement("div");
    comment.setAttribute('class', 'event');
    comment.innerHTML = id.value;
    addEvent.appendChild(comment);
    id.value='';
}