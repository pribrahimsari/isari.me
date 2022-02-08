import sendgrid from "@sendgrid/mail";

process.env.SENDGRID_API_KEY && sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

//@ts-ignore
async function sendEmail(req, res) {
    try {
        console.log("Request.Body: ", req.body);
        await sendgrid.send({
            to: "pr.ibrahimsari@gmail.com", // Your email where you'll receive emails
            from: {name: req.body.name, email: "pr.ibrahimsari@gmail.com"}, // your website email address here
            replyTo: {name: req.body.name, email: req.body.email}, // your website email address here
            subject: `[isari.me] ${req.body.subject} by [${req.body.name}]`,
            html: `<div><b><u>CONTACT FORM MESSAGE:</u></b></div>
                   <div><b>NAME:</b> ${req.body.name}</div>
                   <div><b>SUBJECT:</b> ${req.body.subject}</div>
                   <div><b>EMAIL:</b> ${req.body.email}</div>
                   <div><b>MESSAGE:</b> ${req.body.message}</div>`,
        });
    } catch (error) {
        // @ts-ignore
        console.error("async function sendEmail ERROR: ", error);
        // @ts-ignore
        return res.status(error.statusCode || 500).json({error: error});
    }

    return res.status(200).json({error: ""}); //todo: error? mı success mi?
}

export default sendEmail;
