export function load({ cookies }){
    cookies.delete("token", {path: "/"});
}