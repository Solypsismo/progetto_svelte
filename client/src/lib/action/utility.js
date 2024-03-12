// @ts-nocheck
import { redirect } from "@sveltejs/kit";

async function PostUpload(event) {
    const formData = await event.request.formData();

    const token = event.cookies.get("token");

    if (!token) {
        redirect(303, "/login");
    }

    formData.append("token", token);

    const response = await fetch("http://localhost:3000/post/api/create", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData
    })

    const responseParse = await response.json();

    console.log(responseParse);
    if (responseParse.success) {
        console.log("Upload riuscito");
    } else {
        console.log("zio pera");
    }
}

function formattaData(dataISO8601) {
    // Crea un oggetto Data dalla stringa
    let data = new Date(dataISO8601);

    // Estrai giorno, mese e anno dalla data
    let giorno = String(data.getDate()).padStart(2, '0');
    let mese = String(data.getMonth() + 1).padStart(2, '0'); // Nota: i mesi sono zero-based
    let anno = data.getFullYear();

    // Costruisci la data nel formato dd-mm-yyyy
    let dataFormattata = `${giorno}-${mese}-${anno}`;

    return dataFormattata;
}

async function ChangeProfilePic(event) {
    const formData = await event.request.formData();

    const token = event.cookies.get("token");

    if (!token) {
        redirect(303, "/login");
    }

    formData.append("token", token);

    try {
        const response = await fetch("http://localhost:3000/utente/api/update-avatar", { // Sostituisci con l'URL corretto per la tua richiesta POST
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });


        const responseParse = await response.json();

        const options = {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            domain: "192.168.43.42",
        }

        if (responseParse.success) {
            event.cookies.delete("token", { path: '/' });
            event.cookies.set("token", responseParse.token, options)
            console.log("Upload riuscito");
        } else {
            console.log("fail");
        }

    } catch (error) {
        // console.error("errore", error);
    }
}

export { PostUpload, formattaData, ChangeProfilePic }
