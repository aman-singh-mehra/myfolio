import React from "react";
import { Link } from "react-router-dom";

function BlogSection() {
    return(
        <div className="aali_tm_section" id="blog">
            <div className="aali_tm_news">
                <div className="container">
                    <div className="aali_tm_main_title" data-text-align="center" data-color="dark">
                        <span>Latest Updates</span>
                        <h3>From My Blog</h3>
                        <p>We offer high quality products for competitive prices. Our main goal is customer satisfaction</p>
                    </div>
                    <div className="news_list">
                        <ul>
                            <li className="wow fadeInLeft" data-wow-duration="1s">
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="images/thumbs/42-29.jpg" alt="" />
                                        <div className="main" data-img-url="images/news/1.jpg"></div>
                                        <Link className="aali_tm_full_link" to="#"></Link>
                                    </div>
                                    <div className="details">
                                        <span className="category"><Link to="#">Web Design</Link></span>
                                        <h3 className="title"><Link to="#">How to create simple personal website</Link></h3>
                                        <span className="date">November 10, 2021</span>
                                    </div>
                                    <div className="button">
                                        <div className="aali_tm_learn_more">
                                            <Link to="#">Full Story</Link>
                                        </div>
                                    </div>
                                    <div className="news_hidden_details">
                                        <div className="news_popup_informations">
                                            <div className="text">
                                                <p>Aali is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                                <p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
                                                <p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-duration="1s">
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="images/thumbs/42-29.jpg" alt="" />
                                        <div className="main" data-img-url="images/news/2.jpg"></div>
                                        <Link className="aali_tm_full_link" to="#"></Link>
                                    </div>
                                    <div className="details">
                                        <span className="category"><Link to="#">Development</Link></span>
                                        <h3 className="title"><Link to="#">What is mobile app and web design</Link></h3>
                                        <span className="date">October 22, 2021</span>
                                    </div>
                                    <div className="button">
                                        <div className="aali_tm_learn_more">
                                            <Link to="#">Full Story</Link>
                                        </div>
                                    </div>
                                    <div className="news_hidden_details">
                                        <div className="news_popup_informations">
                                            <div className="text">
                                                <p>Aali is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                                                <p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
                                                <p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
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

export default BlogSection;