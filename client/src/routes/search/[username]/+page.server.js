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

        const statusJSON = await fetch(`http://localhost:3000/friendship/api/get-status/${username}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });

        const status = await statusJSON.json();

        if (res_form) {
            res_form = null;
            return { me: locals.utente, utente: res, res_form: { success: true }, status: status.status }
        }
        else
            return { me: locals.utente, utente: res, status: status.messaggio }

    } else {
        return { post: 404 }
    }

}

export const actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        const token = event.cookies.get("token");
        let resJSON;

        try {
            resJSON = await fetch("http://localhost:3000/friendship/api/send-request", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ username_reciver: formData.username })
            })
        } catch (error) {
            console.log("errore nel fetch : ", error.message);
        }

        try {
            const res = await resJSON.json();
            res_form = { success: res.success };
        } catch (error) {
            console.error("errore nel parse : ", error.message);
        }
    }
}