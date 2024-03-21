// @ts-nocheck
import { PostUpload, like } from '$lib/action/utility'

export async function load({ cookies, locals }) {

    const token = cookies.get("token");
    const resJSON = await fetch("http://localhost:3000/friendship/api/get-friends", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });

    const res = await resJSON.json();

    if (res.success) {
        const mio_username = locals.utente.username;

        const usernames = Array.from(new Set(res.amici.flatMap(obj => [obj.first_user, obj.second_user])))
            .filter(user => user !== mio_username);

        const datiJSON = await fetch("http://localhost:3000/utente/api/friends-post", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({ usernames })
        })

        if (datiJSON.ok) {
            const dati = await datiJSON.json();
            return { amici: dati };
        } else {
            return { amici: [] };
        }

    } else {
        return { amici: [] }
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    PostUpload,
    like
}