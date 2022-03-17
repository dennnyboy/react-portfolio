import React from "react";
import "./Footer.css";
import logo from '../../components/images/github.png'
import logo1 from '../../components/images/linkedin.png'
import logo2 from '../../components/images/twitter.png'

function Footer() {
return (
<section className="footer">
    <section className="footer-content1">
        <a href="https://github.com/dennnyboy" rel="noreferrer" target="_blank">
            <img src={logo} alt='LOGO'></img>
        </a>
    </section>
    <section className="footer-content2">
        <a href="https://www.linkedin.com/in/dennis-khaperskov-1807441ab" rel="noreferrer" target="_blank">
            <img src={logo1} alt='LOGO'></img>
        </a>
    </section>
    <section className="footer-content3">
        <a href="https://twitter.com/dennnyboyy" rel="noreferrer" target="_blank">
            <img src={logo2} alt='LOGO'></img>
        </a>
    </section>
</section>
)
}

export default Footer;