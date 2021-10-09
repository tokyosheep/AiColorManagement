import React,{FC} from "react";
import styled from "styled-components";
import { darken } from "polished";

import { WindowKeys , SetMode } from "../../../pages/customHooks/windowMode";
import { MainContainer } from "../../../styles/container";
const { Container } = MainContainer;

import { commonBlue } from "../../../styles/commonColor";

const NavButton = styled.div`
    background: ${commonBlue};
    height: 100%;
    width: 100px;
    position: relative;
    &:active{
        ${darken(0.2,commonBlue)}
    }
`;

type Props = {
    modes:WindowKeys[],
    func:SetMode
}

const NavHead:FC<Props> = ({modes,func}) =>{
    const buttons = modes.map((btn,index)=>{
        <NavButton onClick={()=>func(btn)} key={index}>
            {btn}
        </NavButton>
    });
    return(
        <Container>
            {buttons}
        </Container>
    )
}

export default NavHead;