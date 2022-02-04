import Link from "next/link";

const Menu = () => (
    <nav>
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
        </ul>
    </nav>
);

export default Menu;
