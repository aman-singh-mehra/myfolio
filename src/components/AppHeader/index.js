import React from "react";
import { Link } from "react-router-dom";

import HeroSection from "./HeroSection";

function AppHeader() {
    return(
        <>
            <div className="aali_tm_header">
                <div className="container">
                    <div className="inner">
                        <div className="logo">
                            <Link className="light" to="#"><img src="images/logo/logo.png" alt="" /></Link>
                            <Link className="dark" to="#"><img src="images/logo/dark.png" alt="" /></Link>
                        </div>
                        <div className="menu">
                            <ul className="anchor_nav">
                                <li className="current"><Link to="#home">Home</Link></li>
                                <li><Link to="#about">About</Link></li>
                                <li><Link to="#portfolio">Portfolio</Link></li>
                                <li><Link to="#service">Service</Link></li>
                                <li><Link to="#testimonial">Testimonial</Link></li>
                                <li><Link to="#blog">Blog</Link></li>
                                <li><Link to="#contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <HeroSection />
        </>
    )
}

export default AppHeader;