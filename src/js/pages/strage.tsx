import React,{FC} from "react";

import NavHead from "../components/common/navHead/navHead";

import StrageMain from "../components/strage/strageMain";

import { StrageContainer } from "../styles/container";
const { Container } = StrageContainer;

import { WindowProps } from "../components/common/navHead/navHead";

const StragePage:FC<WindowProps> = (props) =>{
    return(
        <Container>
            <NavHead {...props}/>
            <StrageMain />
        </Container>
    )
}

export default StragePage;