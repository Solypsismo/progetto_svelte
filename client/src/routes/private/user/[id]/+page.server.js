// @ts-nocheck
export async function load({ params, cookies }) {
    const { id } = params
    const token = cookies.get("token");

    const resJSON = await fetch(`http://localhost:3000/post/api/get/${id}`, {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });

    const res = await resJSON.json();

    if (res.success) {
        return { post: res.post, token }
    } else {
        return { post: 404 }
    }

}