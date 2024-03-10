const express = require('express');
const Post = require('../model/Post');
const { authenticateToken, upload } = require('../utility/functions');
const api_post = express.Router();

api_post.post("/api/create", authenticateToken, upload.single('image'), async (req, res) => {
    console.log("richiesta creazione post");
    try {
      // Accedi ai dati inviati dal frontend
      const { descrizione } = req.body;
      const imagePath = req.file.path; // Ottieni il percorso dell'immagine caricata
  
      // Crea una nuova istanza del modello Post
      const newPost = new Post({
        path: imagePath,
        descrizione,
        user_id: req.user._id
      });
  
      // Salva il nuovo post nel database
      await newPost.save();

      // Invia una risposta al frontend
      res.status(201).json({success: true});
    } catch (error) {
      // Se si verifica un errore, gestiscilo e invia una risposta di errore al frontend
      console.error(error);
      res.status(500).json({success: false, error: 'Errore durante il salvataggio del post nel database.' });
    }
  });

api_post.get("/api/getall", authenticateToken, async (req, res) => {
    const post = await Post.find({user_id: req.user._id});

    if(post){
        res.status(200).json({success: true, post});
    }else{
        res.status(404).json({success: false, message: "Nessun post trovato"});
    }
})


api_post.get("/api/get/:id", authenticateToken, async (req, res) => {
    const id = req.params.id;
    
    const post = await Post.findById(id);

    if(post) {
      res.json({success: true, post})
    }else {
      res.status(404).json({success: false, error: "Post not found"});
    }
})

api_post.post("/api/delete/:id", authenticateToken, async (req, res) => {
    const id = req.params.id;

    const eliminato = await Post.deleteOne({ _id: id });

    if(eliminato.deletedCount === 1) {
        res.json({success : true})
    }else {
        res.json({success: false});
    }
})


module.exports = api_post;