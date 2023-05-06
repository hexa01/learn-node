fetch("http://localhost:3000/")
    .then(function(res) {
        return res.text()
    }).then(function(jres) {

        const jsonData = JSON.parse(jres);

        for (var i = 0; i < jsonData.length; i++) {
            var post = jsonData[i]
            var formattedDate = moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')
            insertOnePost(post.createdBy, post.content, formattedDate)
        }

    })
    .catch(function(error) {
        console.log("Error fetching:" + error)
    })

function insertOnePost(authorName, postContent, date) {
    var toInsert = `<div class="post">
        <div>
            <div class="author">${authorName}</div>
            <div>${date}</div>
        </div>
        <div class="content">${postContent}</div>
    </div>`;

    const container = document.getElementById("posts-container")
    container.insertAdjacentHTML("afterbegin", toInsert)
}

insertOnePost("Sushan Poudel", "hello this is my content from js", "29 May, 2023");