import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div className="site-wrapper">
            <Header />
            <div className="content-wrapper">{props.children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
