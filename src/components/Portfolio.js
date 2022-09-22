import React from "react";
import { Link } from "react-router-dom";

function PortfolioSection() {
    return(
        <div className="aali_tm_section help" id="portfolio">
            <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
                <div className="container">
                    <div className="aali_tm_main_title" data-text-align="center" data-color="light">
                        <span>Selected works</span>
                        <h3>Check my portfolio</h3>
                    </div>
                    <div className="portfolio_filter">
                        <ul>
                            <li><Link to="#" className="current" data-filter="*">All</Link></li>
                            <li><Link to="#" data-filter=".vimeo">Vimeo</Link></li>
                            <li><Link to="#" data-filter=".youtube">Youtube</Link></li>
                            <li><Link to="#" data-filter=".soundcloud">Soundcloud</Link></li>
                            <li><Link to="#" data-filter=".image">Image</Link></li>
                            <li><Link to="#" data-filter=".detail">Detail</Link></li>
                        </ul>
                    </div>
                    <div className="portfolio_list">
                        <ul className="gallery_zoom">
                            <li className="vimeo">
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="images/thumbs/1-1.jpg" alt="" />
                                        <div className="main" data-img-url="images/portfolio/1.jpg"></div>
                                    </div>
                                    <div className="overlay"></div>
                                    <img className="svg" src="images/svg/social/vimeo.svg" alt="" />
                                    <div className="details">
                                        <span>Vimeo</span>
                                        <h3>New Laptop</h3>
                                    </div>
                                    <Link className="aali_tm_full_link popup-vimeo" to="https://vimeo.com/337293658"></Link>
                                </div>
                            </li>
                            <li className="youtube">
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="images/thumbs/1-1.jpg" alt="" />
                                        <div className="main" data-img-url="images/portfolio/2.jpg"></div>
                                    </div>
                                    <div className="overlay"></div>
                                    <img className="svg" src="images/svg/social/youtube-2.svg" alt="" />
                                    <div className="details">
                                        <span>Youtube</span>
                                        <h3>Best Phone</h3>
                                    </div>
                                    <Link className="aali_tm_full_link popup-youtube" to="https://www.youtube.com/watch?v=7e90gBu4pas"></Link>
                                </div>
                            </li>
                            <li className="soundcloud">
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="images/thumbs/1-1.jpg" alt="" />
                                        <div className="main" data-img-url="images/portfolio/3.jpg"></div>
                                    </div>
                                    <div className="overlay"></div>
                                    <img className="svg" src="images/svg/social/soundcloud.svg" alt="" />
                                    <div className="details">
                                        <span>Soundcloud</span>
                                        <h3>Smart Headphone</h3>
                                    </div>
                                    <Link className="aali_tm_full_link soundcloude_link mfp-iframe audio" to="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></Link>
                                </div>
                            </li>
                            <li className="detail">
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="images/thumbs/1-1.jpg" alt="" />
                                        <div className="main" data-img-url="images/portfolio/4.jpg"></div>
                                    </div>
                                    <div className="overlay"></div>
                                    <img className="svg" src="images/svg/text.svg" alt="" />
                                    <div className="details">
                                        <span>Detail</span>
                                        <h3>Hippie Sabotage</h3>
                                    </div>
                                    <Link className="aali_tm_full_link portfolio_popup" to="#"></Link>

                                    <div className="hidden_content">
                                        <div className="popup_details">
                                            <div className="main_details">
                                                <div className="textbox">
                                                    <p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance ease of modification.</p>
                                                    <p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product.</p>
                                                </div>
                                                <div className="detailbox">
                                                    <ul>
                                                        <li>
                                                            <span className="first">Client</span>
                                                            <span>Alvaro Morata</span>
                                                        </li>
                                                        <li>
                                                            <span className="first">Category</span>
                                                            <span><Link to="#">Detail</Link></span>
                                                        </li>
                                                        <li>
                                                            <span className="first">Date</span>
                                                            <span>March 07, 2021</span>
                                                        </li>
                                                        <li>
                                                            <span className="first">Share</span>
                                                            <ul className="share">
                                                                <li><Link to="#"><img className="svg" src="images/svg/social/facebook.svg" alt="" /></Link></li>
                                                                <li><Link to="#"><img className="svg" src="images/svg/social/twitter.svg" alt="" /></Link></li>
                                                                <li><Link to="#"><img className="svg" src="images/svg/social/instagram.svg" alt="" /></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="additional_images">
                                                <ul>
                                                    <li>
                                                        <div className="list_inner">
                                                            <div className="my_image">
                                                                <img src="images/thumbs/4-2.jpg" alt="" />
                                                                <div className="main" data-img-url="images/portfolio/1.jpg"></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="list_inner">
                                                            <div className="my_image">
                                                                <img src="images/thumbs/4-2.jpg" alt="" />
                                                                <div className="main" data-img-url="images/portfolio/2.jpg"></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="list_inner">
                                                            <div className="my_image">
                                                                <img src="images/thumbs/4-2.jpg" alt="" />
                                                                <div className="main" data-img-url="images/portfolio/3.jpg"></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="image">
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="images/thumbs/1-1.jpg" alt="" />
                                        <div className="main" data-img-url="images/portfolio/5.jpg"></div>
                                    </div>
                                    <div className="overlay"></div>
                                    <img className="svg" src="images/svg/maximize.svg" alt="" />
                                    <div className="details">
                                        <span>Image</span>
                                        <h3>Mockup Camera</h3>
                                    </div>
                                    <Link className="aali_tm_full_link zoom" to="images/portfolio/5.jpg"></Link>
                                </div>
                            </li>
                            <li className="detail">
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="images/thumbs/1-1.jpg" alt="" />
                                        <div className="main" data-img-url="images/portfolio/6.jpg"></div>
                                    </div>
                                    <div className="overlay"></div>
                                    <img className="svg" src="images/svg/text.svg" alt="" />
                                    <div className="details">
                                        <span>Detail</span>
                                        <h3>Good Present</h3>
                                    </div>
                                    <Link className="aali_tm_full_link portfolio_popup" to="#"></Link>

                                    <div className="hidden_content">
                                        <div className="popup_details">
                                            <div className="main_details">
                                                <div className="textbox">
                                                    <p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance ease of modification.</p>
                                                    <p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product.</p>
                                                </div>
                                                <div className="detailbox">
                                                    <ul>
                                                        <li>
                                                            <span className="first">Client</span>
                                                            <span>Alvaro Morata</span>
                                                        </li>
                                                        <li>
                                                            <span className="first">Category</span>
                                                            <span><Link to="#">Detail</Link></span>
                                                        </li>
                                                        <li>
                                                            <span className="first">Date</span>
                                                            <span>March 07, 2021</span>
                                                        </li>
                                                        <li>
                                                            <span className="first">Share</span>
                                                            <ul className="share">
                                                                <li><Link to="#"><img className="svg" src="images/svg/social/facebook.svg" alt="" /></Link></li>
                                                                <li><Link to="#"><img className="svg" src="images/svg/social/twitter.svg" alt="" /></Link></li>
                                                                <li><Link to="#"><img className="svg" src="images/svg/social/instagram.svg" alt="" /></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="additional_images">
                                                <ul>
                                                    <li>
                                                        <div className="list_inner">
                                                            <div className="my_image">
                                                                <img src="images/thumbs/4-2.jpg" alt="" />
                                                                <div className="main" data-img-url="images/portfolio/1.jpg"></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="list_inner">
                                                            <div className="my_image">
                                                                <img src="images/thumbs/4-2.jpg" alt="" />
                                                                <div className="main" data-img-url="images/portfolio/2.jpg"></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="list_inner">
                                                            <div className="my_image">
                                                                <img src="images/thumbs/4-2.jpg" alt="" />
                                                                <div className="main" data-img-url="images/portfolio/3.jpg"></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection;