import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import {useEffect} from "react";
import {motion} from "framer-motion";

function MyApp({Component, pageProps, router}: AppProps) {
    useEffect(() => {
        const threeScript = document.createElement("script");
        threeScript.setAttribute("id", "threeScript");
        threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
        document.getElementsByTagName("head")[0].appendChild(threeScript);
        return () => {
            if (threeScript) {
                threeScript.remove();
            }
        };
    }, []);
    return (
        <ThemeProvider defaultTheme="light">
            <motion.div key={router.route} exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
                <Component {...pageProps} />
            </motion.div>
        </ThemeProvider>
    );
}

export default MyApp;
