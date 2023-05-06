fetch("http://localhost:3000/")
    .then(function(res) {
        return res.text()
    }).then(function(jres) {

        const jsonData = JSON.parse(jres);

        for (var i = 0; i < jsonData.length; i++) {
            var post = jsonData[i]
            var formattedDate = moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')
            insertOnePost(post.createdBy, post.content, formattedDate, post._id)
        }

    })
    .catch(function(error) {
        console.log("Error fetching:" + error)
    })

function insertOnePost(authorName, postContent, date, postId) {
    var toInsert = `<div class="post">
        <div>
            <div class="author">${authorName}</div>
            <div>${date}</div>
        </div>
        <div class="content">${postContent}</div>
        <hr>
        <button style = 'color: red' onclick = "deletePost('${postId}')">Delete</button> 
    </div>`;

    const container = document.getElementById("posts-container")
    container.insertAdjacentHTML("afterbegin", toInsert)
}

function deletePost(postId) {
    console.log("Deleting " + postId)
    fetch("http://localhost:3000/" + postId, {
            method: "DELETE",
        })
        .then(function(res) {
            return res.text();
        })
        .then(function(v) {
            console.log(v);
            window.location.reload();
        })
        .catch(function(e) {
            console.log("error" + e);
        })
}