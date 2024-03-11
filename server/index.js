const mongoose = require('mongoose');
require('./statiDB');

const express = require('express');
const dotenv = require('dotenv');
const api_user = require('./src/routes/user');
const api_post = require('./src/routes/post');
const cors = require('cors');
const api_friendship = require('./src/routes/friendship');

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json())
app.use('/utente', api_user);
app.use('/post', api_post);
app.use("/friendship", api_friendship);

app.get('/', async (req, res) => {
    res.json({status: "active"});
});


app.listen(PORT, () => {
    mongoose.connect('mongodb://localhost:27017/test');
    console.log(`Server in ascolto http://localhost:${PORT}`);
});
