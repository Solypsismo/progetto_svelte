const mongoose = require('mongoose');

// Controlla lo stato della connessione al database
const dbConnection = mongoose.connection;

// Evento "open" viene emesso quando la connessione al database è aperta
dbConnection.on('open', () => {
    console.log('Connessione al database aperta');
});

// Evento "error" viene emesso se c'è un errore nella connessione al database
dbConnection.on('error', (error) => {
    console.error('Errore nella connessione al database:', error);
});

// Evento "disconnected" viene emesso quando la connessione al database viene persa
dbConnection.on('disconnected', () => {
    console.log('Connessione al database persa');
});

// Verifica lo stato corrente della connessione
// const isDbConnected = mongoose.connection.readyState === 1;

// if (isDbConnected) {
//     console.log('La connessione al database è attiva.');
// } else {
//     console.log('La connessione al database non è attiva.');
// }

module.exports = dbConnection;