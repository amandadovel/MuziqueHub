import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer mt-auto pt-3">
        <div className="container text-center">
            <div className="d-flex justify-content-around">
                <span className="contributor d-flex flex-column"><i className="fa fa-github-alt fa-2x"></i>Amanda Dovel</span>
                <span className="contributor d-flex flex-column"><i className="fa fa-github-alt fa-2x"></i>Joey Kubalak</span>
                <span className="contributor d-flex flex-column"><i className="fa fa-github-alt fa-2x"></i>Kyle Knox</span>
            </div>
            <div className="py-2">
                <small>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">© 3.0 BY</a></small>
            </div>
        </div>
    </footer>
)

export default Footer;