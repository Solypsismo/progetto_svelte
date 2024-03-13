// @ts-nocheck
import { redirect } from '@sveltejs/kit';

export const actions = {
    register: async ({ locals, request, cookies }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        console.log("Sto per inviare la richiesta :");
        const res = await fetch("http://localhost:3000/utente/api/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        console.log("richiesta inviata");
        const dati = await res.json();

        if(dati.success){
            // cookies.set("token", dati.token, {path: "/", httpOnly: true, sameSite: "strict"})
            throw redirect(303, "/login")
        }else{
            throw redirect(303, '/registrati');
        }

        
    }
}