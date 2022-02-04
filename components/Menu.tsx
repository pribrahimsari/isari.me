import Link from "next/link";

const Menu = () => (
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
);

export default Menu;
