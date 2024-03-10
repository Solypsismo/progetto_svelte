const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
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

api_user.post("/api/update-avatar", authenticateToken, upload.single('image'), async (req, res) => {
    const utente = await User.findById(req.user._id);

    if(utente) {
        try {
            const imagePath = req.file.path;
            utente.avatar_path = imagePath;
            await utente.save();

            const token = jwt.sign({ ...utente }, KEY);
            res.json({success: true, token})
        } catch (error) {
            console.log("errore : ", error.message);
            res.json({success: false});
        }
    } else {
        res.json({success: false})
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