import React,{FC} from "react";

import NavHead from "../components/common/navHead/navHead";
import AdjustMain from "../components/adjust/adjustMain";
import ColorAside from "../components/common/colorAside/colorAside";
import StrageAside from "../components/common/strageAside/strageAside";

import { MainContainer } from "../styles/container";
const { Container } = MainContainer;

import { WindowProps } from "../components/common/navHead/navHead";
import { LoadCommonColor } from "../parts/button/buttons";

const ReplacePage:FC<WindowProps> = (props) =>{
    
    return(
        <Container>
            <NavHead {...props}/>
            <AdjustMain />
            <ColorAside Elm={()=><LoadCommonColor />}/>
            <StrageAside />
        </Container>
    )
}

export default ReplacePage;