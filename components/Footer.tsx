const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="copyright">
                © {new Date().getFullYear()} |&nbsp;
                <a href="https://www.linkedin.com/in/ibrahim--sari/" target="_blank" rel="noreferrer">
                    İbrahim SARI
                </a>
            </div>
            <div className="social-links">
                <a href="https://github.com/pribrahimsari" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ibrahim--sari/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
