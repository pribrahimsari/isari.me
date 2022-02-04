import Header from "./Header";
import Footer from "./Footer";
import {ReactChild, ReactFragment, ReactPortal} from "react";

const Layout = (props: {children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined}) => {
    return (
        <div className="site-wrapper">
            <Header />
            <div className="content-wrapper">{props.children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
