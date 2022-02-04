const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="copyright">
                © {new Date().getFullYear()}
                <a href="#" target="_blank">
                    İbrahim SARI
                </a>
                {/* todo: redirect linkedin profile */}
            </div>
        </footer>
    );
};

export default Footer;
