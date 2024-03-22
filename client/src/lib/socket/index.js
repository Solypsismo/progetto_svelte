// @ts-nocheck
import { io } from "socket.io-client";

function createSocket(token) {
    const socket = io("ws://localhost:3000", {
        auth: {
            token
        }
    });

    socket.on("connect", () => {
        console.log("connessione avvenuta");
    })

    return socket;
}

function sendMessage(socket, message, to) {
    socket.emit("message", message, to);
}

function getMessage(socket) {
    let messaggio;

    socket.on("message", (arg) => {
        messaggio = arg;
    })

    return messaggio;
}

export { createSocket, sendMessage, getMessage }

