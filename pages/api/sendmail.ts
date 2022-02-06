import sendgrid from "@sendgrid/mail";

//todo: cannot get sendgrid api key --> so unauthorized
process.env.SENDGRID_API_KEY && sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const sendFrom = process.env.SENDMAIL_FROM || "sender_name@domain.com";
const sendTo = process.env.SENDMAIL_TO || "receiver_name@domain.com";
//todo: .....@domain.com is forbidden
//todo: be sure you got process env

//@ts-ignore
async function sendEmail(req, res) {
    try {
        console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: sendTo, // Your email where you'll receive emails
            from: sendFrom, // your website email address here
            subject: `${req.body.subject}`,
            html: `<div>${req.body.message}</div>`,
        });
    } catch (error) {
        // console.log(error);
        // @ts-ignore
        return res.status(error.statusCode || 500).json({error: error.message});
    }

    return res.status(200).json({error: ""});
}

export default sendEmail;
