// @ts-nocheck
import { redirect } from '@sveltejs/kit';

let res_form = null;
// @ts-nocheck
export async function load({ params, locals, cookies }) {
    const { username } = params
    const token = cookies.get("token");

    const resJSON = await fetch(`http://localhost:3000/utente/api/get/${username}`);

    const res = await resJSON.json();

    if (res.success) {
        if (res.username == locals.utente.username) {
            redirect(308, "/private/user");
        }

        locals.amicoCercato = res;

        const statusJSON = await fetch(`http://localhost:3000/friendship/api/get-status/${username}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });

        const status = await statusJSON.json();

        if (res_form) {
            let tmp = { success: res_form.success, message: res_form.message }
            res_form = null;
            return { me: locals.utente, utente: res, res_form: tmp, status: status.status }
        }
        else
            return { me: locals.utente, utente: res, status: status.messaggio }

    } else {
        return { post: 404 }
    }

}

export const actions = {
    sendRequest: async (event) => {
        const { username } = event.params;
        const token = event.cookies.get("token");
        let resJSON;

        try {
            resJSON = await fetch("http://localhost:3000/friendship/api/send-request", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ username_reciver: username })
            })
        } catch (error) {
            console.log("errore nel fetch : ", error.message);
        }

        try {
            const res = await resJSON.json();
            if (res.success) res_form = { success: res.success, message: "Richiesta inviata con successo" };
        } catch (error) {
            console.error("errore nel parse : ", error.message);
        }
    },

    acceptRequest: async (event) => {
        // const formData = Object.fromEntries(await event.request.formData());
        const { username } = event.params;
        const token = event.cookies.get("token");

        // try {
        const resJSON = await fetch("http://localhost:3000/friendship/api/accept-request", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({ username_reciver: username })
        })

        const res = await resJSON.json();

        if (res.success) {
            res_form = { success: res.success, message: "Richiesta accettata con successo" };
        }
    },

    declineRequest: async (event) => {
        const { username } = event.params;
        const token = event.cookies.get("token");

        // try {
        const resJSON = await fetch("http://localhost:3000/friendship/api/decline-request", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({ username_reciver: username })
        })

        const res = await resJSON.json();

        if (res.success) {
            res_form = { success: res.success, message: "Richiesta rifiutata." };
        }
    } 
}