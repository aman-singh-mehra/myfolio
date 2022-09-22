import React from "react";
import { Link } from "react-router-dom";

function ContactSection() {
    return(
        <div className="aali_tm_section" id="contact">
            <div className="aali_tm_contact">
                <div className="container">
                    <div className="aali_tm_main_title" data-text-align="center" data-color="dark">
                        <span>Get in Touch</span>
                        <h3>Connect with Me with Confidence</h3>
                    </div>
                    <div className="contact_inner">
                        <div className="left wow fadeInLeft" data-wow-duration="1s">
                            <div className="text">
                                <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <img className="svg" src="images/svg/call.svg" alt="" />
                                        <span>Call me</span>
                                        <h3>+1234 5678 9000</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <img className="svg" src="images/svg/message.svg" alt="" />
                                        <span>Email</span>
                                        <h3><Link className="line_anim" to="mailto:hello@aali.com">hello@aali.com</Link></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right wow fadeInRight" data-wow-duration="1s">
                            <div className="fields">
                                <form action="/" method="post" className="contact_form" id="contact_form" autoComplete="off">
                                    <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                                    <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                                    <div className="input_list">
                                        <ul>
                                            <li><input id="name" type="text" placeholder="Your Name" /></li>
                                            <li><input id="email" type="text" placeholder="Your Email" /></li>
                                            <li><input id="phone" type="number" placeholder="Your Phone" /></li>
                                        </ul>
                                    </div>
                                    <div className="message_area">
                                        <textarea id="message" placeholder="Your message here"></textarea>
                                    </div>
                                    <div className="aali_tm_button">
                                        <Link id="send_message" to="#"><span>Submit Message <img className="svg" src="images/svg/send.svg" alt="" /></span></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="square moving_effect" data-direction="y" data-reverse="yes"></span>
            </div>
        </div>
    )
}

export default ContactSection;