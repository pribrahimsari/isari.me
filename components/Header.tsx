import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <input className="side-menu" type="checkbox" id="side-menu"/>
            <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
            <Menu />
        </header>
    );
};

export default Header;
