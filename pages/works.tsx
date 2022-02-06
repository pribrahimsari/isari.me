import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Works.module.css";
import stylesCard from "../styles/Workscard.module.css";
import Head from "next/head";

const Works: NextPage = () => {
    const myWorks = [
        {
            title: "",
            year: "",
            headerImage: "",
            techs: ["", ""],
            description: "",
            screenShots: ["", ""],
            currentLink: "",
            webArchiveLink: "",
            mobileLink: "",
        },
    ];

    return (
        <Layout>
            <Head>
                <title>My Works | İbrahim SARI</title>
            </Head>
            <div className={styles.worksWrapper}>
                <h1>Works</h1>
                <div className={stylesCard.container}>
                    <div className={stylesCard.card}>
                        <div className={stylesCard.cardHeader}>
                            <img src="https://via.placeholder.com/1280x720" alt="rover" />
                            <span className={`${stylesCard.yearTag} ${stylesCard.tag} ${stylesCard.tagBlue}`}>
                                2010
                            </span>
                        </div>
                        <div className={stylesCard.cardBody}>
                            <div className={stylesCard.tagWrapper}>
                                <span className={`${stylesCard.tag} ${stylesCard.tagTeal}`}>PHP</span>
                                <span className={`${stylesCard.tag} ${stylesCard.tagPink}`}>PHP</span>
                                <span className={`${stylesCard.tag} ${stylesCard.tagPurple}`}>PHP</span>
                            </div>
                            <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                            <p>An exploration into the truck's polarising design</p>
                            <div className={stylesCard.buttons}>
                                <button className="btn">View Clone</button>
                                <button className="btn">Web Archive</button>
                                <button className="btn">Mobile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*
            todo:
            Works bölümü filter şeklinde olmalı  ALL | Web | PHP (?) | Design
                o	Old Projects  Ayrı aşağı bölümde olabilir
                o	Açılan Modal içerisinde photo-slider olabilir ss'ler için
                o	WebArchive linki konabilir
                o	Senesi (yıl) mutlaka konmalı
                o   Techs used konmalı
                o	Bence açıklama konabilir.
                o   Details butonu ile bir overlay açılabilir. Detayları
                    ÖR: https://jacobherper.com/case-studies/immovato-innovating-the-real-estate-sector
                    ÖR: https://laurabeatris.com/
            */}
        </Layout>
    );
};

export default Works;
