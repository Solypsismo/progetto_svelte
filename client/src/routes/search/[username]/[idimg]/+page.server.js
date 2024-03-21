// @ts-nocheck
export async function load({ params, cookies }) {
    const { idimg } = params
    const token = cookies.get("token");

    const resJSON = await fetch(`http://localhost:3000/post/api/get/${idimg}`, {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });

    const res = await resJSON.json();

    if (res.success) {
        res.post.liked = res.liked;
        return { post: res.post, token}
    } else {
        return { post: 404 }
    }

}

import { like } from '$lib/action/utility.js';

export const actions = {
    like
}