
import * as React from "react";
import {connect} from "react-redux";
import { useCallback } from "react";
import {mapStateProps} from "../redux/actions/mapStateProps";
import {dispatchProps} from "../redux/actions/mapDispatchProps";
import {Props} from "../redux/propsType";

import {SideMenuRadio} from "./parts/radio";

const SideMenu = (props:Props) =>{
    const handleRadioButton = useCallback((e,arg)=>{
        const mode = {...props.state.modeMenuList};
        Object.keys(mode).forEach(key=>mode[key]=false);
        mode[arg.prop] = e.target.checked;
        props.set_Mode(mode);
    },[props.state]);
    const modeList = [];
    Object.entries(props.state.modeMenuList).forEach(([key,value])=>{
        modeList.push(<li key={key}><SideMenuRadio func={handleRadioButton} arg={{prop:key}} checked={value} name={key}/></li>);
    });
    return(
        <nav className="asideMenu">
            <ul className="asideMenu__list">
                {modeList}
            </ul>
        </nav>
    )
}

export default connect(mapStateProps,dispatchProps)(SideMenu);