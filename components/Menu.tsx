import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicThemeChangerButton = dynamic(() => import("./ThemeChangerButton"), {ssr: false});

const Menu = () => (
    <nav className="nav">
        <ul className="menu">
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Me</a>
                </Link>
            </li>
            <li>
                <Link href="/works">
                    <a>My Works</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <DynamicThemeChangerButton />
            </li>
        </ul>
    </nav>
);

export default Menu;
