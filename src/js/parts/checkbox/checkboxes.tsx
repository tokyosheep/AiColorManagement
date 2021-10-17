import React,{FC} from "react";
import styled from "styled-components";

import { commonGreen } from "../../styles/commonColor";
import { YAxe } from "../../styles/mixin";
import { FormBoxWidth } from "../../styles/commonValue";

const StdCheckBoxWrapper = styled.label`
    width: ${FormBoxWidth}px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    border: 1px solid #000;
    cursor: pointer;
    & > input{
        display: none;
    }
`;

const StdCheckBoxText = styled.div`
    color: #fff;
    font-weight: 300;
    font-size: 15px;
`;

const StdCheckSwitchHole = styled.div`
    background: ${commonGreen};
    position: relative;
    width: 30px;
    height: 10px;
    border-radius: 5px;
`;

const StdSwitchBall = styled.div<{checked:boolean}>`
    width: 17px;
    height: 17px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    ${YAxe};
    left: ${props=>props.checked ? "-10%" : "60%"};
    transition: .3s linear;
`;

type CheckProps = {
    checked:boolean,
    name:string,
    func:(e:React.ChangeEvent<HTMLInputElement>,name:string)=>void
}

export const StdCheckBox:FC<CheckProps> = ({checked,name,func}) =>{
    return(
        <StdCheckBoxWrapper>
            <input type="checkbox" checked={checked} onChange={(e)=>func(e,name)}/>
            <StdCheckSwitchHole>
                <StdSwitchBall checked={checked}></StdSwitchBall>
            </StdCheckSwitchHole>
            <StdCheckBoxText>{name}</StdCheckBoxText>
        </StdCheckBoxWrapper>
    )
}