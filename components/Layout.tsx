import Header from "./Header";
import Footer from "./Footer";
import {ReactChild, ReactFragment, ReactPortal} from "react";
import Head from "next/head";

const Layout = (props: {children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined}) => {
    return (
        <div className="site-wrapper">
            <Head>
                <title>Portfolio Page | İbrahim SARI</title>
                <meta name="description" content="Generated by create next app, modified by me" />
                <meta name="theme-color" content="#2F72BC" />
                <link rel="icon" href="/logo_is.svg" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            </Head>

            <Header />

            <main className="content-wrapper">{props.children}</main>

            <Footer />
        </div>
    );
};

export default Layout;
