import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {
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
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
