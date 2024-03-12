const express = require('express');
const { authenticateToken } = require('../utility/functions');
const Friendship = require('../model/Friendship');

const api_friendship = express.Router();

api_friendship.post("/api/send-request", authenticateToken, async (req, res) => {
    const { username_reciver } = req.body;
    const username_sender = req.user.username;

    const primary_key = [username_sender, username_reciver].sort();

    const type = username_sender == primary_key[1] ? "secondo_al_primo" : "primo_al_secondo";

    const friendship = new Friendship({
        first_user: primary_key[0],
        second_user: primary_key[1],
        status: type
    })

    try {
        await friendship.save();
        console.log("richiesta salvata");
        res.json({ success: true });
    } catch (error) {
        console.error("Messaggio di errore ricevuto : ", error.message);
        res.json({ success: false });
    }

})

api_friendship.get("/api/get-status/:username", authenticateToken, async (req, res) => {
    const username_reciver = req.params.username;
    const username_sender = req.user.username;

    const primary_key = [username_sender, username_reciver].sort();

    const richiesta = await Friendship.findOne({ first_user: primary_key[0], second_user: primary_key[1] }).select("status");

    if (richiesta) {
        if (richiesta.status == "secondo_al_primo") {
            if (primary_key[1] == username_sender) {
                res.json({ success: true, messaggio: "io ho inviato la richiesta" });
            } else {
                res.json({ success: true, messaggio: "mi e stata inviata la richiesta" });
            }
        } else if (richiesta.status == "primo_al_secondo") {
            if (primary_key[0] == username_sender) {
                res.json({ success: true, messaggio: "io ho inviato la richiesta" });
            } else {
                res.json({ success: true, messaggio: "mi e stata inviata la richiesta" });
            }
        } else if (richiesta.status == "amici") {
            res.json({ success: true, messaggio: "amici" });
        }
    } else {
        res.json({ success: false, messaggio: null });
    }

})

api_friendship.get("/api/get-friends", authenticateToken, async (req, res) => {
    const username = req.user.username;

    try {
        // Cerca i record in base al criterio specificato
        const records = await Friendship.find({
            $or: [{ first_user: username }, { second_user: username }],
            status: "amici"
        });

        // Restituisci i record trovati
        res.json({success: true, amici: records});
    } catch (error) {
        // Gestione degli errori
        console.error(error);
        res.status(500).json({success: false, message: 'Errore nel trovare i record.' });
    }
})

api_friendship.post("/api/accept-request", authenticateToken, async (req, res) => {
    const { username_reciver } = req.body;
    const username_sender = req.user.username;

    const primary_key = [username_sender, username_reciver].sort();

    const richiesta = await Friendship.findOne({ first_user: primary_key[0], second_user: primary_key[1] });

    if(richiesta) {
        richiesta.status = "amici";
        
        try {
            await richiesta.save();
            res.json({success: true})
        } catch (error) {
            res.json({success: false});
        }
    }else {
        res.json({success: false});
    }
})

api_friendship.post("/api/accept-request", authenticateToken, async (req, res) => {
    const { username_reciver } = req.body;
    const username_sender = req.user.username;

    const primary_key = [username_sender, username_reciver].sort();

    const richiesta = await Friendship.findOneAndDelete({ first_user: primary_key[0], second_user: primary_key[1] });

    if(richiesta) {
        res.json({success: true})
        
    }else {
        res.json({success: false});
    }
})

module.exports = api_friendship;