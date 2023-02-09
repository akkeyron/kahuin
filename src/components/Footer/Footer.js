import React from "react";
import "./Footer.css"
import BACKGROUND from '../../assets/page6/background.PNG'
import OURS from '../../assets/page6/ours.png'

const Footer = () => {
    return (
        <div id="footer">
            <div className='footer-ours'>
                <img src={OURS} alt="" />
            </div>
        </div>
    )
}

export default Footer