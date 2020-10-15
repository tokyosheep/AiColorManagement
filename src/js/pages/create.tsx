import * as React from "react";
import {Props} from "../redux/propsType";

import SideMenu from "../components/sideMenu";
import Header from "../components/header";
import CreateMain from "../components/create/createMain";
import Footer from "../components/footer";

const CreatePattern = () =>{
    return(
        <div className="containerCreate">
            <SideMenu />
            <Header mode="create pattern" />
            <CreateMain />
            <Footer />
        </div>
    )
}

export default CreatePattern;