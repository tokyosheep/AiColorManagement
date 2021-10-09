import React,{useCallback} from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import { MainContainer } from "../../../styles/container";
import { StateType } from "../../../redux/stateType";
import { FormWrapper } from "../../adjust/adjustMain";
import { FillRadios } from "../../adjust/optionCheckBoxes";

import { NoticeBleButton } from "../../../parts/button/buttons";

const { CenterContainer } = MainContainer;

const ReplaceMain = () =>{
    return(
        <CenterContainer>
            <FormWrapper>
                <FillRadios />
                <NoticeBleButton name="replace" func={()=>{}} />
            </FormWrapper>
        </CenterContainer>
    )
}

export default ReplaceMain;