const Post = require("./db/posts")

function createNewPost(postContent, postCreator) {
    return Post.create({
        content: postContent,
        createdAt: Date.now(),
        createdBy: postCreator,
    }).then(function(post) {
        console.log("Post Created")
        return post;
    }).catch(function(error) {
        console.log("Error creating post: " + error)
    })
}

module.exports = createNewPost