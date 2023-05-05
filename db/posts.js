const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    content: String,
    createdBy: String,
    createdAt: Date
})
const Post = mongoose.model("Post", postSchema)
module.exports = Post