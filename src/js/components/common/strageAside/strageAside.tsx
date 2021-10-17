import React from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import { StateType } from "../../../redux/stateType";

import { MainContainer } from "../../../styles/container";
const { StrageContainer } = MainContainer;

import StrageColor from "./strageBox";

const StrageAside = () =>{
    const colors = useSelector((state:StateType)=>state.tempStrage);
    const colorList = colors.map((c,i)=><StrageColor key={i} cmyk={c.cmyk} rgb={c.rgb} profile={c.profile} name={c.name} />)
    return(
        <StrageContainer>
            {colorList}
        </StrageContainer>
    )
}

export default StrageAside;