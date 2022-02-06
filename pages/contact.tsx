import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";
import Head from "next/head";
import {useState} from "react";

const Contact: NextPage = () => {
    const [showMail, setShowMail] = useState(false);

    // States for contact form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors: {[key: string]: boolean} = {};
        let isValid = true;

        if (name.length <= 0) {
            tempErrors["name"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({...tempErrors});
        console.log("handleValidation errors: ", errors);
        return isValid;
    };

    const handleSubmit = async (e: {preventDefault: () => void}) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendmail", {
                body: JSON.stringify({
                    email: email,
                    name: name,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            const {error} = await res.json();
            if (error) {
                console.log("handleSubmit error: ", error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");

                // Reset form fields
                setName("");
                setEmail("");
                setMessage("");
                setSubject("");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
            // Reset form fields
            setName("");
            setEmail("");
            setMessage("");
            setSubject("");
        }
        console.log("form values:", [name, email, subject, message]);
    };

    return (
        <Layout>
            <Head>
                <title>Contact | İbrahim SARI</title>
            </Head>
            <section>
                <h1>Contact</h1>
                <p>👋 I always check my mails. Please do not hesitate to send me a message in English or Turkish.</p>

                <div className={styles.contactWrapper}>
                    <div className={styles.contactInfo}>
                        <div>
                            <i className="fa fa-envelope"></i> &nbsp;{" "}
                            {showMail === true ? (
                                <a className={styles.mailAnchor} href="mailto:hi@isari.me">
                                    hi@isari.me
                                </a>
                            ) : (
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setShowMail(true);
                                    }}
                                >
                                    Show Mail Address
                                </button>
                            )}
                        </div>
                        <br />
                        <div>
                            <i className="fas fa-map-marker-alt"></i> &nbsp; Istanbul, TURKEY
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.5521443513!2d28.871752974039318!3d41.00523629210813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1644174793337!5m2!1str!2str"
                            width="300"
                            height="250"
                            style={{border: 0}}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name..."
                            required={true}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your e-mail..."
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject..."
                            required={true}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message..."
                            required={true}
                            style={{minHeight: 100}}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <button className="btn" type="submit" style={{float: "right"}}>
                            <i className="fas fa-paper-plane"></i> {buttonText}
                        </button>
                        <div>
                            {showSuccessMessage && (
                                <p className="text-green-500 font-semibold text-sm my-2">
                                    Thankyou! Your Message has been delivered.
                                </p>
                            )}
                            {showFailureMessage && (
                                <p className="text-red-500">Oops! Something went wrong, please try again later.</p>
                            )}
                        </div>
                    </form>
                </div>

                {/*todo: google captcha */}
            </section>
        </Layout>
    );
};

export default Contact;
