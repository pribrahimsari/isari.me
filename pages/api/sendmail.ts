import sendgrid from "@sendgrid/mail";

type sendEmailRequest = {
    body: {
        name: string;
        email: string;
        subject: string;
        message: string;
    };
};

type sendEmailResponse = {
    status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
            (arg0: {success?: [sendgrid.ClientResponse, {}]; error?: any}): any;
            new (): any;
        };
    };
};

async function sendEmail(req: sendEmailRequest, res: sendEmailResponse) {
    //get sendgrid api key
    process.env.SENDGRID_API_KEY && sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    //show request body in console
    console.log("Request.Body: ", req.body);

    //send it
    await sendgrid
        .send({
            to: "pr.ibrahimsari@gmail.com", // Your email where you'll receive emails
            from: {name: req.body.name, email: "pr.ibrahimsari@gmail.com"}, // your website email address here
            replyTo: {name: req.body.name, email: req.body.email},
            subject: `[isari.me] ${req.body.subject} by [${req.body.name}]`,
            html: `<div><b><u>CONTACT FORM MESSAGE:</u></b></div>
                   <div><b>NAME:</b> ${req.body.name}</div>
                   <div><b>SUBJECT:</b> ${req.body.subject}</div>
                   <div><b>EMAIL:</b> ${req.body.email}</div>
                   <div><b>MESSAGE:</b> ${req.body.message}</div>`,
        })
        .then((response) => {
            console.log("Sendgrid.send SUCCESS: ", response[0].headers);
            return res.status(response[0].statusCode).json({success: response});
        })
        .catch((error) => {
            console.error("Sendgrid.send ERROR: ", error);
            return res.status(error.statusCode || 500).json({error: error});
        });
}

export default sendEmail;
