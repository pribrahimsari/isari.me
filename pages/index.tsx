import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import * as THREE from "three";
//@ts-ignore //todo: vanta type definitions????
import CLOUDS from "vanta/dist/vanta.clouds.min";

const Home: NextPage = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUDS({
                    el: vantaRef.current,
                    THREE,
                    /*
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00
                    * */
                }),
            );
        }
        return () => {
            //@ts-ignore
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <Layout>
            <div className={styles.vantaBackground} ref={vantaRef}></div>
            <section>
                <h1>Hi, I'm İbrahim.</h1>
                <h2>Web Developer based on Istanbul, TURKEY</h2>
                <img src="https://via.placeholder.com/250x370" alt="my picture" />
                <Link href="/about">
                    <a>
                        <button>More About Me</button>
                    </a>
                </Link>
                <button>Download my CV as PDF</button>
                {/*todo: section animated background */}
            </section>
        </Layout>
    );
};

export default Home;
