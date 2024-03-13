// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const KEY = process.env.KEY;

export const handle = async ({ event, resolve }) => {
    if(event.url.pathname.startsWith("/private") || event.url.pathname.startsWith("/search")){
        const token = event.cookies.get("token");

        if(!token){
            redirect(308, "/login");
        }

        jwt.verify(token, KEY, (err, user) => {
            if(err){
                redirect(308, "/unauthorized");
            }

            event.locals.utente = user._doc;
        })
    }

    if(event.url.pathname.startsWith("/login") || event.url.pathname.startsWith("/registrati") ){
        const token = event.cookies.get("token");

        if(token){
            console.log("ti reindirizzo a private.");
            redirect(308, "/private");
        }
    }

    const response = await resolve(event);
	return response;
}