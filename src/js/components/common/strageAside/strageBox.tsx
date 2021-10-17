import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import { CMYK , RGB } from "../../../redux/commonType";
import { StrageColorBox } from "../../../redux/reducer/strage";

import { commonColor_setColor , commonColor_setProfile } from "../../../redux/actions/commonColorActions";

const reverseNum:(num:number)=>number = num => 255 - num*2.55;

const turnCMYKColor:(color:CMYK)=>string = color => {
    const values = Object.entries(color).reduce((acc,[key,value])=>{
        if(key === "black")return acc;
        const num = reverseNum(value+color.black);
        acc[key] = num < 0 ? 0 : num > 255 ? 255 : num ;
        return acc;
    },{cyan:0,magenta:0,yellow:0});
    return `rgb(${Math.trunc(values.cyan)},${Math.trunc(values.magenta)},${Math.trunc(values.yellow)})`;
}

const RGBString:(color:RGB)=>string = color => `rgb(${color.red},${color.green},${color.blue})`; 

const StrageBox = styled.div`
    width: 170px;
    height: 100%;
    padding: 5px;
    padding-top: 10px;
    display: block;
    cursor: pointer;
    &:hover{
        background: rgba(255,255,255,0.1);
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ColorTitle = styled.span`
    font-size: 15px;
    color: #fff;
    font-weight: 300;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 5px;
`;

const ColorListWrapper = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
    & > li{
        color: #fff;
        font-size: 10px;
        font-weight: 300;
        display: flex;
        justify-content: space-between;
        & > span{
            display: block;
        }
    }
`;

const ColorDisplay = styled.div<{color:string}>`
    background: ${props=>props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
`;

const StrageColor:FC<StrageColorBox> = ({profile,cmyk,rgb,name}) =>{
    const dispatch = useDispatch();
    const SetCommonColorForm = () =>{
        dispatch(commonColor_setProfile(profile));
        dispatch(commonColor_setColor(profile,profile==="CMYK" ? {...cmyk} : {...rgb}));
    }
    const colorList = Object.entries(profile==="CMYK" ? cmyk : rgb).map(([key,value],index)=>{
        return(
            <li key={index}>
                <span>{key}</span>
                <span>:{value}</span>
            </li>
        )
    })
    return(
        <StrageBox onClick={SetCommonColorForm}>
            <ColorTitle>{name}</ColorTitle>
            <ContentWrapper>
                <ColorDisplay color={profile==="CMYK" ? turnCMYKColor(cmyk) : RGBString(rgb) }></ColorDisplay>
                <ColorListWrapper>
                    {colorList}
                </ColorListWrapper>
            </ContentWrapper >
        </StrageBox>
    )
}

export default StrageColor;