import * as React from "react";
import {useMemo} from "react";
import {connect} from "react-redux";
import {mapStateProps} from "../redux/actions/mapStateProps";
import {dispatchProps} from "../redux/actions/mapDispatchProps";
import {Props} from "../redux/propsType";
import {init,reloadEvent} from "../fileSystem/init";
import LoadingComp from "../components/loading/loading";

import AdjustForm from "./adjust";
import CreatePattern from "./create";
import StrageColor from "./strage";

const Layout = (props:Props) =>{
    console.log(props);
    useMemo(()=>{
        init();
        reloadEvent();
    },[]);
    const modes = Object.entries(props.state.modeMenuList).map(([key,value])=>({key:key,value:value}));
    const mode = modes.find(m=> m.value===true);
    const getMode = (mode:string) =>{
        switch(mode){
            case "adjust":
                return<AdjustForm />;

            case "create":
                return <CreatePattern />;

            case "saveColor":
                return <StrageColor />;

            default:
                return<AdjustForm />;
        }
    }
    return(
        <>
            <LoadingComp />
            {getMode(mode.key)}
        </>
    )
}

export default connect(mapStateProps,dispatchProps)(Layout);