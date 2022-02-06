import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";
import Head from "next/head";

const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>About Me | İbrahim SARI</title>
            </Head>
            <section>
                <div className={styles.aboutPageTitleDiv}>
                    <div className={styles.circularLandscape}>
                        <img src="hero-profile.jpg" alt="my picture" />
                    </div>
                    <div className={styles.aboutPageTitleTexts}>
                        <h2>İbrahim SARI</h2>
                        <h4>Web Developer based on Istanbul, TURKEY</h4>
                    </div>
                </div>
                <div>
                    <p>👶 Borned in 1989. I am {new Date().getFullYear() - 1989}.</p>
                    <p>👨‍💻 I love making somethings work, learning and teaching.</p>
                    <p>
                        🎤 I have been to 7 countries so far. I can communicate in both English and Turkish languages.
                    </p>
                    <p>
                        👨‍👩‍👦‍👦 I had the opportunity to work with many kinds of people and teams. I've no problem with team
                        cohesion, as I love teaching or learning new things.
                    </p>
                    {/* todo: other details <p>about me text instructions</p>*/}
                </div>
                <div className={styles.techStack}>
                    <h2>Tech Stack</h2>
                    <div>
                        <img src="assets/tech-stack/react.png" />
                        <img src="assets/tech-stack/javascript.png" />
                        <img src="assets/tech-stack/typescript.png" />
                        <img src="assets/tech-stack/git.png" />
                        <img src="assets/tech-stack/html.jpg" />
                        <img src="assets/tech-stack/css.jpg" />
                        <img src="assets/tech-stack/php.png" />
                        <img src="assets/tech-stack/codeigniter.jpg" />
                        <img src="assets/tech-stack/laravel.png" />
                        <img src="assets/tech-stack/mysql.png" />
                        <img src="assets/tech-stack/jquery.png" />
                    </div>
                </div>
            </section>

            <section>
                <h2>Experience</h2>
                <div>
                    <b>2010 - Now -- Software Developer & IT Consultant</b> <br />
                    Freelance
                    <br />
                    Technologies: ReactJS, TypeScript, Laravel, CodeIgniter
                    <ul>
                        <li>Developed so many websites for my personal or corporate customers.</li>
                        <li>
                            As JavaScript dominates the market and can handle whole backend, frontend, mobile and
                            desktop platforms, I am switching my tech-stack knowledge from PHP to JavaScript and
                            TypeScript.
                        </li>
                    </ul>
                </div>
                <div>
                    <b>2021 - Now -- FrontEnd Developer</b> <br />
                    A Digital Marketing Company in stealth mode
                    <br />
                    Technologies: React, TypeScript, MapBox/MapLibre
                    <ul>
                        <li>Built indoor map solutions using Apple IMDF (geojson) and MapLibre</li>
                        <li>Route finding, visualisation of user preferences (used Material UI)</li>
                    </ul>
                </div>
                <div>
                    <b>2016 - 2020 -- Fullstack Software Developer & IT Consultant</b> <br />
                    A Security & Consultancy Company in stealth mode <br />
                    Technologies: Laravel, PHP, MySQL, jQuery + jQuery Mobile
                    <ul>
                        <li>
                            Built in-house CRM (Customer Relationship Management) software (Laravel, PHP, MySQL, jQuery)
                        </li>
                        <li>
                            Built web and mobile application for site supervisions, sending created reports to customers
                            and generate statistical results. (Laravel, PHP, MySQL, jQuery, jQuery Mobile, Chart.js)
                        </li>
                        <li>Push notifications to subscribers/customers for emergencies (SOAP / XML) </li>
                        <li>Built and install Secure Cloud File Sharing Platform. (PHP, MySQL)</li>
                        <li>Re-designed and built responsively official websites of main and affiliated companies.</li>
                    </ul>
                </div>
                <div>
                    <b>2011 - 2016 -- Software Developer & Project Supervisor</b> <br />
                    Security General Directorate & IT Department
                    <br />
                    Technologies: PHP, MySQL, jQuery, ASP.Net, C#, VB.Net, Microsoft SQL
                    <ul>
                        <li>Design & built official websites of some-subsidiaries using PHP, MySQL and jQuery.</li>
                        <li>
                            Built in-house main and sub web applications for management of human and time resources
                            using PHP, MySQL and jQuery.
                        </li>
                        <li>
                            Contributed to building of Electronic Document Management System (EDMS) as front-end
                            developer. (VB.NET + MsSQL)
                        </li>
                        <li>Managed 2 sub-applications.</li>
                        <li>
                            Communication with stakeholders of web applications and managed 2 junior developers by
                            handling user experience feedbacks, needs analysis and project schedule.
                        </li>
                        <li>Other administrative affairs tasks.</li>
                    </ul>
                </div>
                <div>
                    <b>2009 - 2011 -- Junior PHP Developer</b> <br />
                    University of Turkish Police Academy <br />
                    Technologies: PHP, MySQL, jQuery
                    <ul>
                        <li>Re-designed official website of university with teammates.</li>
                        <li>Built a custom CMS to manage content of website.</li>
                        <li>
                            Built in-house web apps and sub-modules used to organize administrative affairs of the
                            university.
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>Education</h2>
                <p>I am completely self-taught, passioned and studious. Here are my all graduations:</p>
                <div>
                    <b>2015 - 2019 -- Computer Programming</b> <br />
                    Çukurova University
                </div>
                <div>
                    <b>2016 - 2020 -- Faculty of Law</b> <br />
                    Marmara University
                </div>
                <div>
                    <b>2007 - 2011 -- Security Administration (Bachelor's Degree)</b> <br />
                    Faculty of Security Sciences, University of Turkish Police Academy
                </div>
            </section>
            <button>Download my CV as PDF</button>
        </Layout>
    );
};

export default About;
