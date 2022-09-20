import React from "react";
import HeroSection from "./HeroSection";

function AppHeader() {
    return(
        <>
            <div className="aali_tm_header">
                <div className="container">
                    <div className="inner">
                        <div className="logo">
                            <a className="light" href="#"><img src="images/logo/logo.png" alt="" /></a>
                            <a className="dark" href="#"><img src="images/logo/dark.png" alt="" /></a>
                        </div>
                        <div className="menu">
                            <ul className="anchor_nav">
                                <li className="current"><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#service">Service</a></li>
                                <li><a href="#testimonial">Testimonial</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
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