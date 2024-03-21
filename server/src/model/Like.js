const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    id_utente: String,
    id_post: String
})

const Like = mongoose.model("Likes", LikeSchema);

module.exports = Like;