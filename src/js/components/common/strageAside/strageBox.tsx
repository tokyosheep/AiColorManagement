import React,{FC} from "react";
import styled from "styled-components";

import { CMYK , RGB , initCMYK , initRGB  , ColorBox , Profile } from "../../../redux/commonType";
import { StrageColorBox } from "../../../redux/reducer/strage";

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
    width: 120px;
    height: 80px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ColorTitle = styled.span`
    font-size: 15px;
    color: #fff;
    font-weight: 300;
`;

const ColorListWrapper = styled.ul`
    list-style:none;
    padding: 0;
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
    const colorList = Object.entries(profile==="CMYK" ? cmyk : rgb).map(([key,value],index)=>{
        return(
            <li key={index}>
                <span>{key}</span>
                <span>:{value}</span>
            </li>
        )
    })
    return(
        <StrageBox>
            <ColorTitle>{name}</ColorTitle>
                <ColorListWrapper>
                    {colorList}
                </ColorListWrapper>
            <ColorDisplay color={profile==="CMYK" ? turnCMYKColor(cmyk) : RGBString(rgb) }></ColorDisplay>
        </StrageBox>
    )
}

export default StrageColor;