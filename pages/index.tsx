import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import * as THREE from "three";
//@ts-ignore //vanta type definitions not available
import CLOUDS from "vanta/dist/vanta.clouds.min";
import {useTheme} from "next-themes";
import {RoughNotation} from "react-rough-notation";
import {motion} from "framer-motion";

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
                    <motion.h1 initial={{opacity: 0, x: -80}} animate={{opacity: 1, x: 0}} transition={{delay: 0.3}}>
                        Hi, I'm &nbsp;
                        <RoughNotation type="highlight" color="#c89903" show animationDelay={1000}>
                            İbrahim
                        </RoughNotation>
                        .
                    </motion.h1>
                    <motion.h2 initial={{opacity: 0, x: -80}} animate={{opacity: 1, x: 0}} transition={{delay: 0.5}}>
                        <RoughNotation type="underline" color="#b71c1c" show animationDelay={2000}>
                            Frontend Developer
                        </RoughNotation>
                    </motion.h2>
                    <motion.div initial={{opacity: 0, y: 80}} animate={{opacity: 1, y: 0}} transition={{delay: 0.8}}>
                        <Link href="/about">
                            <a target="_self">
                                <button className="btn">
                                    <i className="fas fa-address-card"></i> &nbsp; More About Me
                                </button>
                            </a>
                        </Link>

                        <Link href="/ibrahim-sari-resume-20230801.pdf">
                            <a target="_blank">
                                <button className="btn">
                                    <i className="fa fa-download"></i> &nbsp; Download my CV
                                </button>
                            </a>
                        </Link>
                    </motion.div>
                </div>
                <div className={styles.circularLandscape}>
                    <motion.img
                        src="hero-profile-2.jpg"
                        width="300px"
                        alt="my picture"
                        initial={{opacity: 0, x: 80}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.3}}
                    />
                </div>
            </section>
        </Layout>
    );
};

export default Home;
