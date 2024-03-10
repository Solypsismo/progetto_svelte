const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    cognome: String,
    email: String,
    username: String,
    password: String,
    biografia: {
        type: String,
        default: ""
    },
    num_amici: {
        type: Number,
        default: 0
    },
    num_post: {
        type: Number,
        default: 0
    },
    avatar_path: {
        type: String,
        default: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    }
})

const User = mongoose.model('Users', UserSchema);

module.exports = User;