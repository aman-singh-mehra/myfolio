import React from "react";
import { Link } from "react-router-dom";

function CopyrightSection() {
    return(
        <div className="aali_tm_section">
            <div className="aali_tm_copyright">
                <div className="container">
                    <div className="copyright_inner">
                        <div className="top">
                            <div className="logo">
                                <img src="images/logo/logo.png" alt="" />
                            </div>
                            <div className="social">
                                <span>Connect</span>
                                <ul>
                                    <li><Link to="#"><i className="icon-facebook-1"></i></Link></li>
                                    <li><Link to="#"><i className="icon-twitter-1"></i></Link></li>
                                    <li><Link to="#"><i className="icon-instagram-3"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <p>Designed with love by <Link className="line_anim" to="https://themeforest.net/user/marketify" target="_blank">Marketify</Link> &copy; 2021</p>
                            </div>
                            <div className="right">
                                <ul>
                                    <li><Link className="line_anim" to="#">Terms &amp; Condition</Link></li>
                                    <li><Link className="line_anim" to="#">Privacy Policy</Link></li>
                                    <li><Link className="line_anim" to="#">Support</Link></li>
                                </ul>
                            </div>
                        </div>
                        <span className="border moving_effect" data-direction="y" data-reverse="yes"></span>
                    </div>
                </div>
                <span className="square moving_effect" data-direction="x">
                    <Link className="totop" to="#">
                        <img className="svg one" src="images/svg/arrow-top.svg" alt="" />
                        <img className="svg two" src="images/svg/arrow-top.svg" alt="" />
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default CopyrightSection;