// @ts-nocheck
import { redirect } from '@sveltejs/kit';

// @ts-nocheck
export async function load({ params, locals }) {
    const { username } = params
    // const token = cookies.get("token");

    const resJSON = await fetch(`http://localhost:3000/utente/api/get/${username}`);

    const res = await resJSON.json();

    if (res.success) {
        if(res.username == locals.utente.username) {
            redirect(308, "/private/user");
        }

        return {me: locals.utente, utente : res}
    } else {
        return { post: 404 }
    }

}