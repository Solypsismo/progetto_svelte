const jwt = require('jsonwebtoken');
const path = require('path');
const dotevn = require('dotenv');

dotevn.config();
const secretKey = process.env.KEY;

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.json({success: false, message: "Not Authorized."});

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user._doc;

        next();
    });
}

const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'uploads/', // Directory di destinazione per i file caricati
  filename: (req, file, cb) => {
    // Ottieni il nome originale del file e aggiungi un timestamp per renderlo univoco
    const fileName = file.originalname;
    // Estrai l'estensione del file
    const extension = path.extname(fileName);

    // Passa il percorso completo del file come nome del file
    const uniqueFileName = fileName.split(extension)[0] + "_" + Date.now() + extension;
    cb(null, uniqueFileName);
  }
});


const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limita la dimensione del file a 1MB
  fileFilter: (req, file, cb) => {
    // Verifica che il file abbia un'estensione valida
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype)) {
      cb(null, true); // Accetta il file
    } else {
      cb(new Error('Solo file JPG o PNG sono consentiti.')); // Rifiuta il file
    }
  }
});


module.exports = {authenticateToken, upload};