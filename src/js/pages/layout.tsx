import React,{FC, useEffect} from "react";

import AdjustPage from "./adjust";
import CreatePage from "./create";

import ReplacePage from "./replace";
import StragePage from "./strage";

import LoadingPanel from "../components/common/loading/loading";

import { WindowProps } from "../components/common/navHead/navHead";
import useWindow from "./customHooks/windowMode";

import { init , prevent_drag_event } from "../fileSystem/init";

const setPageElement:(props:WindowProps)=>JSX.Element = props =>{
    switch(props.mode){
        case "Adjust":
            return <AdjustPage {...props} />;

        case "Create":
            return <CreatePage {...props} />;

        case "Replace":
            return <ReplacePage {...props} />;

        case "Strage":
            return <StragePage {...props} />;

        default:
            return <AdjustPage {...props} />;
    }
}

const Layout = () =>{
    const [window,setWindow] = useWindow();
    useEffect(()=>{
        prevent_drag_event();
        init();
    },[]);
    return(
        <>
            <LoadingPanel />
            {setPageElement({mode:window,func:setWindow})}
        </>
    )
}

export default Layout;