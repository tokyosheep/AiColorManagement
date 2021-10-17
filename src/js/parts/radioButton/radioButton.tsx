import React,{FC} from "react";
import styled from "styled-components";

import { CenterPlace , YAxe } from "../../styles/mixin";
import { FormBoxWidth } from "../../styles/commonValue";

const StdRadioWrapper = styled.label`
    width: ${FormBoxWidth}px;
    height: 30px;
    border: 1px solid #000;
    background: #383838;
    position:relative;
    display: block;
    cursor: pointer;
    & > input{
        display: none;
    }
`;

const RadioBall = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #000;
    ${YAxe};
    left: 10%;
`;

const BallOfSwitch = styled.div<{checked:boolean}>`
    ${CenterPlace};
    background: #8989FF;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    transform: translate(-50%,-50%) ${props=>`scale(${props.checked ? 1 : 0})`};
    transition: .3s linear;
`;

const StdRadioText = styled.div`
    color: #fff;
    font-weight: 300;
    ${CenterPlace};
`;

export type RadioProps = {
    checked:boolean,
    name:string,
    func:(e:React.ChangeEvent<HTMLInputElement>,name:string)=>void
}

export const StdRadioBox:FC<RadioProps> = ({checked,name,func}) =>{
    return(
        <StdRadioWrapper>
            <RadioBall>
                <BallOfSwitch checked={checked}></BallOfSwitch>
            </RadioBall>
            <input type="radio" checked={checked} onChange={(e)=>func(e,name)} />
            <StdRadioText>{name}</StdRadioText>
        </StdRadioWrapper>
    )
}