import React,{FC} from "react";
import styled from "styled-components";

import { commonGreen } from "../../styles/commonColor";
import { YAxe } from "../../styles/mixin";
import { FormBoxWidth } from "../../styles/commonValue";
import { darken } from "polished";

const StdCheckBoxWrapper = styled.label<{disabled:boolean}>`
    width: ${FormBoxWidth}px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    border: 1px solid #000;
    cursor: pointer;
    background: ${props=>props.disabled ? "#222": "rgba(0,0,0,0)" };
    & > input{
        display: none;
    }
`;

const StdCheckBoxText = styled.div<{disabled:boolean}>`
    color: ${props=>props.disabled ? "#888" : "#fff" };
    font-weight: 300;
    font-size: 15px;
`;

const StdCheckSwitchHole = styled.div<{checked:boolean}>`
    background: ${props => props.checked ? commonGreen : darken(0.2,commonGreen)};
    position: relative;
    width: 30px;
    height: 10px;
    border-radius: 5px;
    transition : .3s linear;
`;

const StdSwitchBall = styled.div<{checked:boolean,disabled:boolean}>`
    width: 17px;
    height: 17px;
    background: ${props=>props.disabled || !props.checked ? "#888" : "#fff" };
    border-radius: 50%;
    position: absolute;
    ${YAxe};
    left: ${props=>props.checked ?  "60%" : "-10%" };
    transition: .3s linear;
`;

type CheckProps = {
    checked:boolean,
    name:string,
    func:(e:React.ChangeEvent<HTMLInputElement>,name:string)=>void,
    disabled?:boolean
}

export const StdCheckBox:FC<CheckProps> = ({checked,name,func,disabled=false}) =>{
    return(
        <StdCheckBoxWrapper disabled={disabled}>
            <input type="checkbox" checked={checked} onChange={(e)=>func(e,name)} disabled={disabled}/>
            <StdCheckSwitchHole checked={checked}>
                <StdSwitchBall checked={checked} disabled={disabled}></StdSwitchBall>
            </StdCheckSwitchHole>
            <StdCheckBoxText disabled={disabled}>{name}</StdCheckBoxText>
        </StdCheckBoxWrapper>
    )
}