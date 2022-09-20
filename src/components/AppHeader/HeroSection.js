import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
    return(
        <div className="aali_tm_section" id="home">
            <div className="aali_tm_hero">
                <div className="container">
                    <div className="hero_inner">
                        <div className="content">
                            <span className="hello">Hello, I'm</span>
                            <h3 className="name">Aali</h3>
                            <div className="job">
                                <span className="cd-headline rotate-1">
                                    <span className="blc">Creative</span>
                                    <span className="cd-words-wrapper">
                                    <b className="is-visible">Designer</b>
                                    <b>Developer</b>
                                    <b>Freelancer</b>
                                    </span>
                                </span>
                            </div>
                            <div className="hero_buttons">
                                <div className="aali_tm_button">
                                    <Link className="anchor" to="#contact"><span>Say Hello <img className="svg" src="images/svg/message.svg" alt="" /></span></Link>
                                </div>
                                <div className="simple_button">
                                    <Link className="anchor" to="#about">About Me</Link>
                                </div>
                            </div>
                            <div className="aali_tm_down">
                                <div className="down-icon white top_120">
                                    <Link className="anchor" to="#about">
                                        <svg width="26px" height="100%" viewBox="0 0 247 390"  style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "1.5"}}>
                                            <path id="wheel" d="M123.359,79.775l0,72.843" style={{fill: "none", stroke: "#fff", strokeWidth: "20px"}}/>
                                            <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{fill: "none", stroke: "#fff", strokeWidth: "20px"}}/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="avatar parallax" data-relative-input="true">
                            <div className="main">
                                <img src="images/hero/1.png" alt="" className="layer" data-depth="0.1" />
                            </div>
                            <span className="one"><span className="in layer" data-depth="0.14"></span></span>
                            <span className="two"><span className="in layer" data-depth="0.18"></span></span>
                            <span className="three"><span className="in layer" data-depth="0.22"></span></span>
                            <span className="four"><span className="in layer" data-depth="0.26"></span></span>
                            <span className="five"><span className="in layer" data-depth="0.3"></span></span>
                            <h3 className="stroke_text"><span className="">Aali</span></h3>
                        </div>
                    </div>
                </div>
                <div className="socials">
                    <ul>
                        <li><Link to="#"><img className="svg" src="images/svg/social/facebook.svg" alt="" /></Link></li>
                        <li><Link to="#"><img className="svg" src="images/svg/social/twitter.svg" alt="" /></Link></li>
                        <li><Link to="#"><img className="svg" src="images/svg/social/instagram.svg" alt="" /></Link></li>
                    </ul>
                </div>
                <div className="hero_mail">
                    <Link className="line_anim" to="#">hello@aali.com</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;