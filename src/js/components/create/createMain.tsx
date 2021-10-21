import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import { CMYKAxe , RGBAxe , AxeKey } from "../../redux/reducer/create";

import { MainContainer } from "../../styles/container";
import { StateType } from "../../redux/stateType";

import CreateColorBox from "./createColorBox/colorBox";
import { NoticeBleButton } from "../../parts/button/buttons";

const { CenterContainer } = MainContainer;

import { CreateColorJSX } from "../../redux/reducer/create";
import { SendHostScript } from "../../fileSystem/connext";
import { writeDebugData } from "../../fileSystem/init";

const ColorListWrapper = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    gap: 10px;
`;

const CreateMain = () =>{
    const createColors = useSelector((state:StateType)=>state.axeColorBox);
    const originPoint = useSelector((state:StateType)=>state.createColorOriginPoint);
    const colorBox = useSelector((state:StateType)=>state.commonColorBox);
    const centerPoint = useSelector((state:StateType)=>state.centerPoint);
    const boxes = Object.entries(createColors[colorBox.profile.toLocaleLowerCase()]).map(([key,value]:[AxeKey,CMYKAxe|RGBAxe],i)=>{
        return(
            <li key={i}>
                <CreateColorBox profile={colorBox.profile} box={value} axe={key} />
            </li>
        )
    });
    const createColorsOnAI = async() =>{
        const connect = new SendHostScript();
        const arg:CreateColorJSX = {
            type:"createPattern",
            color:{...createColors,space:colorBox.profile},
            option:{
                centerPoint:centerPoint,
                start:originPoint,
                color:{...colorBox[colorBox.profile.toLocaleLowerCase()]}
            }
        }
        //await writeDebugData(arg);
        const r = await connect.callHostScript(arg);
        console.log(r);
    }
    return(
        <CenterContainer>
            <ColorListWrapper>
                {boxes}
            </ColorListWrapper>
            <NoticeBleButton name="create" func={createColorsOnAI}/>
        </CenterContainer>
    )
}

export default CreateMain;