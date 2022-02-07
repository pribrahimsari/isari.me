import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";
import stylesTimeline from "../styles/Timeline.module.css";
import Head from "next/head";
import Link from "next/link";
import {RoughNotation} from "react-rough-notation";
import {motion} from "framer-motion";

const About: NextPage = () => {
    const experienceData = [
        {
            year: "2010 - Now",
            title: "Software Developer & IT Consultant",
            company: "Freelance",
            techs: "React, TypeScript, Laravel, CodeIgniter",
            jobs: [
                "Developed so many websites for my personal or corporate customers.",
                "As JavaScript dominates the market and can handle whole backend, frontend, mobile and desktop platforms, I am switching my tech-stack knowledge from PHP to JavaScript and TypeScript.",
            ],
        },
        {
            year: "2021 - Now",
            title: "FrontEnd Web Developer",
            company: "A Digital Marketing Company (wants to remain anonymous)",
            techs: "React, TypeScript, MapBox/MapLibre",
            jobs: [
                "Built indoor map solutions using Apple IMDF (geojson) and MapLibre",
                "Route finding, visualisation of user preferences (used Material UI)",
            ],
        },
        {
            year: "2016 - 2020",
            title: "Fullstack Web Developer & IT Consultant",
            company: "A Security & Consultancy Company (wants to remain anonymous)",
            techs: "Laravel, PHP, MySQL, jQuery + jQuery Mobile",
            jobs: [
                "Built in-house CRM (Customer Relationship Management) software (Laravel, PHP, MySQL, jQuery)",
                "Built web and mobile application for site supervisions, sending created reports to customers and generate statistical results. (Laravel, PHP, MySQL, jQuery, jQuery Mobile, Chart.js)",
                "Push notifications to subscribers/customers for emergencies (SOAP / XML)",
                "Built and install Secure Cloud File Sharing Platform. (PHP, MySQL)",
                "Re-designed and built responsively official websites of main and affiliated companies.",
            ],
        },
        {
            year: "2011 - 2016",
            title: "Software Developer & Project Supervisor",
            company: "Security General Directorate & IT Department",
            techs: "PHP, MySQL, jQuery, ASP.Net, C#, VB.Net, Microsoft SQL",
            jobs: [
                "Design & built official websites of some-subsidiaries using PHP, MySQL and jQuery.",
                "Built in-house main and sub web applications for management of human and time resources using PHP, MySQL and jQuery.",
                "Contributed to building of Electronic Document Management System (EDMS) as front-end developer. (VB.NET + MsSQL)",
                "Managed 2 sub-applications.",
                "Communication with stakeholders of web applications and managed 2 junior developers by handling user experience feedbacks, needs analysis and project schedule.",
                "Other administrative affairs tasks.",
            ],
        },
        {
            year: "2009 - 2011",
            title: "Junior PHP Developer",
            company: "University of Turkish Police Academy",
            techs: "PHP, MySQL, jQuery",
            jobs: [
                "Re-designed official website of university with teammates.",
                "Built a custom CMS to manage content of website.",
                "Built in-house web apps and sub-modules used to organize administrative affairs of the university.",
            ],
        },
    ];
    const educationData = [
        {
            year: "2015 - 2019",
            program: "Computer Programming",
            university: "Çukurova University",
        },
        {
            year: "2016 - 2020",
            program: "Faculty of Law (Bachelor's Degree)",
            university: "Marmara University",
        },
        {
            year: "2007 - 2011",
            program: "Security Administration (Bachelor's Degree)",
            university: "Faculty of Security Sciences, University of Turkish Police Academy",
        },
    ];

    return (
        <Layout>
            <Head>
                <title>About Me | İbrahim SARI</title>
            </Head>
            <section>
                <div className={styles.aboutPageTitleDiv}>
                    <motion.div
                        className={styles.circularLandscape}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay: 0.3}}
                    >
                        <img src="hero-profile.jpg" alt="my picture" />
                    </motion.div>
                    <motion.div
                        className={styles.aboutPageTitleTexts}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay: 0.5}}
                    >
                        <h2>İbrahim SARI</h2>
                        <h4>Web Developer based on Istanbul, TURKEY</h4>
                    </motion.div>
                </div>
                <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{delay: 0.7}}>
                    <p>
                        👶 Borned in 1989.{" "}
                        <RoughNotation type="underline" color="#b71c1c" show animationDelay={2000}>
                            I am {new Date().getFullYear() - 1989}
                        </RoughNotation>
                        .
                    </p>
                    <p>👨‍💻 I love making somethings work, learning and teaching.</p>
                    <p>
                        🎤 I have been to{" "}
                        <RoughNotation type="underline" color="#b71c1c" show animationDelay={3500}>
                            7 countries
                        </RoughNotation>{" "}
                        so far. I can{" "}
                        <RoughNotation type="highlight" color="#ffd54f" show animationDelay={4000}>
                            communicate in both English and Turkish
                        </RoughNotation>{" "}
                        languages.
                    </p>
                    <p>
                        ⚙️I had opportunity to work with many kinds of people and teams. I've{" "}
                        <RoughNotation type="underline" color="#b71c1c" show animationDelay={5000}>
                            no problem with team cohesion
                        </RoughNotation>
                        , as I love teaching or learning new things.
                    </p>
                    <p>👨‍👩‍👦‍👦 A husband and father.</p>
                    {/* todo: other details <p>about me text instructions</p>*/}
                </motion.div>
                <motion.div
                    className={styles.techStack}
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.9}}
                >
                    <h2>Tech Stack</h2>
                    <div>
                        {[
                            "react.png",
                            "javascript.png",
                            "typescript.png",
                            "git.png",
                            "html.jpg",
                            "css.jpg",
                            "php.png",
                            "codeigniter.jpg",
                            "laravel.png",
                            "mysql.png",
                            "jquery.png",
                        ].map((tech, i) => (
                            <motion.img
                                src={`assets/tech-stack/${tech}`}
                                alt={tech}
                                key={i}
                                whileHover={{scale: 1.1}}
                            />
                        ))}
                    </div>
                </motion.div>
            </section>

            <motion.section
                className={styles.aboutPageSection}
                style={{width: "100%"}}
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1}}
            >
                <h2>Experience</h2>
                <p>Learning and coding are parts of my whole carrier.</p>
                <ul className={stylesTimeline.timeline}>
                    {experienceData &&
                        experienceData.map((experience, i) => (
                            <li key={i}>
                                <div className={i % 2 === 0 ? stylesTimeline.directionL : stylesTimeline.directionR}>
                                    <div className={stylesTimeline.flagWrapper}>
                                        <span className={stylesTimeline.hexa}></span>
                                        <span className={stylesTimeline.flag}>{experience.title}</span>
                                        <span className={stylesTimeline.timeWrapper}>
                                            <span className={stylesTimeline.time}>{experience.year}</span>
                                        </span>
                                    </div>
                                    <div className={stylesTimeline.desc}>
                                        <div style={{color: "var(--blueOfLogo)"}}>
                                            <b>{experience.company}</b>
                                        </div>
                                        <div>
                                            <ul>
                                                {experience.jobs &&
                                                    experience.jobs.map((job, i2) => <li key={i2}>{job}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <b>Technologies:</b> {experience.techs}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </motion.section>

            <motion.section
                className={styles.aboutPageSection}
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1.1}}
            >
                <h2>Education</h2>
                <p>I am completely self-taught, passioned and studious. Here are my all graduations:</p>
                <ul className={stylesTimeline.timeline}>
                    {educationData &&
                        educationData.map((education, i) => (
                            <li key={i}>
                                <div className={i % 2 === 0 ? stylesTimeline.directionL : stylesTimeline.directionR}>
                                    <div className={stylesTimeline.flagWrapper}>
                                        <span className={stylesTimeline.hexa}></span>
                                        <span className={stylesTimeline.flag}>{education.program}</span>
                                        <span className={stylesTimeline.timeWrapper}>
                                            <span className={stylesTimeline.time}>{education.year}</span>
                                        </span>
                                    </div>
                                    <div className={stylesTimeline.desc}>
                                        <div
                                            style={{
                                                color: "var(--blueOfLogo)",
                                                textAlign: i === 0 ? "right" : "justify",
                                            }}
                                        >
                                            <b>{education.university}</b>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </motion.section>
            <section className={styles.aboutPageSection}>
                <Link href="/cv-ibrahim-sari-2022.pdf">
                    <a target="_blank">
                        <button className="btn">
                            <i className="fa fa-download"></i> &nbsp; Download my CV
                        </button>
                    </a>
                </Link>
            </section>
        </Layout>
    );
};

export default About;
