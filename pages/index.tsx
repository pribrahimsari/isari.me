import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import * as THREE from "three";
//@ts-ignore //vanta type definitions not available
import CLOUDS from "vanta/dist/vanta.clouds.min";
import {useTheme} from "next-themes";

const Home: NextPage = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        if (!vantaEffect) {
            if (theme === "dark") {
                setVantaEffect(
                    CLOUDS({
                        el: vantaRef.current,
                        THREE,
                        skyColor: 0x4202d,
                        cloudColor: 0x7d7d7d,
                        sunColor: 0x8c8c8c,
                    }),
                );
            } else {
                setVantaEffect(
                    CLOUDS({
                        el: vantaRef.current,
                        THREE,
                    }),
                );
            }
        }
        return () => {
            //@ts-ignore
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    useEffect(() => {
        if (vantaEffect) {
            if (theme === "dark") {
                //@ts-ignore
                vantaEffect.setOptions({
                    skyColor: 0x4202d,
                    cloudColor: 0x7d7d7d,
                    sunColor: 0x8c8c8c,
                });
            } else {
                //@ts-ignore
                vantaEffect.setOptions({
                    skyColor: 0x68b8d7,
                    cloudColor: 0xadc1de,
                    sunColor: 0xff9919,
                });
            }
        }
    }, [theme]);

    return (
        <Layout>
            <div className={styles.vantaBackground} ref={vantaRef}></div>
            <section className={styles.heroSection}>
                <div className={styles.heroTexts}>
                    <h1>Hi, I'm İbrahim.</h1>
                    <h2>Web Developer based on Istanbul, TURKEY</h2>
                    <div>
                        <Link href="/about">
                            <a target="_self">
                                <button className="btn">
                                    <i className="fas fa-address-card"></i> &nbsp; More About Me
                                </button>
                            </a>
                        </Link>

                        <Link href="cv-ibrahim-sari-2022.pdf">
                            <a target="_blank">
                                <button className="btn">
                                    <i className="fa fa-download"></i> &nbsp; Download my CV
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.circularLandscape}>
                    <img src="hero-profile.jpg" width="250px" alt="my picture" />
                </div>
            </section>
        </Layout>
    );
};

export default Home;
