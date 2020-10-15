import * as React from "react";

import {SingleProcessButton} from "./parts/JsxButton";

const Footer = () =>{
    return(
        <footer className="footer">
            <SingleProcessButton name="write data" func="writeColorData"/>
            <p>developed by kawano Shuji</p>
        </footer>
    )
}

export default Footer;