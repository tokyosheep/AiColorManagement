import * as React from "react";
import {Props} from "../redux/propsType";

import SideMenu from "../components/sideMenu";
import Header from "../components/header";
import SaveColorMain from "../components/saveColor/saveColorMain";
import Footer from "../components/footer";

const StrageColor = () =>{
    return(
        <div className="containerStrage">
            <SideMenu />
            <Header mode="strage" />
            <SaveColorMain />
            <Footer />
        </div>
    )
}

export default StrageColor;