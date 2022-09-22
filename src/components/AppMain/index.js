import React from "react";
import AppHeader from "../AppHeader";
import AboutSection from "../About";
import SkillSection from "../Skills";
import PortfolioSection from "../Portfolio";
import ServiceSection from "../Services";
import ResumeSection from "../Resume";
import TestimonialSection from "../Testimonial";
import BlogSection from "../Blog";
import CounterSection from "../Counter";
import ContactSection from "../Contact";
import CopyrightSection from "../Copyright";

function AppMain() {
    return (
        <div className="aali_tm_all_wrap" data-magic-cursor="show" data-color="crimson"> 
            <AppHeader />
            <AboutSection />
            <SkillSection />
            <PortfolioSection />
            <ServiceSection />
            <ResumeSection />
            <TestimonialSection />
            <BlogSection />
            <CounterSection />
            <ContactSection />
            <CopyrightSection />

            <div className="mouse-cursor cursor-outer"></div>
	        <div className="mouse-cursor cursor-inner"></div>
        </div>
    )
}

export default AppMain;