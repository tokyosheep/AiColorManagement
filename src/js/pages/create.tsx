import React,{FC} from "react";

import NavHead from "../components/common/navHead/navHead";
import CreateMain from "../components/create/createMain";
import ColorAside from "../components/common/colorAside/colorAside";
import StrageAside from "../components/common/strageAside/strageAside";

import AsideAddedForm from "../components/create/createColorBox/createBoxAside/asideAddedForm";

import { MainContainer } from "../styles/container";
const { Container } = MainContainer;

import { WindowProps } from "../components/common/navHead/navHead";

const CreatePage:FC<WindowProps> = (props) =>{
    return(
        <Container>
            <NavHead {...props} />
            <ColorAside Elm={()=><AsideAddedForm />} />
            <CreateMain />
            <StrageAside />
        </Container>
    )
}

export default CreatePage;