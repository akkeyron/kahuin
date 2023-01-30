import React from "react";
import "./Footer.css"
import { GrMail, GrLinkedin, GrGithub } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">LOQMAN & MIRA</a>

            <div className="footer__text">
                <h5>Kad Kahwin Online ini dibuat oleh pasangan pengantin sendiri</h5>

            </div>
            <div className="footer__copyright">
                <small>&copy; Loqman&Mira, All rights reserved</small>
            </div>

        </footer>
    )
}

export default Footer