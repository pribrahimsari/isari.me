import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="logo">
            <Link href="/">
                <a>
                    <Image src="/logo_is.svg" alt="logo is" width={120} height={120} />
                </a>
            </Link>
        </div>
    );
};

export default Logo;
