import Logo from "./Logo";
import Menu from "./Menu";
import ThemeChangerButton from "./ThemeChangerButton";

const Header = () => {
    return (
        <header className="header-wrapper">
            <Logo />
            <Menu />
            <ThemeChangerButton />
        </header>
    );
};

export default Header;
