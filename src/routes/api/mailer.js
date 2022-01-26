import { renderMail } from 'svelte-mail';
// import Mail from 'src/routes/components/Mail.svelte';

import Mail from "../components/Mail.svelte";
import sgMail from '@sendgrid/mail';


let sender;
let receiver;
let subject;
let api_fs_data
let server;

sgMail.setApiKey(
    import.meta.env.VITE_SENDGRID_API_KEY)



export function post(request) {
    const object = {};
    for (const [key, value] of request.body.entries()) {
        object[key] = value;
    }
    sender = object.sender || 'marcques.ethanmouton@npesnam.com'
    receiver = JSON.parse(`[${object.receiver}]`) 
    subject = object.subject || 'Server Monitor | Filesystem'
    server = object.server
   	let buff = new Buffer.from(object.data, 'base64');
	let text = buff.toString('ascii');

	api_fs_data = JSON.parse(text);
    

    sendMail()

    return {

        status: 202
           
    }




}



async function sendMail() {
   const { html, text } = await renderMail(Mail, { data: { server: server, fs_data: api_fs_data.discarray } });

console.log(receiver)

    const msg = {
        to: receiver,
        from: `Automated Resource Monitoring <${sender}>`,
        subject: subject,
        text: text,
        html: html,
    }



    sgMail
        .send(msg)
        .then(() => {
            console.log(subject+ ' Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}
