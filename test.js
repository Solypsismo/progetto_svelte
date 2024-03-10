const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX2lkIjoiaW5pdCIsIm5vbWUiOiJpbml0IiwiY29nbm9tZSI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJ1c2VybmFtZSI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJpbml0Ijp7Il9pZCI6dHJ1ZSwibm9tZSI6dHJ1ZSwiY29nbm9tZSI6dHJ1ZSwiZW1haWwiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiX192Ijp0cnVlfX19LCJza2lwSWQiOnRydWV9LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjY1ZThiZmI1MDU4OGQ2NGRhNDMyODNlYiIsIm5vbWUiOiJwaXBwbyIsImNvZ25vbWUiOiJwbHV0byIsImVtYWlsIjoidGVzdCIsInVzZXJuYW1lIjoidGVzdHVzZXJuYW1lIiwicGFzc3dvcmQiOiJ0ZXN0IiwiX192IjowfSwiaWF0IjoxNzA5NzUzMTQzfQ.jHYmdtqhD8hvIAfhbUmD5b6E3_bKxDCheoGxLPJddus'; // Assicurati di aver ottenuto il token durante il login

const https = require("https");
const fs = require("fs");

// Leggi il certificato auto-firmato
const caCert = fs.readFileSync("server/cert.pem");

// Opzioni per l'agente HTTPS con il certificato auto-firmato
const agentOptions = {
    ca: caCert,
    rejectUnauthorized: false // Disabilita la verifica del certificato SSL
};

// Crea un'istanza dell'agente HTTPS con le opzioni
const agent = new https.Agent(agentOptions);

fetch('http://localhost:3000/utente/api/auth-with-password', {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({username: "Solyp", password: "peppe"}),
    agent: agent // Utilizza l'agente HTTPS personalizzato
})
.then(response => {
    if (!response.ok) {
        throw new Error('Errore nella richiesta');
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Errore:', error);
});