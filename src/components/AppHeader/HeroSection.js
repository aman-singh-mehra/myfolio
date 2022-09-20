import React from "react";

function HeroSection() {
    return(
        <div class="aali_tm_section" id="home">
            <div class="aali_tm_hero">
                <div class="container">
                    <div class="hero_inner">
                        <div class="content">
                            <span class="hello">Hello, I'm</span>
                            <h3 class="name">Aali</h3>
                            <div class="job">
                                <span class="cd-headline rotate-1">
                                    <span class="blc">Creative</span>
                                    <span class="cd-words-wrapper">
                                    <b class="is-visible">Designer</b>
                                    <b>Developer</b>
                                    <b>Freelancer</b>
                                    </span>
                                </span>
                            </div>
                            <div class="hero_buttons">
                                <div class="aali_tm_button">
                                    <a class="anchor" href="#contact"><span>Say Hello <img class="svg" src="images/svg/message.svg" alt="" /></span></a>
                                </div>
                                <div class="simple_button">
                                    <a class="anchor" href="#about">About Me</a>
                                </div>
                            </div>
                            <div class="aali_tm_down">
                                <div class="down-icon white top_120">
                                    <a class="anchor" href="#about">
                                        <svg width="26px" height="100%" viewBox="0 0 247 390"  style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "1.5"}}>
                                            <path id="wheel" d="M123.359,79.775l0,72.843" style={{fill: "none", stroke: "#fff", strokeWidth: "20px"}}/>
                                            <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{fill: "none", stroke: "#fff", strokeWidth: "20px"}}/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="avatar parallax" data-relative-input="true">
                            <div class="main">
                                <img src="images/hero/1.png" alt="" class="layer" data-depth="0.1" />
                            </div>
                            <span class="one"><span class="in layer" data-depth="0.14"></span></span>
                            <span class="two"><span class="in layer" data-depth="0.18"></span></span>
                            <span class="three"><span class="in layer" data-depth="0.22"></span></span>
                            <span class="four"><span class="in layer" data-depth="0.26"></span></span>
                            <span class="five"><span class="in layer" data-depth="0.3"></span></span>
                            <h3 class="stroke_text"><span class="">Aali</span></h3>
                        </div>
                    </div>
                </div>
                <div class="socials">
                    <ul>
                        <li><a href="#"><img class="svg" src="images/svg/social/facebook.svg" alt="" /></a></li>
                        <li><a href="#"><img class="svg" src="images/svg/social/twitter.svg" alt="" /></a></li>
                        <li><a href="#"><img class="svg" src="images/svg/social/instagram.svg" alt="" /></a></li>
                    </ul>
                </div>
                <div class="hero_mail">
                    <a class="line_anim" href="#">hello@aali.com</a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;