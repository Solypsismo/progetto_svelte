// @ts-nocheck
import { createSocket } from '$lib/socket/index.js';

export function load({ locals, cookies }) {

    const token = cookies.get("token");
    // const socket = createSocket(token);
    // sendMessage(socket, "ciao bro");
//TODO: finish
    if (locals.utente) {
        return { ...locals.utente, token };
    }
}