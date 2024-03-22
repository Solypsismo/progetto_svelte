// @ts-nocheck
export function load({ locals, cookies }) {

    const token = cookies.get("token");

    return { ...locals.utente, token };
}