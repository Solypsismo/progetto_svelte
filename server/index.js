const mongoose = require('mongoose');
require('./statiDB');

const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const dotenv = require('dotenv');
const api_user = require('./src/routes/user');
const api_post = require('./src/routes/post');
const cors = require('cors');
const api_friendship = require('./src/routes/friendship');
const apiLike = require('./src/routes/like');
const jwt = require("jsonwebtoken");

dotenv.config();
const PORT = process.env.PORT || 3000;
const DATABASE_URI = process.env.DATABASE_URI;

const app = express();

app.use(cors({
    origin: "*"
}));
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

function authenticateToken(token) {
    const secretKey = process.env.KEY;
    let utente;

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return false;
        utente = user._doc;
    });

    return utente;
}

io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (token) {
        const utente = authenticateToken(token);
        socket.utente = utente;
        next();
    } else {
        next(new Error("token non valido"));
    }
})

io.on('connection', (socket) => {
    console.log('a user connected : ', socket.utente);

    socket.join(socket.utente.username);
    
    socket.on("message", (message, to) => {
        console.log("messaggio ricevuto : ", message);
        io.to(to).emit("message", message);
    })

});

app.use(express.json())
app.use('/utente', api_user);
app.use('/post', api_post);
app.use("/friendship", api_friendship);
app.use("/like", apiLike);

app.get('/', async (req, res) => {
    res.json({ status: "active" });
});


server.listen(PORT, () => {
    mongoose.connect(DATABASE_URI);
    console.log(`Server in ascolto http://localhost:${PORT}`);
});
