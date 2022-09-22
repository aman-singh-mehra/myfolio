import React from "react";
import AppHeader from "../AppHeader";
import AboutSection from "../About";
import SkillSection from "../Skills";
import PortfolioSection from "../Portfolio";

function AppMain() {
    return (
        <div className="aali_tm_all_wrap" data-magic-cursor="show" data-color="crimson"> 
            <AppHeader />
            <AboutSection />
            <SkillSection />
            <PortfolioSection />
        </div>
    )
}

export default AppMain;