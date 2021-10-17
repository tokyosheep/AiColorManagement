import React,{FC} from "react";
import styled from "styled-components";
import { darken } from "polished";

import { WindowKeys , SetMode , windowKyes } from "../../../pages/customHooks/windowMode";
import { MainContainer } from "../../../styles/container";
const { NavContainer } = MainContainer;

import { commonBlue } from "../../../styles/commonColor";

import { CenterPlace } from "../../../styles/mixin";

const NavButton = styled.div<{checked:boolean}>`
    background: ${props => props.checked ? commonBlue : darken(0.1,commonBlue)};
    height: 100%;
    width: 100px;
    position: relative;
    cursor: pointer;
    &:active{
        ${darken(0.2,commonBlue)}
    }

`;

const NavButtonText = styled.div`
    ${CenterPlace};
    color: #fff;
    font-size: 15px;
    font-weight: 300;
`;

export type WindowProps = {
    mode:WindowKeys,
    func:SetMode
}

const NavHead:FC<WindowProps> = ({mode,func}) =>{
    const buttons = windowKyes.map((btn,index)=>{
        return(
            <NavButton onClick={()=>func(btn)} key={index} checked={btn===mode}>
                <NavButtonText>{btn}</NavButtonText>
            </NavButton>
        )
    });
    return(
        <NavContainer>
            {buttons}
        </NavContainer>
    )
}

export default NavHead;