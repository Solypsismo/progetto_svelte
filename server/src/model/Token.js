const mongoose = require('mongoose');

const TokenModel = new mongoose.Schema({
    token: String,
    user_id: String,
    data_creazione: Date
})

const Token = mongoose.model('Tokens', TokenModel);

module.exports = Token;