import type {NextPage} from "next";
import Layout from "../components/Layout";
import styles from "../styles/Index.module.css";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <Layout>
            <section>
                <h1>Hi, I'm İbrahim.</h1>
                <h2>Web Developer based on Istanbul, TURKEY</h2>
                <img src="https://via.placeholder.com/350x470" alt="my picture" />
                <Link href="/about">
                    <a>
                        <button>More About Me</button>
                    </a>
                </Link>
                <button>Download my CV as PDF</button>
                {/*todo: section animated background */}
            </section>

            <section>
                <h1>Some of my Works</h1>
                <div>
                    Works component(s)
                    {/*todo: CRM, AkinAkbar, Mobile & Web Wedding Invitation */}
                    {/*todo: screenshot, (in-picture) left-right arrows, tech-stack used, my role */}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
