import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Works.module.css";
import Head from "next/head";

const Works: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>My Works | İbrahim SARI</title>
            </Head>
            <h1>Works</h1>
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
