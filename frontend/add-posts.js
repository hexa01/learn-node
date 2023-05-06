const nameField = document.getElementById("name-field");
const contentField = document.getElementById("content-field")
console.log(nameField, contentField)

function addPost() {
    console.log("called add post")
    var postContent = contentField.value;
    var authorName = nameField.value;
    var toSend = {
        postContent: postContent,
        postCreatedBy: authorName,
    };
    const jsonToString = JSON.stringify(toSend);
    fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonToString,
    });

}