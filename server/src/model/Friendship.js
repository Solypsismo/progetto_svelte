const mongoose = require('mongoose');

const FriendshipSchema = new mongoose.Schema({
    first_user : String,
    second_user : String,
    status: String
})

const Friendship = mongoose.model("friendship", FriendshipSchema);

module.exports = Friendship;