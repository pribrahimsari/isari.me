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
            year: "2022 - Now",
            title: "Frontend Developer",
            company: "OceanVoy - London-based Startup Company",
            companyLogoUrl: "/assets/experience-company-logos/oceanvoy-logo.svg",
            techs: "React, TypeScript, JavaScript, GraphQL, MapBox, Serverless, AppSync",
            jobs: [
                "developed and maintained the UI of the web application using the technologies: TypeScript, React, GraphQL, MaterialUI and MapBox.",
                "built reusable component libraries and tools using the best practices in software development.",
                "contributed to the backend architecture using the AWS Serverless tech stack: AWS Lambda microservices, GraphQL API with AWS AppSync, AWS DynamoDB and RDS.",
            ],
        },
        {
            year: "2010 - Now",
            title: "Software Developer & IT Consultant",
            company: "Freelance",
            techs: "React, TypeScript, Laravel, CodeIgniter, LAMP Stack, jQuery, jQuery UI & Mobile",
            jobs: [
                "Developed many websites for my personal or corporate customers.",
                "Developing web applications/sites for over 10 years. Follows the improving web technologies; and according to the requirements of my freelance customers I use React, TypeScript, JavaScript, Laravel, CodeIgniter, LAMP Stack, jQuery, jQuery UI and Mobile.",
            ],
        },
        {
            year: "2021 - Now",
            title: "Full-Stack Developer",
            company: "VenueX - StartUp Company - Istanbul, Turkey",
            companyLogoUrl: "/assets/experience-company-logos/venuex-logo.png",
            techs: "React, TypeScript, MapBox/MapLibre, NestJS",
            jobs: [
                "Built 3d in-door map solutions using React, Apple IMDF (geojson) and MapLibre",
                "Route finding and visualization of user preferences (Material UI)",
                "Rest API implementations (NestJS)",
            ],
        },
        {
            year: "2016 - 2020",
            title: "Full-Stack Developer & IT Consultant",
            company: "ISC Security Consultancy & Group Companies - Istanbul, Turkey",
            companyLogoUrl: "/assets/experience-company-logos/isc-logo-en.png",
            techs: "Laravel, PHP, MySQL, jQuery + jQuery Mobile, ChartJS",
            jobs: [
                "Built in-house CRM (Customer Relationship Management) software (Laravel, PHP, MySQL, jQuery)",
                "Built web and mobile application for site supervisions, sending created reports to customers and generate statistical results. (Laravel, PHP, MySQL, jQuery, jQuery Mobile, Chart.js)",
                "Push notifications to subscribers/customers for emergencies (SOAP / XML)",
                "Built and installed Secure Cloud File Sharing Platform. (PHP, MySQL)",
                "Re-designed and built responsively official websites of main and affiliated companies.",
            ],
        },
        {
            year: "2011 - 2016",
            title: "Software Developer & Project Supervisor",
            company: "Security General Directorate & IT Department - Ankara, Turkey",
            companyLogoUrl: "/assets/experience-company-logos/egm.png",
            techs: "PHP, MySQL, jQuery, ASP.Net, C#, VB.Net, Microsoft SQL",
            jobs: [
                "Designed & built official websites of some-subsidiaries using PHP, MySQL and jQuery.",
                "Built on-premise main and sub web applications for management of human and time resources using PHP, MySQL and jQuery.",
                "Contributed to building of Electronic Document Management System (EDMS) as frontend developer. (VB.NET + MsSQL)",
                "Managed 2 sub-applications including communication with stakeholders of applications and managed 2 junior developers by handling user experience feedbacks, requirement analysis and project schedule/program.",
                "Other administrative affairs.",
            ],
        },
        {
            year: "2009 - 2011",
            title: "Junior PHP Developer",
            company: "University of Turkish Police Academy - Ankara, Turkey",
            companyLogoUrl: "/assets/experience-company-logos/akademi.png",
            techs: "PHP, MySQL, jQuery",
            jobs: [
                "Contributed to re-designing official website of university with teammates.",
                "Contributed to building a custom CMS to manage content of website.",
                "Built on-premise web apps and sub-modules used to organize administrative affairs of the university.",
            ],
        },
    ];
    const educationData = [
        {
            year: "2015 - 2019",
            program: "Computer Programming",
            university: "Cukurova University",
        },
        // {
        //     year: "2016 - 2020",
        //     program: "Faculty of Law (Bachelor's Degree)",
        //     university: "Marmara University",
        // },
        {
            year: "2007 - 2011",
            program: "Security Administration (Bachelor's Degree)",
            university: "Faculty of Security Sciences, University of Turkish Police Academy",
        },
        {
            year: "2007 - 2011",
            program: "Public Administration (Double Major)",
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
                        <h4>Frontend Developer</h4>
                    </motion.div>
                </div>
                <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{delay: 0.7}}>
                    <p>
                        📅 Has been developing software for various industries{" "}
                        <RoughNotation type="underline" color="#b71c1c" show animationDelay={2000}>
                            since 2010.
                        </RoughNotation>
                    </p>
                    <p>👨‍💻 Loves making somethings work, learning and teaching.</p>
                    <p>
                        🎤 Had been to{" "}
                        <RoughNotation type="underline" color="#b71c1c" show animationDelay={3500}>
                            7 countries
                        </RoughNotation>{" "}
                        so far. Can{" "}
                        <RoughNotation type="highlight" color="#c89903" show animationDelay={4000}>
                            communicate in both English and Turkish
                        </RoughNotation>{" "}
                        languages.
                    </p>
                    <p>
                        ⚙️Had opportunity to work with many kinds of people and teams.{" "}
                        <RoughNotation type="underline" color="#b71c1c" show animationDelay={5000}>
                            No problem with team cohesion
                        </RoughNotation>
                        , as I love teaching or learning new things.
                    </p>
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
                        <motion.img
                            src="data:image/png;base64,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"
                            alt="mapbox"
                            whileHover={{scale: 1.1}}
                        />
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
                <Link href="/cv-ibrahim-sari-2022-1.pdf">
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
