const express = require('express');
const Like = require('../model/Like');
const Post = require('../model/Post');
const { authenticateToken } = require('../utility/functions');
const apiLike = express.Router();

apiLike.post("/api", authenticateToken, async (req, res) => {
    const { id_post } = req.body;
    const id_utente = req.user._id;

    const isliked = await Like.findOneAndDelete({ id_post, id_utente });

    if (isliked) {
        console.log(isliked);
        res.json({ success: true, message: "like rimosso" });
    } else {
        try {
            const like = new Like({ id_utente, id_post });
            await like.save();
            const post = await Post.findById(id_post);

            if (post) {
                post.num_like = post.num_like + 1;
                await post.save();
                res.status(200).json({ success: true, message: "like messo" });
            } else {
                res.status(500).json({ success: false, message: "non sono riuscito ad aggiornare i like" });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "non sono riuscito a salvare il like" });
        }
    }
})

apiLike.get("/api/is-liked/:idpost", authenticateToken, async (req, res) => {
    const id_post = req.params.idpost;
    const id_utente = req.user._id;

    const isliked = await Like.findOne({ id_post, id_utente });

    if (isliked) {
        res.json({ liked: true });
    } else {
        res.json({ liked: false });
    }
})

module.exports = apiLike;