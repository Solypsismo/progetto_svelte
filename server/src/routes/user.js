const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const Post = require('../model/Post');

const { authenticateToken, upload } = require('../utility/functions');
const api_user = express.Router();

const dotevn = require('dotenv');

dotevn.config();
const KEY = process.env.KEY;

api_user.post('/api/auth-with-password', async (req, res) => {
    console.log("Richiesta login")
    const { username, password } = req.body;
    const utente = await User.findOne({ username, password });

    if (utente) {
        const token = jwt.sign({ ...utente }, KEY);

        res.status(200).json({
            success: true,
            token
        });

    } else {
        res.json({ success: false, message: "User not found" });
    }
})

api_user.post("/api/cerca-utenti", async (req, res) => {
    try {
        const prefix = req.body.username;
        const regex = new RegExp(`^${prefix}`, 'i');
        const users = await User.find({ username: regex }).limit(10).select("-_id username nome avatar_path");

        if (users.length === 0) {
            res.json({ success: false });
            return;
        }

        res.json({ success: true, utenti: users });
    } catch (error) {
        res.json({ success: false });
    }
})

api_user.post('/api/cerca-avatar', authenticateToken, async (req, res) => {
    try {
        const { usernames } = req.body; 
        const result = [];

        for (const username of usernames) {
            const user = await User.findOne({ username });
            if (user && user.avatar_path) {
                result.push({ username: user.username, avatar_path: user.avatar_path, nome : user.nome });
            }
        }

        res.status(200).json(result);
    } catch (error) {
        console.error('Errore nella ricerca degli avatar:', error);
        res.status(500).json({ message: 'Errore nella ricerca degli avatar' });
    }
});

api_user.get("/api/get/:username", async (req, res) => {
    const username = req.params.username;

    const utente = await User.findOne({ username }).select("username biografia nome avatar_path num_amici");

    if (utente) {
        const posts = await Post.find({ user_id: utente._id }).select("path descrizione num_like data_pubblicazione");

        res.json({
            success: true,
            username: utente.username,
            nome: utente.nome,
            avatar_path: utente.avatar_path,
            num_amici: utente.num_amici,
            biografia: utente.biografia,
            posts
        });
    } else {
        res.json({ success: false })
    }


})

api_user.post("/api/update-avatar", authenticateToken, upload.single('image'), async (req, res) => {
    const utente = await User.findById(req.user._id);

    if (utente) {
        try {
            const imagePath = req.file.path;
            utente.avatar_path = imagePath;
            await utente.save();

            const token = jwt.sign({ ...utente }, KEY);
            res.json({ success: true, token })
        } catch (error) {
            console.log("errore : ", error.message);
            res.json({ success: false });
        }
    } else {
        res.json({ success: false })
    }
})

api_user.post('/api/create', async (req, res) => {
    const body = { ...req.body };
    const utente = new User(body);

    try {
        await utente.save();
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
})

module.exports = api_user;