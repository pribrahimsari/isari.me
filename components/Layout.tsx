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
                <link rel="icon" href="/favicon.ico" />
                {/* todo: favicon issue */}
            </Head>

            <Header />

            <main className="content-wrapper">{props.children}</main>

            <Footer />
        </div>
    );
};

export default Layout;
