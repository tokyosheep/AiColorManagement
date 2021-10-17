import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { darken } from "polished";
import { RGB , CMYK } from "../../../redux/commonType";
import { CMYKAxe , RGBAxe , AxeKey } from "../../../redux/reducer/create";

import { setColorCSS } from "../../../redux/commonType";
import { CenterPlace } from "../../../styles/mixin";

import { axeColor_setColor , axeColor_setNumber } from "../../../redux/actions/createActions";
import { StateType } from "../../../redux/stateType";

const ColorBoxTextBox = styled.label`
    width: 80px;
    height: 25px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #fff;
    & > input{
        border: none;
        background: rgba(0,0,0,0);
        color: #fff;
        &:focus{
            outline: none;
        }
    }
    
`;

const TextBoxTitle = styled.div`
    font-size: 10px;
    font-weight: 300;
    margin-right: 3px;
`;
type HandleNumberFunc = (key:"step"|"number",e:React.ChangeEvent<HTMLInputElement>)=>void;

const NumberBox:FC<{value:number,prop:"step"|"number",func:HandleNumberFunc}> = ({value,prop,func}) =>{
    return(
        <ColorBoxTextBox>
            <TextBoxTitle>{prop}</TextBoxTitle>
            <input type="number" value={value} onChange={(e)=>func(prop,e)}/>
        </ColorBoxTextBox>
    )
}

const AxeTitle = styled.span`
    color: #fff;
    font-weight: 300;
    font-size: 25px;
    margin-bottom: 8px;
`;

const ColorCheckBoxWrapper = styled.label<{color:string,checked:boolean}>`
    width: 80px;
    height: 25px;
    background: ${props=> props.checked ? darken(0.1,props.color) : darken(0.3,props.color)};
    border: 1px solid ${props=>props.color};
    position: relative;
    transition: .3s linear;
    display: block;
    cursor: pointer;
    margin-bottom: 5px;
    & > input{
        display: none;
    }
`;

const ColorBoxTitle = styled.div<{checked:boolean}>`
    color: ${props=> props.checked ? "#fff" : "#999"};
    font-weight: 300;
    transition: .3s linear;
    ${CenterPlace};
`;

const ColorBoxWrapper = styled.div`
    width: 100px;
    height: 210px;
    background: #6F6F6F;
    padding: 10px;
`;

export type CreateBoxProps = {
    box:CMYKAxe|RGBAxe,
    axe:AxeKey,
    profile:"CMYK"|"RGB"
}

const CreateColorBox:FC<CreateBoxProps> = ({box,axe,profile}) =>{
    const dispatch = useDispatch();
    const commonColorBox = useSelector((state:StateType)=>state.commonColorBox);
    const handleNumberBox:HandleNumberFunc = useCallback((key,e)=>{
        dispatch(axeColor_setNumber(key,parseFloat(e.target.value),axe,commonColorBox.profile));
    },[box]);
    const handleColorCheckBox:(key:keyof CMYK|keyof RGB)=>void = useCallback((key)=>{
        box[key] = !box[key];
        dispatch(axeColor_setColor({...box},axe,commonColorBox.profile));
    },[box]);
    const colorBoxes = Object.entries(box).filter(([key,value])=> key !== "number" && key !== "step" ).map(([key,value]:[keyof CMYK|keyof RGB,boolean],i)=>{
        return(
            <ColorCheckBoxWrapper color={setColorCSS(key)} checked={value}>
                <input type="checkbox" checked={value} onChange={()=>handleColorCheckBox(key)} />
                <ColorBoxTitle checked={value}>{key}</ColorBoxTitle>
            </ColorCheckBoxWrapper>
        )
    })
    return(
        <ColorBoxWrapper>
            <AxeTitle>{axe}</AxeTitle>
            {colorBoxes}
            <NumberBox prop="number" value={box.number} func={handleNumberBox}/>
            <NumberBox prop="step" value={box.step} func={handleNumberBox}/>
        </ColorBoxWrapper>
    )
}

export default CreateColorBox;