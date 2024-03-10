// @ts-nocheck
import { PostUpload, ChangeProfilePic } from '$lib/action/utility'

export async function load(event) {
    const token = event.cookies.get("token");

    const responseJSON = await fetch("http://localhost:3000/post/api/getall", {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
    const response = await responseJSON.json();

    // console.log(response);

    if(response.success){
        return {post: response.post};
    }else{
        console.log("failed");
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    PostUpload,
    ChangeProfilePic
}