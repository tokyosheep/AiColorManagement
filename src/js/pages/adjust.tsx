import * as React from "react";

import SideMenu from "../components/sideMenu";
import Header from "../components/header";
import AdjustColor from "../components/adjust/adjustMain";
import Footer from "../components/footer";

const AdjustForm = () =>{
    return(
        <div className="AdjustContainer">
            <SideMenu />
            <Header mode="adjust color"/>
            <AdjustColor />
            <Footer />
        </div>
        )
}

export default AdjustForm;