const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    path: String,
    descrizione: String,
    data_pubblicazione: {
        type: Date,
        default: new Date()
    },
    num_like: {
        type: Number,
        default: 0
    },
    user_id: String,
    username: String,
    liked: Boolean
})

const Post = mongoose.model("Posts", PostSchema);

module.exports = Post;