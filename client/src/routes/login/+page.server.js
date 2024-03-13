// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    login: async (event) => {
        const data = await event.request.formData();
        const obj = Object.fromEntries(data);

        const res = await fetch("http://localhost:3000/utente/api/auth-with-password", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj),
            credentials: 'include'
        });

        const dati = await res.json();

        console.log(dati);
        if(dati.success){
            event.cookies.set("token", dati.token, {
                path: "/",
                httpOnly: true,
                sameSite: "none",
                domain: "192.168.1.161",
              });
            throw redirect(303, "/private")
        }else{
            throw redirect(303, '/login');
        }
    }
}