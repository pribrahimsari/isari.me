import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";
import Head from "next/head";

const Contact: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Contact | İbrahim SARI</title>
            </Head>
            <section>
                <h1>Contact</h1>
                <p>👋 I always read my mails. Please do not hesitate to send me a message in English or Turkish.</p>
                <div>mail icon: hi@isari.me</div>
                <div>location icon: Istanbul, TURKEY</div>
                <form action="">
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="subject" />
                    <input type="email" placeholder="email" />
                    <textarea placeholder="your message" />
                    <input type="submit" value="Send" />
                </form>
                {/*todo: google captcha */}
                {/*todo: show mail address button */}
            </section>
        </Layout>
    );
};

export default Contact;
