import React,{FC} from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import CommonColorBox  from "../../../parts/colorBox/commonColorBox";
import { ProfileButton , OtherStdButton } from "../../../parts/button/buttons";

import { MainContainer } from "../../../styles/container";
import { StateType } from "../../../redux/stateType";
const { ColorBoxContainer } = MainContainer;

const ColorAside:FC<{Elm:FC}> = ({Elm}) =>{
    const color = useSelector((state:StateType)=>state.commonColorBox);
    return(
        <ColorBoxContainer>
            <CommonColorBox {...color}/>
            <ProfileButton profile={color.profile}/>
            <Elm />
            <OtherStdButton name="write data" func={(name)=>{}} />
        </ColorBoxContainer>
    )
}

export default ColorAside;