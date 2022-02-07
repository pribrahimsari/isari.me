import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Works.module.css";
import stylesCard from "../styles/Workscard.module.css";
import Head from "next/head";
import {useState} from "react";
//@ts-ignore //todo: type definition
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Works: NextPage = () => {
    const myWorks = [
        {
            //CRM
            title: "CRM (Customer Relationship Management) | Custom Software",
            year: "2018 - 2022",
            headerImage: "https://works.isari.me/crm/header.jpg",
            techs: ["Laravel", "PHP, MySQL", "jQuery, Mobile"],
            description:
                "Completely developed by me for my customer's spesific requirements. DB design, backend and frontend were developed by me. " +
                "Some modules such as 'Activities' have mobile support also. " +
                "Still in use, but customer wants to remain anonymous.",
            screenShots: [
                "https://works.isari.me/crm/ss2.jpg",
                "https://works.isari.me/crm/ss3.jpg",
                "https://works.isari.me/crm/ss7.jpg",
                "https://works.isari.me/crm/mobile1.jpg",
                "https://works.isari.me/crm/mobile2.jpg",
                "https://works.isari.me/crm/mobile3.jpg",
                "https://works.isari.me/crm/mobile4.jpg",
                "https://works.isari.me/crm/ss4.jpg",
                "https://works.isari.me/crm/ss5.jpg",
                "https://works.isari.me/crm/ss6.jpg",
            ],
            //currentLink: "",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //Wedding Invitation
            title: "Wedding Invitation | Personal Project",
            year: "2013",
            headerImage: "https://works.isari.me/wedding-invite/website/header.jpg",
            techs: ["CodeIgniter", "PHP", "jQuery", "MySQL"],
            description:
                "I got married in 2013. In invitation card of our ceremony, we used QR codes embedded with the link of this project. " +
                "All invitees shared their regards using contact form and we published them at cine-vision to all guests during the ceremony. " +
                "Beside this, invitees could find location address by using this website. " +
                "I used parallax effects on this project. Mobile version is also available. ",
            screenShots: [
                "https://works.isari.me/wedding-invite/website/site1.jpg",
                "https://works.isari.me/wedding-invite/website/site2.jpg",
                "https://works.isari.me/wedding-invite/website/site6.jpg",
                "https://works.isari.me/wedding-invite/website/site7.jpg",
                "https://works.isari.me/wedding-invite/website/site8.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.isari.me/wedding-invite/html_copy/",
            //webArchiveLink: "",
        },
        {
            //Wedding Invitation MOBILE
            title: "Mobile Wedding Invitation | Personal Project",
            year: "2013",
            headerImage: "https://works.isari.me/wedding-invite-mobile/header.jpg",
            techs: ["CodeIgniter", "jQuery Mobile", "MySQL"],
            description:
                "Mobile version of my digital wedding invitation. Auto recognize user-agent and if user is browsing via his/her phone or tablet, " +
                "auto-redirect user to this view. " +
                "Used jQuery Mobile to show it like a mobile app. " +
                "All interactions of desktop version of invitation are available at mobile version. ",
            screenShots: [
                "https://works.isari.me/wedding-invite-mobile/ss1.jpg",
                "https://works.isari.me/wedding-invite-mobile/ss2.jpg",
                "https://works.isari.me/wedding-invite-mobile/ss3.jpg",
                "https://works.isari.me/wedding-invite-mobile/ss4.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.isari.me/wedding-invite-mobile/html_clone/",
            //webArchiveLink: "",
        },
        {
            //akinakbar.com
            title: "Akın Akbar | Personal Website",
            year: "2013",
            headerImage: "https://works.isari.me/akin-akbar/website/header.jpg",
            techs: ["CodeIgniter", "PHP", "jQuery", "MySQL"],
            description:
                "Personal website of a break-out singer. Presentation of his biography and new songs. " +
                "Built both public interface and admin panel to edit content of website. However, it is not active anymore. ",
            screenShots: [
                "https://works.isari.me/akin-akbar/website/site1.jpg",
                "https://works.isari.me/akin-akbar/website/site2.jpg",
                "https://works.isari.me/akin-akbar/website/site4.jpg",
                "https://works.isari.me/akin-akbar/admin_panel/login.jpg",
                "https://works.isari.me/akin-akbar/admin_panel/admin1.jpg",
                "https://works.isari.me/akin-akbar/admin_panel/admin2.jpg",
                "https://works.isari.me/akin-akbar/admin_panel/admin4.jpg",
                "https://works.isari.me/akin-akbar/admin_panel/admin6.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.isari.me/akin-akbar/html_copy/",
            webArchiveLink: "https://web.archive.org/web/20130302130829/http://www.akinakbar.com/",
        },
        {
            //iscd
            title: "İSC Security | Company Website",
            year: "2019",
            headerImage: "https://works.isari.me/iscd/header.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description:
                "Official website of my corporate customer. 2 language support. Responsive and mobile friendly. Used WordPress and premium themes. Still active.",
            screenShots: [
                "https://works.isari.me/iscd/ss1.jpg",
                "https://works.isari.me/iscd/ss2.jpg",
                "https://works.isari.me/iscd/ss3.jpg",
            ],
            currentLink: "https://iscd.com.tr/en",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //iscpartners
            title: "İSC Partners | Company Website",
            year: "2018",
            headerImage: "https://works.isari.me/iscpartners/header.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description:
                "Official website of my corporate customer. 2 language support. Responsive and mobile friendly. Used WordPress and premium themes. Still active.",
            screenShots: [
                "https://works.isari.me/iscpartners/ss2.jpg",
                "https://works.isari.me/iscpartners/ss3.jpg",
                "https://works.isari.me/iscpartners/ss4.jpg",
            ],
            currentLink: "http://iscpartners.org/en",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //SAM Güv.
            title: "SAM Security | Company Website",
            year: "2019",
            headerImage: "https://works.isari.me/sam-security/header.jpg",
            techs: ["PHP", "Pure JavaScript"],
            description:
                "Official website of my corporate customer. Basic single page website. Responsive and mobile friendly. Still active.",
            screenShots: [
                "https://works.isari.me/sam-security/site1.jpg",
                "https://works.isari.me/sam-security/site2.jpg",
                "https://works.isari.me/sam-security/site3.jpg",
            ],
            currentLink: "https://samguvenlik.ist/",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //e-meslek.net
            title: "E-Meslek | Startup With my Teammate",
            year: "2012",
            headerImage: "https://works.isari.me/e-meslek/site/header.jpg",
            techs: ["CodeIgniter", "PHP", "MySQL", "jQuery"],
            description:
                "A community platform and forum to gather members of all kind of professions in Turkey. " +
                "Both public and admin interfaces were developed by me and my teammate.",
            screenShots: [
                "https://works.isari.me/e-meslek/site/site1.jpg",
                "https://works.isari.me/e-meslek/site/site2.jpg",
                "https://works.isari.me/e-meslek/site/site10.jpg",
                "https://works.isari.me/e-meslek/site/site13.jpg",
                "https://works.isari.me/e-meslek/site/site5.jpg",
                "https://works.isari.me/e-meslek/admin/admin1.jpg",
                "https://works.isari.me/e-meslek/admin/admin3.jpg",
                "https://works.isari.me/e-meslek/admin/admin4.jpg",
                "https://works.isari.me/e-meslek/admin/admin5.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.isari.me/e-meslek/html_copy/",
            //webArchiveLink: "",
        },
        {
            //EvPAK
            title: "Evpak | Company Website",
            year: "2016",
            headerImage: "https://works.isari.me/evpak/header.jpg",
            techs: ["WordPress", "PHP", "MySQL"],
            description: "Official website of a company. Used WordPress, as meets customer requirements. Still active.",
            screenShots: ["https://works.isari.me/evpak/ss1.jpg", "https://works.isari.me/evpak/ss2.jpg"],
            currentLink: "https://evpaktemizlik.com",
            //cloneLink: "",
            //webArchiveLink: "",
        },
        {
            //akinsecurity.com
            title: "Akın Security | Company Website",
            year: "2011",
            headerImage: "https://works.isari.me/akin-security/site/header.jpg",
            techs: ["PHP", "jQuery", "MySQL"],
            description:
                "Official website of a security company. " +
                "Built both public interface and admin panel to edit content of website. However, it is not active anymore. ",
            screenShots: [
                "https://works.isari.me/akin-security/site/site1.jpg",
                "https://works.isari.me/akin-security/site/site2.jpg",
                "https://works.isari.me/akin-security/site/site4.jpg",
                "https://works.isari.me/akin-security/admin/admin1.jpg",
                "https://works.isari.me/akin-security/admin/admin3.jpg",
                "https://works.isari.me/akin-security/admin/admin4.jpg",
                "https://works.isari.me/akin-security/admin/admin5.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.isari.me/akin-security/html_copy",
            webArchiveLink: "https://web.archive.org/web/20110203095801/http://www.akinsecurity.com/",
        },
        {
            //wteturkiye.org
            title: "Wteo Turkey | Sport Organization",
            year: "2010",
            headerImage: "https://works.isari.me/wteo/site/header.jpg",
            techs: ["PHP", "jQuery", "MySQL"],
            description:
                "Official website of a sport organization in Turkey. " +
                "It has common template/layout for HQ, and supports sub-schools to publish their content using the corporate layout/template of the organization. " +
                "Also, all trainers may login and may add/edit content that they have permission. " +
                "Website is not active anymore. ",
            screenShots: [
                "https://works.isari.me/wteo/site/site1.jpg",
                "https://works.isari.me/wteo/site/site2.jpg",
                "https://works.isari.me/wteo/site/site3.jpg",
                "https://works.isari.me/wteo/admin/admin1.jpg",
                "https://works.isari.me/wteo/admin/admin2.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.isari.me/wteo/html_copy/",
            webArchiveLink: "https://web.archive.org/web/20110820035851/http://www.wteoturkiye.org/",
        },
        {
            //awte.org
            title: "AWTE | Sports Organization",
            year: "2010",
            headerImage: "https://works.isari.me/awte/site/header.jpg",
            techs: ["PHP", "jQuery", "MySQL"],
            description:
                "Personal website of a lead trainer of sport organization. " +
                "Built both public interface and admin panel, so customer can edit content of his website. " +
                "2 language support. ",
            screenShots: [
                "https://works.isari.me/awte/site/site1.jpg",
                "https://works.isari.me/awte/site/site2.jpg",
                "https://works.isari.me/awte/site/site4.jpg",
                "https://works.isari.me/awte/admin/admin1.jpg",
                "https://works.isari.me/awte/admin/admin2.jpg",
                "https://works.isari.me/awte/admin/admin3.jpg",
            ],
            //currentLink: "",
            cloneLink: "https://works.isari.me/awte/html_copy/index.php-1.html?pid=16&lang=en",
            webArchiveLink: "https://web.archive.org/web/20111015100629/http://www.awte.org/index.php?pid=16&lang=en",
        },
        {
            //prime min. dep.
            title: "Official Website",
            year: "2011",
            headerImage: "https://works.isari.me/prime-protection/header.jpg",
            techs: ["PHP", "jQuery", "MySQL"],
            description: "Official website of a public institute. It is not active anymore. ",
            screenShots: ["https://works.isari.me/prime-protection/design.jpg"],
            //currentLink: "",
            cloneLink: "https://works.isari.me/prime-protection/",
            //webArchiveLink: "",
        },
        {
            //University Website
            title: "University of Pol. Academy | Official Website",
            year: "2009 - 2011",
            headerImage: "https://works.isari.me/pa-university/header.jpg",
            techs: ["PHP", "jQuery", "MySQL"],
            description:
                "As a junior member of Computer Programmers Team in my university life, " +
                "I contributed to development process of official website of the university. " +
                "Learnt many coding skills at that period. " +
                "Website is active but not using this design anymore. ",
            screenShots: [
                "https://works.isari.me/pa-university/ss1.jpg",
                "https://works.isari.me/pa-university/ss2.jpg",
                "https://works.isari.me/pa-university/ss3.jpg",
            ],
            //currentLink: "",
            //cloneLink: "",
            webArchiveLink: "https://web.archive.org/web/20100629123218/http://www.pa.edu.tr/",
        },
    ];

    return (
        <Layout>
            <Head>
                <title>My Works | İbrahim SARI</title>
            </Head>
            <div className={styles.worksWrapper}>
                <h1>Some of My Works</h1>
                <div className={stylesCard.container}>
                    {myWorks &&
                        myWorks.length > 0 &&
                        myWorks.map((work, i) => (
                            <div key={i} className={stylesCard.card}>
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
                                            <Link href={work.currentLink} passHref>
                                                <a target="_blank" className={`btn ${stylesCard.btnGreen}`}>
                                                    <i className="fas fa-link"></i> View
                                                </a>
                                            </Link>
                                        )}
                                        {work.cloneLink && (
                                            <Link href={work.cloneLink} passHref>
                                                <a target="_blank" className={`btn ${stylesCard.btnLightBlue}`}>
                                                    <i className="far fa-clone"></i> View Clone
                                                </a>
                                            </Link>
                                        )}
                                        {work.webArchiveLink && (
                                            <Link href={work.webArchiveLink} passHref>
                                                <a target="_blank" className={`btn ${stylesCard.btnGray}`}>
                                                    <i className="fas fa-history"></i> Web Archive
                                                </a>
                                            </Link>
                                        )}
                                        {/*
                                        todo:
                                        - header images
                                        */}
                                    </div>
                                </div>
                            </div>
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
