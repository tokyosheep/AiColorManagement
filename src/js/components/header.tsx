import * as React from "react";

const Header = ({mode}:{mode:string}) =>{
    return(
        <header className="Header">
            <h1 className="head-large">{mode}</h1>
        </header>
    )
}

export default Header;