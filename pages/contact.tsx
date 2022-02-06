import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";
import Head from "next/head";
import {useState} from "react";

const Contact: NextPage = () => {
    const [showMail, setShowMail] = useState(false);

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
                    <form action="">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name..." />

                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Your e-mail..." />

                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject..." />

                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="Your Message..." style={{minHeight: 100}} />

                        <button className="btn" type="submit" style={{float: "right"}}>
                            <i className="fas fa-paper-plane"></i> Send
                        </button>
                    </form>
                </div>

                {/*todo: google captcha */}
                {/*todo: show mail address button */}
            </section>
        </Layout>
    );
};

export default Contact;
