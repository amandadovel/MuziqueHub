import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer mt-auto pt-3">
        <div className="container text-center">
            <div className="d-flex justify-content-around">
                <div className="contributor d-flex flex-column">
                    <div>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TreezCode">
                            <i className="fa fa-github-alt fa-2x"></i>
                        </a>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="http://treezcode.github.io">
                            <i className="fa fa-user-circle fa-2x"></i>
                        </a>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joey-kubalak-425032180/">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                    <div className="pt-2">
                        Joey Kubalak
                    </div>
                </div>
                <div className="contributor d-flex flex-column">
                    <div>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://github.com/amandadovel">
                            <i className="fa fa-github-alt fa-2x"></i>
                        </a>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://amandadovel.github.io">
                            <i className="fa fa-user-circle fa-2x"></i>
                        </a>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amanda-dovel-5140b726/">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                    <div className="pt-2">
                        Amanda Dovel
                    </div>
                </div>
                <div className="contributor d-flex flex-column">
                    <div>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://github.com/KyleK86">
                            <i className="fa fa-github-alt fa-2x"></i>
                        </a>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://kylek86.github.io">
                            <i className="fa fa-user-circle fa-2x"></i>
                        </a>
                        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kyle-knox-2369a150/">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                    <div className="pt-2">
                        Kyle Knox
                    </div>
                </div>
            </div>
            <div className="py-2">
                <small>
                    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a>
                     from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                     is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">© 3.0 BY</a>
                </small>
            </div>
        </div>
    </footer>
)

export default Footer;