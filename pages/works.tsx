import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Works.module.css";
import stylesCard from "../styles/Workscard.module.css";
import Head from "next/head";
import {useState} from "react";
import FsLightbox from "fslightbox-react";
import {motion} from "framer-motion";

const Works: NextPage = () => {
    const myWorks = [
        // {
        //     //My Portfolio
        //     title: "My Personal Portfolio Website",
        //     year: "2022",
        //     headerImage: "https://works.ibrahimsari.com.tr/isari-me/header.jpg",
        //     techs: ["React", "TypeScript", "Pure CSS"],
        //     description:
        //         "Re-designed my personal portfolio website from scratch with actual techs. " +
        //         "Fully responsive, dark/light theme support, used Framer-Motion, Rough-Notation and VantaJS for animations. " +
        //         "Vercel for deployment with my personal domain.",
        //     //screenShots: [""],
        //     //currentLink: "",
        //     //cloneLink: "",
        //     //webArchiveLink: "",
        // },
        {
            //CRM
            title: "CRM (Customer Relationship Management)",
            year: "2018 - 2023",
            headerImage: "https://works.ibrahimsari.com.tr/crm/header.jpg",
            techs: ["Laravel", "PHP, MySQL", "jQuery, Mobile"],
            description:
                "Completely developed from scratch by me for my customer's specific requirements. " +
                "DB design, backend and frontend were developed by me. " +
                "Some modules such as 'Activities' have mobile support also. Still in use.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/crm/ss2.jpg",
                "https://works.ibrahimsari.com.tr/crm/ss3.jpg",
                "https://works.ibrahimsari.com.tr/crm/ss7.jpg",
                "https://works.ibrahimsari.com.tr/crm/mobile1.jpg",
                "https://works.ibrahimsari.com.tr/crm/mobile2.jpg",
                "https://works.ibrahimsari.com.tr/crm/mobile3.jpg",
                "https://works.ibrahimsari.com.tr/crm/mobile4.jpg",
                "https://works.ibrahimsari.com.tr/crm/ss4.jpg",
                "https://works.ibrahimsari.com.tr/crm/ss5.jpg",
                "https://works.ibrahimsari.com.tr/crm/ss6.jpg",
            ],
            //currentLink: "",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //Wedding Invitation
            title: "Wedding Invitation | Personal Project",
            year: "2013",
            headerImage: "https://works.ibrahimsari.com.tr/wedding-invite/website/header.jpg",
            techs: ["CodeIgniter", "LAMP Stack", "jQuery"],
            description:
                "I got married in 2013. In invitation card of our ceremony, we used QR codes embedded with the link of this project. " +
                "All invitees shared their regards using contact form and we published them at cine-vision to all guests during the ceremony. " +
                "Beside this, invitees could find location address by using this website. " +
                "I used parallax effects on this project. Mobile version is also available.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/wedding-invite/website/site1.jpg",
                "https://works.ibrahimsari.com.tr/wedding-invite/website/site2.jpg",
                "https://works.ibrahimsari.com.tr/wedding-invite/website/site6.jpg",
                "https://works.ibrahimsari.com.tr/wedding-invite/website/site7.jpg",
                "https://works.ibrahimsari.com.tr/wedding-invite/website/site8.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.ibrahimsari.com.tr/wedding-invite/html_copy/",
            //webArchiveLink: "",
        },
        {
            //Wedding Invitation MOBILE
            title: "Mobile Wedding Invitation | Personal Project",
            year: "2013",
            headerImage: "https://works.ibrahimsari.com.tr/wedding-invite-mobile/header.jpg",
            techs: ["CodeIgniter", "jQuery Mobile", "MySQL"],
            description:
                "Mobile version of my digital wedding invitation. Auto recognize user-agent and if user is browsing via his/her phone or tablet, " +
                "auto-redirect user to this view. " +
                "Used jQuery Mobile to show it like a mobile app. " +
                "All interactions of desktop version of invitation are available at mobile version. ",
            screenShots: [
                "https://works.ibrahimsari.com.tr/wedding-invite-mobile/ss1.jpg",
                "https://works.ibrahimsari.com.tr/wedding-invite-mobile/ss2.jpg",
                "https://works.ibrahimsari.com.tr/wedding-invite-mobile/ss3.jpg",
                "https://works.ibrahimsari.com.tr/wedding-invite-mobile/ss4.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.ibrahimsari.com.tr/wedding-invite-mobile/html_clone/",
            //webArchiveLink: "",
        },
        {
            //cormind
            title: "Cormind | Company Website",
            year: "2022",
            headerImage: "https://works.ibrahimsari.com.tr/cormind/header.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description:
                "Official website of my corporate customer. 3 languages support. Responsive and mobile friendly. Used WordPress and premium themes. Still active.",
            // screenShots: [
            //     "https://works.ibrahimsari.com.tr/iscd/ss1.jpg",
            // ],
            currentLink: "https://cormind.com/",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            // isc tesis
            title: "İSC Facility Management | Company Website",
            year: "2022",
            headerImage: "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/1.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description:
                "Official website of my corporate customer. 2 languages support. Responsive and mobile friendly. Used WordPress and premium themes. Still active.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/1.jpg",
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/2.jpg",
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/3.jpg",
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/4.jpg",
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/5.jpg",
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/6.jpg",
            ],
            currentLink: "https://isctesisyonetim.com",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //akinakbar.com
            title: "Akın Akbar | Personal Website",
            year: "2013",
            headerImage: "https://works.ibrahimsari.com.tr/akin-akbar/website/header.jpg",
            techs: ["CodeIgniter", "PHP", "jQuery", "MySQL"],
            description:
                "Personal website of a break-out singer. Presentation of his biography and new songs. " +
                "Built both public interface and admin panel to edit content of website. However, it is not active anymore. ",
            screenShots: [
                "https://works.ibrahimsari.com.tr/akin-akbar/website/site1.jpg",
                "https://works.ibrahimsari.com.tr/akin-akbar/website/site2.jpg",
                "https://works.ibrahimsari.com.tr/akin-akbar/website/site4.jpg",
                "https://works.ibrahimsari.com.tr/akin-akbar/admin_panel/login.jpg",
                "https://works.ibrahimsari.com.tr/akin-akbar/admin_panel/admin1.jpg",
                "https://works.ibrahimsari.com.tr/akin-akbar/admin_panel/admin2.jpg",
                "https://works.ibrahimsari.com.tr/akin-akbar/admin_panel/admin4.jpg",
                "https://works.ibrahimsari.com.tr/akin-akbar/admin_panel/admin6.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.ibrahimsari.com.tr/akin-akbar/html_copy/",
            webArchiveLink: "https://web.archive.org/web/20130302130829/http://www.akinakbar.com/",
        },
        {
            //iscd
            title: "İSC Security | Company Website",
            year: "2019",
            headerImage: "https://works.ibrahimsari.com.tr/iscd/header.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description:
                "Official website of my corporate customer. 2 languages support. Responsive and mobile friendly. Used WordPress and premium themes. Still active.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/iscd/ss1.jpg",
                "https://works.ibrahimsari.com.tr/iscd/ss2.jpg",
                "https://works.ibrahimsari.com.tr/iscd/ss3.jpg",
            ],
            currentLink: "https://iscd.com.tr/en",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //iscpartners
            title: "İSC Partners | Company Website",
            year: "2018",
            headerImage: "https://works.ibrahimsari.com.tr/iscpartners/header.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description:
                "Official website of my corporate customer. 2 languages support. Responsive and mobile friendly. Used WordPress and premium themes. Still active.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/iscpartners/ss2.jpg",
                "https://works.ibrahimsari.com.tr/iscpartners/ss3.jpg",
                "https://works.ibrahimsari.com.tr/iscpartners/ss4.jpg",
            ],
            currentLink: "http://iscpartners.org/en",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            // isc tesis - legacy
            title: "İSC Facility Management | Company Website",
            year: "2022",
            headerImage: "https://works.ibrahimsari.com.tr/isctesisyonetim-old/screenshots/1.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description:
                "Official website of my corporate customer. 2 languages support. Responsive and mobile friendly. Used WordPress and premium themes. Not active.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/1.jpg",
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/2.jpg",
                "https://works.ibrahimsari.com.tr/isctesisyonetim/screenshots/3.jpg",
            ],
            // currentLink: "https://isctesisyonetim.com",
            cloneLink: "https://works.ibrahimsari.com.tr/isctesisyonetim-old/html",
            webArchiveLink: "https://web.archive.org/web/20220122153656/https://isctesisyonetim.com/",
        },
        {
            //SAM Güv.
            title: "SAM Security | Company Website",
            year: "2019",
            headerImage: "https://works.ibrahimsari.com.tr/sam-security/header.jpg",
            techs: ["PHP", "Pure JavaScript"],
            description:
                "Official website of my corporate customer. Basic single page website. Responsive and mobile friendly. Still active.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/sam-security/site1.jpg",
                "https://works.ibrahimsari.com.tr/sam-security/site2.jpg",
                "https://works.ibrahimsari.com.tr/sam-security/site3.jpg",
            ],
            currentLink: "https://samguvenlik.ist/",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //e-meslek.net
            title: "E-Meslek | Startup With my Teammate",
            year: "2012",
            headerImage: "https://works.ibrahimsari.com.tr/e-meslek/site/header.jpg",
            techs: ["CodeIgniter", "LAMP Stack", "jQuery"],
            description:
                "A community platform and forum to gather members of all kind of professions in Turkey. Developed both public and admin interfaces with my teammate.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/e-meslek/site/site1.jpg",
                "https://works.ibrahimsari.com.tr/e-meslek/site/site2.jpg",
                "https://works.ibrahimsari.com.tr/e-meslek/site/site10.jpg",
                "https://works.ibrahimsari.com.tr/e-meslek/site/site13.jpg",
                "https://works.ibrahimsari.com.tr/e-meslek/site/site5.jpg",
                "https://works.ibrahimsari.com.tr/e-meslek/admin/admin1.jpg",
                "https://works.ibrahimsari.com.tr/e-meslek/admin/admin3.jpg",
                "https://works.ibrahimsari.com.tr/e-meslek/admin/admin4.jpg",
                "https://works.ibrahimsari.com.tr/e-meslek/admin/admin5.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.ibrahimsari.com.tr/e-meslek/html_copy/",
            //webArchiveLink: "",
        },
        {
            //EvPAK
            title: "Evpak | Company Website",
            year: "2016",
            headerImage: "https://works.ibrahimsari.com.tr/evpak/header.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description: "Official website of a company. Used WordPress, as meets customer requirements. Still active.",
            screenShots: ["https://works.ibrahimsari.com.tr/evpak/ss1.jpg", "https://works.ibrahimsari.com.tr/evpak/ss2.jpg"],
            currentLink: "https://evpaktemizlik.com",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //akinsecurity.com
            title: "Akın Security | Company Website",
            year: "2011",
            headerImage: "https://works.ibrahimsari.com.tr/akin-security/site/header.jpg",
            techs: ["PHP", "jQuery", "MySQL"],
            description:
                "Official website of a security company. " +
                "Built both public interface and admin panel to edit content of website. However, it is not active anymore. ",
            screenShots: [
                "https://works.ibrahimsari.com.tr/akin-security/site/site1.jpg",
                "https://works.ibrahimsari.com.tr/akin-security/site/site2.jpg",
                "https://works.ibrahimsari.com.tr/akin-security/site/site4.jpg",
                "https://works.ibrahimsari.com.tr/akin-security/admin/admin1.jpg",
                "https://works.ibrahimsari.com.tr/akin-security/admin/admin3.jpg",
                "https://works.ibrahimsari.com.tr/akin-security/admin/admin4.jpg",
                "https://works.ibrahimsari.com.tr/akin-security/admin/admin5.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.ibrahimsari.com.tr/akin-security/html_copy",
            webArchiveLink: "https://web.archive.org/web/20110203095801/http://www.akinsecurity.com/",
        },
        {
            //wteturkiye.org
            title: "WTEO Turkey | Sports Organization",
            year: "2010",
            headerImage: "https://works.ibrahimsari.com.tr/wteo/site/header.jpg",
            techs: ["PHP", "jQuery", "MySQL"],
            description:
                "Official website of a sports organization in Turkey. " +
                "It has common template/layout for HeadQuarter, and supports sub-schools in separate provinces to publish " +
                "their content using the corporate layout/template of the organization. Also, all trainers/school-admins " +
                "may login and may add/edit content which they have permission to do. " +
                "Website is not active anymore.",
            screenShots: [
                "https://works.ibrahimsari.com.tr/wteo/site/site1.jpg",
                "https://works.ibrahimsari.com.tr/wteo/site/site2.jpg",
                "https://works.ibrahimsari.com.tr/wteo/site/site3.jpg",
                "https://works.ibrahimsari.com.tr/wteo/admin/admin1.jpg",
                "https://works.ibrahimsari.com.tr/wteo/admin/admin2.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.ibrahimsari.com.tr/wteo/html_copy/",
            webArchiveLink: "https://web.archive.org/web/20110820035851/http://www.wteoturkiye.org/",
        },
        {
            //awte.org
            title: "AWTE | Sports Organization",
            year: "2010",
            headerImage: "https://works.ibrahimsari.com.tr/awte/site/header.jpg",
            techs: ["PHP", "jQuery", "MySQL"],
            description:
                "Personal website of a lead trainer of sport organization. " +
                "Built both public interface and admin panel, so customer can edit content of his website. " +
                "2 language support. ",
            screenShots: [
                "https://works.ibrahimsari.com.tr/awte/site/site1.jpg",
                "https://works.ibrahimsari.com.tr/awte/site/site2.jpg",
                "https://works.ibrahimsari.com.tr/awte/site/site4.jpg",
                "https://works.ibrahimsari.com.tr/awte/admin/admin1.jpg",
                "https://works.ibrahimsari.com.tr/awte/admin/admin2.jpg",
                "https://works.ibrahimsari.com.tr/awte/admin/admin3.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.ibrahimsari.com.tr/awte/html_copy/index.php-1.html?pid=16&lang=en",
            webArchiveLink: "https://web.archive.org/web/20111015100629/http://www.awte.org/index.php?pid=16&lang=en",
        },
        // {
        //     //prime min. dep.
        //     title: "Official Website",
        //     year: "2011",
        //     headerImage: "https://works.ibrahimsari.com.tr/prime-protection/header.jpg",
        //     techs: ["PHP", "jQuery", "MySQL"],
        //     description: "Official website of a public institute. It is not active anymore. ",
        //     screenShots: ["https://works.ibrahimsari.com.tr/prime-protection/design.jpg"],
        //     //currentLink: "",
        //     cloneLink: "https://works.ibrahimsari.com.tr/prime-protection/",
        //     //webArchiveLink: "",
        // },
        // {
        //     //University Website
        //     title: "University of Pol. Academy | Official Website",
        //     year: "2009 - 2011",
        //     headerImage: "https://works.ibrahimsari.com.tr/pa-university/header.jpg",
        //     techs: ["PHP", "jQuery", "MySQL"],
        //     description:
        //         "As a junior member of Computer Programmers Team in my university life, " +
        //         "I contributed to development process of official website of the university. " +
        //         "Learnt many coding skills at that period. Website is active but not using the code I contributed",
        //     screenShots: [
        //         "https://works.ibrahimsari.com.tr/pa-university/ss1.jpg",
        //         "https://works.ibrahimsari.com.tr/pa-university/ss2.jpg",
        //         "https://works.ibrahimsari.com.tr/pa-university/ss3.jpg",
        //     ],
        //     //currentLink: "",
        //     //cloneLink: "",
        //     webArchiveLink: "https://web.archive.org/web/20100629123218/http://www.pa.edu.tr/",
        // },
    ];

    return (
        <Layout>
            <Head>
                <title>My Works | İ. S.</title>
            </Head>
            <div className={styles.worksWrapper}>
                <h1>Some of My Works</h1>
                <div className={stylesCard.container}>
                    {myWorks &&
                        myWorks.length > 0 &&
                        myWorks.map((work, i) => (
                            <motion.div
                                key={i}
                                className={stylesCard.card}
                                initial={{scale: 0.7, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{delay: i / 10}}
                            >
                                <div className={stylesCard.cardHeader}>
                                    <img src={work.headerImage} alt={work.title} />
                                    <span className={`${stylesCard.yearTag} ${stylesCard.tag} ${stylesCard.tagBlue}`}>
                                        {work.year}
                                    </span>
                                </div>
                                <div className={stylesCard.cardBody}>
                                    <div className={stylesCard.tagWrapper}>
                                        {work.techs &&
                                            work.techs.map((tech, iForTech) => {
                                                const mod = iForTech % 3;
                                                return (
                                                    <span
                                                        key={iForTech}
                                                        className={`${stylesCard.tag} ${
                                                            mod === 0
                                                                ? stylesCard.tagTeal
                                                                : mod === 1
                                                                ? stylesCard.tagPink
                                                                : stylesCard.tagPurple
                                                        }`}
                                                    >
                                                        {tech}
                                                    </span>
                                                );
                                            })}
                                    </div>
                                    <h4>{work.title}</h4>
                                    <p>{work.description}</p>
                                    <div className={stylesCard.buttons}>
                                        {work.screenShots && work.screenShots.length > 0 && (
                                            <LightBox images={work.screenShots} />
                                        )}
                                        {work.currentLink && (
                                            <a
                                                href={work.currentLink}
                                                rel="noreferrer"
                                                target="_blank"
                                                className={`btn ${stylesCard.btnGreen}`}
                                            >
                                                <i className="fas fa-link"></i> View
                                            </a>
                                        )}
                                        {work.cloneLink && (
                                            <a
                                                href={work.cloneLink}
                                                rel="noreferrer"
                                                target="_blank"
                                                className={`btn ${stylesCard.btnLightBlue}`}
                                            >
                                                <i className="far fa-clone"></i> View Clone
                                            </a>
                                        )}
                                        {work.webArchiveLink && (
                                            <a
                                                href={work.webArchiveLink}
                                                rel="noreferrer"
                                                target="_blank"
                                                className={`btn ${stylesCard.btnGray}`}
                                            >
                                                <i className="fas fa-history"></i> Web Archive
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </Layout>
    );
};

const LightBox = ({images}: {images: string[]}) => {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <a className="btn" onClick={() => setToggler(!toggler)}>
                <i className="fas fa-camera-retro"></i> ScreenShots
            </a>
            <FsLightbox toggler={toggler} sources={images} type="image" />
        </>
    );
};

export default Works;
